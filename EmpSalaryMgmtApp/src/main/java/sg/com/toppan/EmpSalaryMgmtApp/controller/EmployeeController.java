package sg.com.toppan.EmpSalaryMgmtApp.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;
import sg.com.toppan.EmpSalaryMgmtApp.service.IEmployeeService;
import sg.com.toppan.EmpSalaryMgmtApp.util.FileUploadUtil;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "*")
public class EmployeeController {

	@Autowired
	private IEmployeeService employeeService;

	@PostMapping(value = "/upload", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
	public ResponseEntity<Object> uploadMEmployee(@RequestPart MultipartFile file) {
		Map<String, String> body = new HashMap<String, String>();
		if (FileUploadUtil.isCSVFile(file)) {
			employeeService.saveCSV(file);
			body.put("message", "File uploaded successfully!");
			return new ResponseEntity<>(body, HttpStatus.OK);
		}
		body.put("message", "Please upload csv file");
		return new ResponseEntity<>(body, HttpStatus.BAD_REQUEST);
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
