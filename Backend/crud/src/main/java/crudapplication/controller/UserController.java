package crudapplication.controller;

import crudapplication.dto.CreateRequest;
import crudapplication.dto.Response;
import crudapplication.dto.UpdateRequest;
import crudapplication.entity.UserTable1;
import crudapplication.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@Controller
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService userService;

    //save all user
    @PostMapping("/save")
    public ResponseEntity<Response> create(@RequestBody CreateRequest dto){
        return ResponseEntity.ok(userService.create(dto));
    }

    //get all users
    @GetMapping("/allUser")
    public ResponseEntity<List<UserTable1>> getAll(){
        return ResponseEntity.ok(userService.findAll());
    }

    //Read One
    @RequestMapping("/users/{id}")
    public ResponseEntity<UserTable1> getOne(@PathVariable Long id){
        return ResponseEntity.ok(userService.findById(id));
    }

    //Update User
    @PutMapping("/update/{id}")
    public ResponseEntity<UserTable1> updateUser(@PathVariable Long id, @RequestBody UpdateRequest dto){
        return ResponseEntity.ok(userService.updateDetails(dto,id));
    }

    //Delete By id
    @DeleteMapping("/DeleteUser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){
        userService.delete(id);
        return ResponseEntity.ok("User Data has been Deleted: "+id);
    }
}
