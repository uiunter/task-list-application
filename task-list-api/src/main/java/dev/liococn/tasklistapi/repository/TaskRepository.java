package dev.liococn.tasklistapi.repository;

import dev.liococn.tasklistapi.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByUsername(String username);
}
