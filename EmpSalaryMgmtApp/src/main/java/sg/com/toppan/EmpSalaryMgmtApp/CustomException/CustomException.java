package sg.com.toppan.EmpSalaryMgmtApp.CustomException;

public class CustomException extends RuntimeException{

	public CustomException(String errorMessage) {
		super(errorMessage);
	}
}
