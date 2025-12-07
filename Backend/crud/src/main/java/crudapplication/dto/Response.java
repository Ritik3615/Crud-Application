package crudapplication.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
public class Response {
    private String message;
    private Object data;


}
