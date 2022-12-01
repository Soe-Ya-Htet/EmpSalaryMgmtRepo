package sg.com.toppan.EmpSalaryMgmtApp.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import sg.com.toppan.EmpSalaryMgmtApp.CustomException.CustomException;
import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;
import sg.com.toppan.EmpSalaryMgmtApp.service.EmployeeService;
import sg.com.toppan.EmpSalaryMgmtApp.util.FileUploadUtil;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping(value = "/upload", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
	public ResponseEntity<String> uploadMEmployee(@RequestPart MultipartFile file) {
		
		if (FileUploadUtil.isCSVFile(file)) {
			try {
				employeeService.saveCSV(file);
				return ResponseEntity.status(HttpStatus.OK).body("File uploaded successfully");
			} catch (CustomException e) {
				return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(e.getMessage());
			}catch (Exception e) {
				return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("File upload failed.");
			}
		}
		
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload csv file.");
	}

	@GetMapping("/users")
	public ResponseEntity<List<Employee>> getAllEmployees(@RequestParam("minSalary") double minSalary,
			@RequestParam("maxSalary") double maxSalary, @RequestParam("offset") int offset,
			@RequestParam("limit") int limit, @RequestParam("sort") final String sort) {
		String encodedSort = "";
		try {
			encodedSort = URLEncoder.encode(sort, "UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		List<Employee> employees = employeeService.searchEmployee(minSalary, maxSalary, offset, limit, encodedSort);
		return new ResponseEntity<>(employees, HttpStatus.OK);
	}

}
