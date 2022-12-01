package sg.com.toppan.EmpSalaryMgmtApp.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;

public interface IEmployeeService {

	List<Employee> findAllEmployees();
	void saveCSV(MultipartFile file);
	List<Employee> searchEmployee(double minSalary, double maxSalary, int offset, int limit, String sort);
}
