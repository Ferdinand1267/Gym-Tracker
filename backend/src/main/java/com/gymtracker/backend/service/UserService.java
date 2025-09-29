package com.gymtracker.backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;
import org.springframework.stereotype.Service; //this imports @Service to indicate that it is a spring service that contains logic
import com.gymtracker.backend.repository.UserRepository;
import com.gymtracker.backend.model.User;
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    public String authenticateUser(String username, String password)
    {
       Optional<User> checkuser = userRepository.findByUsername(username);    
        if(!checkuser.isPresent())
            {
                return "Incorrect";
            } 
        User user =checkuser.get();    
        if (password.equals(user.getPassword()))
        {
            return "Correct";
        }
        else
        {
            return "Incorrect";
        }
    }
}
