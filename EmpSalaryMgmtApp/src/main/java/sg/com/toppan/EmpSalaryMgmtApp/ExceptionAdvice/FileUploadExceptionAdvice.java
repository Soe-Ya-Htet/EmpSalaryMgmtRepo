package sg.com.toppan.EmpSalaryMgmtApp.ExceptionAdvice;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import sg.com.toppan.EmpSalaryMgmtApp.CustomException.CustomException;

@ControllerAdvice
public class FileUploadExceptionAdvice extends ResponseEntityExceptionHandler {

	@ExceptionHandler(MaxUploadSizeExceededException.class)
	public ResponseEntity<Object> handleMaxSizeException(MaxUploadSizeExceededException exc) {
		Map<String, String> body = new HashMap<String, String>();
		body.put("message", "File too large!");
		return new ResponseEntity<>(body, HttpStatus.EXPECTATION_FAILED);
	}
	
	@ExceptionHandler(CustomException.class)
	public ResponseEntity<Object> handleCustomException(CustomException exc){
		Map<String, String> body = new HashMap<String, String>();
		body.put("message", exc.getMessage());
		return new ResponseEntity<>(body, HttpStatus.EXPECTATION_FAILED);
	}
	
}
