package com.gymtracker.backend.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.gymtracker.backend.model.Workout;
public interface WorkoutRepository extends JpaRepository<Workout, Long> {
    List<Workout> findByUserId(Long userId);
}
