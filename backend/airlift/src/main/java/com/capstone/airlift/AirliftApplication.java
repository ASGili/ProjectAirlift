package com.capstone.airlift;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class AirliftApplication {

	public static void main(String[] args) {
		SpringApplication.run(AirliftApplication.class, args);
	}

}
