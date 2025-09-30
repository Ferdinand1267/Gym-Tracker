package com.gymtracker.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gymtracker.backend.model.User;
import com.gymtracker.backend.service.UserService;
import com.gymtracker.backend.repository.UserRepository;
//@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired 
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user) {
        User savedUser = userService.registerUser(user);
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED); // 201 Created
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User info) {
        return userService.authenticateUser(info.getUsername(), info.getPassword()).equals("Correct");
    }
}
