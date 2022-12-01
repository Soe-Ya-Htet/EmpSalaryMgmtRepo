package sg.com.toppan.EmpSalaryMgmtApp.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVParser;
import org.apache.commons.csv.CSVRecord;
import org.springframework.web.multipart.MultipartFile;

import sg.com.toppan.EmpSalaryMgmtApp.CustomException.CustomException;
import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;

public class FileUploadUtil {

	public static String FILE_TYPE = "text/csv";
	static String[] FILE_HEADERS = { "id", "login", "name", "salary" };

	public static boolean isCSVFile(MultipartFile file) {
		if (!FILE_TYPE.equals(file.getContentType())) {
			return false;
		}
		return true;
	}

	public static List<Employee> convertToEmpList(InputStream inStream) throws CustomException {

		List<Employee> uploadEmployees = new ArrayList<Employee>();

		try (BufferedReader fileReader = new BufferedReader(new InputStreamReader(inStream, "UTF-8"));
				CSVParser csvParser = new CSVParser(fileReader,
						CSVFormat.DEFAULT.withFirstRecordAsHeader().withIgnoreHeaderCase().withTrim());) {

			// To check duplicate id and login in the upload csv file
			List<String> uploadIdList = new ArrayList<String>();
			List<String> uploadLoginList = new ArrayList<String>();

			Iterable<CSVRecord> csvRecords = csvParser.getRecords();
			
			// To check empty file upload
			int numberOfRecords = 0;

			for (CSVRecord csvRecord : csvRecords) {
				
				numberOfRecords++;
				
				String id = csvRecord.get("id");

				if (id.charAt(0) != '#') { // to ignore comment line
					
					if(!csvRecord.isConsistent()) {
						throw new CustomException("Uploaded file contains inconsistent record with header.");
					}

					Employee emp = new Employee();

					// For id
					if (uploadIdList.stream().anyMatch(existingId -> existingId.equals(id))) {
						throw new CustomException("The file has duplicate id which is expected to be unique.");
					} else {
						emp.setId(id);
						uploadIdList.add(id);
					}

					// For login
					String login = csvRecord.get("login");
					if (uploadLoginList.stream().anyMatch(existingLogin -> existingLogin.equals(login))) {
						throw new CustomException("The file has duplicate login which is expected to be unique.");
					} else {
						emp.setLogin(login);
						uploadLoginList.add(login);
					}

					emp.setName(csvRecord.get("name"));

					// For salary
					double salary = Double.parseDouble(csvRecord.get("salary"));
					if (salary < 0) {
						throw new CustomException("Salary should not be less than zero.");
					} else {
						emp.setSalary(salary);
					}

					uploadEmployees.add(emp);
				}

			}
			
			if (numberOfRecords < 1) {
				throw new CustomException("File cannot be empty or should have at least one record.");
			}

		} catch (IOException e) {
			throw new RuntimeException("fail to parse CSV file: " + e.getMessage());
		} catch (NumberFormatException e) {
			throw new CustomException("The file has wrong format salary.");
		}

		return uploadEmployees;
	}

}
