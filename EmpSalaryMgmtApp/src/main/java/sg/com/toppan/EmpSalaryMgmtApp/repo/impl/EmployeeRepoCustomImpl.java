package sg.com.toppan.EmpSalaryMgmtApp.repo.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import sg.com.toppan.EmpSalaryMgmtApp.model.Employee;
import sg.com.toppan.EmpSalaryMgmtApp.repo.EmployeeRepoCustom;

public class EmployeeRepoCustomImpl implements EmployeeRepoCustom {

	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Employee> customSearch(double minSalary, double maxSalary, int offset, int limit, String sortAttribute,
			String order) {
		
		String query = String.format("Select id, login, name, salary from employee where salary >= %f and "
						+ "salary <= %f order by %s %s limit %d offset %d"
						, minSalary, maxSalary, sortAttribute, order, limit, offset);
		
		List<Object[]> resultList = em.createNativeQuery(query).getResultList();
		
		List<Employee> empList = new ArrayList<Employee>();
		
		for (Object[] obj : resultList) {
			
			Employee e = new Employee();
			e.setId((String) obj[0]);
			e.setLogin((String)obj[1]);
			e.setName((String)obj[2]);
			e.setSalary((double)obj[3]);
			
			empList.add(e);
		}
		return empList;
	}
	
}
