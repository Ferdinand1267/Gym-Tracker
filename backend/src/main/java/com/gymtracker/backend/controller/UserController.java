package com.gymtracker.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.gymtracker.backend.model.User;
import com.gymtracker.backend.repository.UserRepository;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired private UserRepository userRepository;
    @PostMapping("/register")
    public User register(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User request) {
        return userRepository.findByUsernameAndPassword(
                request.getUsername(), request.getPassword()
        ).map(ResponseEntity::ok)
         .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
    }
}
