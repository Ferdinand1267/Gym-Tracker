package com.gymtracker.backend.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.gymtracker.backend.repository.UserRepository;
import com.gymtracker.backend.model.User;
import com.gymtracker.backend.model.Workout;
import com.gymtracker.backend.repository.WorkoutRepository;
import com.gymtracker.backend.service.WorkoutService;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/workouts")
public class WorkoutController {
    @Autowired
    private WorkoutRepository workoutRepository; 
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private WorkoutService workoutService;

    @GetMapping 
    public List<Workout> getAllWorkouts() {
        return workoutService.findAll();
    }
    @PostMapping
    public Workout addUserWorkout(@RequestBody Workout workout) {
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
        workout.getExercises().forEach(exercise -> exercise.setWorkout(workout));
        return workoutRepository.save(workout);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkout(@PathVariable Long id) {
        workoutService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
