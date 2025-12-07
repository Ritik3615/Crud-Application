package crudapplication.service;

import crudapplication.dto.CreateRequest;
import crudapplication.dto.Response;
import crudapplication.dto.UpdateRequest;
import crudapplication.entity.UserTable1;
import crudapplication.repository.UserTableRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserTableRepository userTableRepository;

    public UserService(UserTableRepository userTableRepository) {
        this.userTableRepository = userTableRepository;
    }

    //find all user
    public List<UserTable1> findAll(){
        return userTableRepository.findAll();
    }

    //Create new user
    public Response create(CreateRequest dto){

        UserTable1 user = new UserTable1();
        user.setName(dto.getName());
        user.setPhone(dto.getPhone());
        user.setEmail(dto.getEmail());

        UserTable1 saveUser = userTableRepository.save(user);

        String message = "Hi "+ saveUser.getName()+", Your Data has been saved Successfully";
        return new Response(message,saveUser);
    }

    //find by id(else throws error)
    public UserTable1 findById(Long id){
        return userTableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not Found By: "+id));
    }

    //update user
    public UserTable1 updateDetails(UpdateRequest update, Long id){
        UserTable1 user = userTableRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(""));

        if (update.getEmail() != null) user.setName(update.getName());
        if (update.getPhone() != null) user.setPhone(update.getPhone());
        if (update.getEmail() != null) user.setEmail(update.getEmail());
        if (update.getStatus() != null) user.setStatus(update.getStatus());

        return userTableRepository.save(user);
    }

    //Delete Method
    public Response delete(Long id){
        UserTable1 user = userTableRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("Id not Found Enter Valid Id"));
        userTableRepository.deleteById(id);
        user.setStatus("Deleted");
//        UserTable1 saved = userTableRepository.save(user);

        String msg = "The Data has been deleted of "+user.getName();
        return new Response(msg, null);
    }
}

