package crudapplication.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<?> handleRuntime(RuntimeException ex) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(ex.getMessage());  // this returns ONLY the message
    }

    public ResponseEntity<?> handleTypeMismatch(Exception ex) {
        return ResponseEntity
                .badRequest()
                .body("Invalid or missing ID. Please select a valid ID from the Read page.");
    }
}
