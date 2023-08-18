package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Agent;
import com.digitalisationSolde.model.Role;
import com.digitalisationSolde.service.AgentService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/api/")
@RequiredArgsConstructor
@CrossOrigin("*")
public class AgentController {
    @Autowired
    private AgentService agentService;

    PasswordEncoder passwordEncoder;
    @PostMapping("/agent")
    public Agent createAgent(@RequestBody Agent Agent) {
        return agentService.saveAgent(Agent);
    }

    @GetMapping("/agent/{id}")
    public Agent getAgent(@PathVariable("id") final Long id) {
        Optional<Agent> Agent = agentService.getAgent(id);
        if(Agent.isPresent()) {
            return Agent.get();
        } else {
            return null;
        }
    }

    @GetMapping("/agents")
    public Iterable<Agent> getAgents() {

        return agentService.getAgents();
    }

    @PutMapping("/agent/{id}")
    public Agent updateAgent(@PathVariable("id") final Long id, @RequestBody Agent agent) {
        Optional<Agent> p = agentService.getAgent(id);
        if(p.isPresent()) {
            Agent currentAgent = p.get();

            String nom = agent.getNom();
            if(nom != null) {
                currentAgent.setNom(nom);
            }

            String prenoms = agent.getPrenom();
            if(nom != null) {
                currentAgent.setPrenom(prenoms);
            }

            String email = agent.getEmail();
            if(email != null) {
                currentAgent.setEmail(email);
            }

            Boolean activated = agent.getActivated();
            if(activated != null) {
                currentAgent.setActivated(activated);
            }
            int deleted = agent.getDeleted();
            if(deleted >= 0) {
                currentAgent.setDeleted(deleted);
            }
            Set<Role> roles = agent.getRoles();
            if(roles != null) {
                currentAgent.setRoles(roles);
            }


            agentService.saveAgent(currentAgent);
            return currentAgent;
        } else {
            return null;
        }
    }

    @DeleteMapping ("/agent/{id}")
    public void deleteAgent(@PathVariable ("id") final Long id) {
        agentService.deleteAgent(id);
    }

}
