package com.gymtracker.backend.model;
import jakarta.persistence.*;
import java.util.List;
@Entity //this tells spring boot that this is a table in the database
public class User {
    @Id  //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;

    public Long getID() {   
        return id;
    }
    public void setID(Long id) {
        this.id=id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username=username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password=password;
    }
}
