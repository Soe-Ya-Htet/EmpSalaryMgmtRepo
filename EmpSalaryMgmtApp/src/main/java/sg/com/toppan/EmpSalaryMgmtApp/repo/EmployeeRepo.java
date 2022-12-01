package sg.com.toppan.EmpSalaryMgmtApp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;


@Repository
public interface EmployeeRepo extends JpaRepository<Employee, String>, EmployeeRepoCustom{
	
}
