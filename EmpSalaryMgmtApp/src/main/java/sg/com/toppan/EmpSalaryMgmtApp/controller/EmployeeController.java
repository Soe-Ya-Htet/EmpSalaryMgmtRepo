package sg.com.toppan.EmpSalaryMgmtApp.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;
import sg.com.toppan.EmpSalaryMgmtApp.service.EmployeeService;


@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	@PostMapping("/upload")
	public ResponseEntity<List<Employee>> uploadEmployee(@RequestBody List<Employee> employees) {
		List<Employee> uploadedEmployees = employeeService.uploadEmployee(employees);
		return new ResponseEntity<>(uploadedEmployees ,HttpStatus.OK);	
	}
	
	@GetMapping("/users")
	public ResponseEntity<List<Employee>> getAllEmployees(@RequestParam("minSalary") double minSalary, @RequestParam("maxSalary") double maxSalary,
														@RequestParam("offset") int offset, @RequestParam("limit") int limit,
														@RequestParam("sort") final String sort) {
		String encodedSort = "";
		try {
			encodedSort = URLEncoder.encode(sort, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		List<Employee> employees = employeeService.searchEmployee(minSalary, maxSalary, offset, limit, encodedSort);
		return new ResponseEntity<> (employees, HttpStatus.OK);
	}
	
}
