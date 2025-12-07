package crudapplication.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateRequest {
    private String name;

    private String phone;

//    @Email(message = "Invalid Email Format")
//    @NotBlank
    private String email;

}
