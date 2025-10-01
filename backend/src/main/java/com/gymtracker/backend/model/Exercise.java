package com.gymtracker.backend.model;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
@Entity
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int weight;
    private int reps;

    @ManyToOne
    @JoinColumn(name = "workout_id")
    @JsonBackReference //to not serialize back with parent
    private Workout workout;

    //getters and setters
    public Long getID() {
        return id;
    }
    public void setID(Long id){
        this.id=id;
    }
    public String getName(){
        return name;
    }
    public void setName(String name) {
        this.name=name;
    }
    public int getWeight() {
        return weight;
    }
    public void setWeight(int weight) {
        this.weight=weight;
    }
    public int getReps() {
        return reps;
    }
    public void setReps(int reps) {
        this.reps=reps;
    }
    public Workout getWorkout() {
        return workout;
    }
    public void setWorkout(Workout workout) {
        this.workout = workout;
    }
}
