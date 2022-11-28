package sg.com.toppan.EmpSalaryMgmtApp.repo;

import java.util.List;

import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;

public interface EmployeeRepoCustom {

	List<Employee> customSearch(double minSalary, double maxSalary, int offset, int limit, String sortAttribute, String order);
}
