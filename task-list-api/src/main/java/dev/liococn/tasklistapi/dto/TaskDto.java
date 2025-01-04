package dev.liococn.tasklistapi.dto;


import dev.liococn.tasklistapi.model.Task;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TaskDto {

    private Long id;

    private String title;

    private String username;

    private LocalDate dueDate;

    private Boolean completed;

    public static Task toEntity(TaskDto dto) {
        final Task task = new Task();
        task.setId(dto.getId());
        task.setTitle(dto.getTitle());
        task.setUsername(dto.getUsername());
        task.setDueDate(dto.getDueDate());
        task.setCompleted(dto.getCompleted());

        return task;
    }

    public static TaskDto fromEntity(Task task) {
        return TaskDto.builder()
                .id(task.getId())
                .title(task.getTitle())
                .username(task.getUsername())
                .dueDate(task.getDueDate())
                .completed(task.getCompleted())
                .build();
    }
}
