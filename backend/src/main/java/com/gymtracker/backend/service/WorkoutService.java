package com.gymtracker.backend.service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Optional;
import java.util.List;
import org.springframework.stereotype.Service; //this imports @Service to indicate that it is a spring service that contains logic
import com.gymtracker.backend.repository.WorkoutRepository;
import com.gymtracker.backend.model.Workout;
@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;

    public void deleteById(Long id) {
        this.workoutRepository.deleteById(id);
    }

    public List<Workout> findAll() {
        return workoutRepository.findAll();
    }
}
