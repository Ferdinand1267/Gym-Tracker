package com.gymtracker.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.gymtracker.backend.repository.UserRepository;
import com.gymtracker.backend.model.User;
import com.gymtracker.backend.model.Workout;
import com.gymtracker.backend.repository.WorkoutRepository;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {
    @Autowired
    private WorkoutRepository workoutRepository; //this links to the DB helper
    private UserRepository userRepository;

    @GetMapping //this gets all workouts
    public List<Workout> getAllWorkouts() {
        return workoutRepository.findAll();
    }
    @PostMapping
    public Workout addWorkout(@RequestBody Workout workout) {
        if (workout.getExercises() != null) {
            workout.getExercises().forEach(exercise -> exercise.setWorkout(workout));
        }
        return workoutRepository.save(workout);
    }
    @GetMapping("/{userId}")
    public List<Workout> getUserWorkouts(@PathVariable Long userId) {
        return workoutRepository.findByUserId(userId);
    }

    @PostMapping("/{userId}")
    public Workout addWorkout(@PathVariable Long userId, @RequestBody Workout workout) {
        User user = userRepository.findById(userId).orElseThrow();
        workout.setUser(user);
        workout.getExercises().forEach(ex -> ex.setWorkout(workout));
        return workoutRepository.save(workout);
    }
}
