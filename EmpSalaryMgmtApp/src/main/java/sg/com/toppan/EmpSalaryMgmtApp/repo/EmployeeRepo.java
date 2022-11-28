package sg.com.toppan.EmpSalaryMgmtApp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;


@Repository
public interface EmployeeRepo extends JpaRepository<Employee, String>, EmployeeRepoCustom{

//	@Query(value = "Select e from employee where e.salary >= ?1 and e.salary <=?2 order by e.?5 ?6 offset ?3 limit ?4", nativeQuery = true)
//	List<Employee> searchEmployee(double minSalary, double maxSalary, int offset, int limit, String sortAttribute,
//			String order);
	
}
