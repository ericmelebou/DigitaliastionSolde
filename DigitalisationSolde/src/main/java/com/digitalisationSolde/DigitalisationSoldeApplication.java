package com.digitalisationSolde;

import com.digitalisationSolde.model.Agent;
import com.digitalisationSolde.model.Role;
import com.digitalisationSolde.model.RoleType;
import com.digitalisationSolde.service.RoleService;
import com.digitalisationSolde.service.AgentService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class DigitalisationSoldeApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitalisationSoldeApplication.class, args);
	}
	@Bean
	CommandLineRunner start(AgentService agentService, RoleService roleService){
		return  args -> {
			Set<Role> roles = new HashSet<>();
			roles.add(new Role(RoleType.ADMIN));
			roles.add(new Role(RoleType.USER));
			agentService.saveAgent(new Agent( "userds@gmail.com","1234",true, roles));


		};
	}
}
