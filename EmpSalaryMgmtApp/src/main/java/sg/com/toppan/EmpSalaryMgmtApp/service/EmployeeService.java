package sg.com.toppan.EmpSalaryMgmtApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;
import sg.com.toppan.EmpSalaryMgmtApp.repo.EmployeeRepo;


@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepo employeeRepo;
	
	public List<Employee> findAllEmployees(){
		return employeeRepo.findAll();
	}
	
	public List<Employee> uploadEmployee(List<Employee> uploadEmps){
		
		List<Employee> existingEmps = employeeRepo.findAll();
		
		for (Employee uplEmps : uploadEmps) {
			if(existingEmps.stream().anyMatch(e -> e.getLogin().equals(uplEmps.getLogin()))) {
				return null;
			}
		}
		
		return employeeRepo.saveAll(uploadEmps);
	}

	public List<Employee> searchEmployee(double minSalary, double maxSalary, int offset, int limit, String sort) {
		
		// check sorting order sign
		char orderSign = sort.charAt(0);
		if (!(orderSign == '+' || orderSign == '-')) {
			throw new RuntimeException();
		}
		
		// check sorting order attribute
		String sortAttribute = sort.substring(1, sort.length());
		if (!(sortAttribute.equals("id") || sortAttribute.equals("name") || sortAttribute.equals("login") || sortAttribute.equals("salary"))) {
			throw new RuntimeException();
		}
		
		String order = orderSign == '-' ? "DESC" : "ASC";
		
		List<Employee> searchResult = employeeRepo.customSearch(minSalary, maxSalary, offset, limit, sortAttribute, order);
		
		return searchResult;
	}
	
	
}
