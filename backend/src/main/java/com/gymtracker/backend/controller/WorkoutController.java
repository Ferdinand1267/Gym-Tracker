package com.gymtracker.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.gymtracker.backend.model.Workout;
import com.gymtracker.backend.repository.WorkoutRepository;
@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {
    @Autowired
    private WorkoutRepository workoutRepository; //this links to the DB helper

    @GetMapping //this gets all workouts
    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }
    @PostMapping
    public Workout addWorkout(@RequestBody Workout workout) {
        return workoutRepository.save(workout);
    }
}
