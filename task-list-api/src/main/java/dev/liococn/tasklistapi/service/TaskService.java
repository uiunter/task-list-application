package dev.liococn.tasklistapi.service;

import dev.liococn.tasklistapi.dto.TaskDto;
import dev.liococn.tasklistapi.model.Task;
import dev.liococn.tasklistapi.repository.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    public List<TaskDto> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(TaskDto::fromEntity)
                .collect(Collectors.toList());
    }

    public TaskDto getTaskById(Long id) {
        return taskRepository.findById(id).map(TaskDto::fromEntity).orElseThrow(NoSuchElementException::new);
    }

    public TaskDto createTask(Task task) {

        return TaskDto.fromEntity(taskRepository.save(task));
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    @Transactional
    public TaskDto updateTask(Long id, TaskDto taskDto) {
         Task task = taskRepository.findById(id).orElseThrow(NoSuchElementException::new);
         if (taskDto.getTitle() != null) {
             task.setTitle(taskDto.getTitle());
         }

         if (taskDto.getDueDate() != null) {
             task.setDueDate(taskDto.getDueDate());
         }

         if (taskDto.getCompleted() != null) {
            task.setCompleted(taskDto.getCompleted());
         }

         return TaskDto.fromEntity(taskRepository.save(task));
    }

    public List<TaskDto> getAllTasksByUsername(String username) {
        return taskRepository.findAllByUsername(username)
                .stream()
                .map(TaskDto::fromEntity)
                .collect(Collectors.toList());
    }
}
