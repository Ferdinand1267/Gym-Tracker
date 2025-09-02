package com.gymtracker.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.gymtracker.backend.model.User;
public interface UserRepository extends JpaRepository<User, Long> {
}