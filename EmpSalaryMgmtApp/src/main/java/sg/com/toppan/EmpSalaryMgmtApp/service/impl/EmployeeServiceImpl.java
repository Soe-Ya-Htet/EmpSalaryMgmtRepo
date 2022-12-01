package sg.com.toppan.EmpSalaryMgmtApp.service.impl;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import sg.com.toppan.EmpSalaryMgmtApp.CustomException.CustomException;
import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;
import sg.com.toppan.EmpSalaryMgmtApp.repo.EmployeeRepo;
import sg.com.toppan.EmpSalaryMgmtApp.service.IEmployeeService;
import sg.com.toppan.EmpSalaryMgmtApp.util.FileUploadUtil;

@Service
public class EmployeeServiceImpl implements IEmployeeService {

	@Autowired
	private EmployeeRepo employeeRepo;

	@Override
	public List<Employee> findAllEmployees() {
		return employeeRepo.findAll();
	}

	@Override
	public void saveCSV(MultipartFile file) throws CustomException {
		try {
			List<Employee> uploadEmployees = FileUploadUtil.convertToEmpList(file.getInputStream());
			
			List<Employee> existingEmps = employeeRepo.findAll();
			
			for (Employee emp : uploadEmployees) {
				if (existingEmps.stream().anyMatch(extEmp -> 
											!extEmp.getId().equals(emp.getId()) && 
											extEmp.getLogin().equals(emp.getLogin()))) {
					throw new CustomException("One of the logins duplicated with the existing logins in the system");
				}
			}
			
			employeeRepo.saveAll(uploadEmployees);
		} catch (IOException e) {
			throw new CustomException("Fail to store csv data : " + e.getMessage());
		}
	}

	@Override
	public List<Employee> searchEmployee(double minSalary, double maxSalary, int offset, int limit, String sort) {

		// check sorting order sign
		char orderSign = sort.charAt(0);
		if (!(orderSign == '+' || orderSign == '-')) {
			throw new RuntimeException();
		}

		// check sorting order attribute
		String sortAttribute = sort.substring(1, sort.length());
		if (!(sortAttribute.equals("id") || sortAttribute.equals("name") || sortAttribute.equals("login")
				|| sortAttribute.equals("salary"))) {
			throw new RuntimeException();
		}

		String order = orderSign == '-' ? "DESC" : "ASC";

		List<Employee> searchResult = employeeRepo.customSearch(minSalary, maxSalary, offset, limit, sortAttribute,
				order);

		return searchResult;
	}

}
