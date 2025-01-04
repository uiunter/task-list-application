package dev.liococn.tasklistmanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableJpaAuditing
@EnableAsync
public class TaskListManagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskListManagerApplication.class, args);
    }

}
