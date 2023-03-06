package com.personalhealthrecord.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication 
@ComponentScan({"com"}) 
@EnableJpaRepositories(basePackages = "com.personalhealthrecord.repository")
@EntityScan({ "com.personalhealthrecord.entity" })
public class PhrApplication {

	public static void main(String[] args) {
		SpringApplication.run(PhrApplication.class, args);
	}

}
