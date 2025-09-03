package com.gymtracker.backend.model;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

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

    @OneToMany(mappedBy = "workout", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference //to serialize parent and children
    private List<Exercise> exercises;

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
    public List<Exercise> getExercises() {
        return exercises;
    }
    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }
}
