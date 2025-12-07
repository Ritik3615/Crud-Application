package crudapplication.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateRequest {
    private String name;
    private String phone;
    private String email;
    private String status;
}
