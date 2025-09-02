package com.gymtracker.backend.model;
import jakarta.persistence.*;
@Entity
public class Workout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    //getters and setters
    public Long getID(){
        return id;
    }
    public void setID(Long id){
        this.id=id;
    }
    public String getDate(){
        return date;
    }
    public void setDate(String date) {
        this.date=date;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user=user;
    }
}
