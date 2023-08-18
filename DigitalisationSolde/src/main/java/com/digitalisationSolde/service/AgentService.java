package com.digitalisationSolde.service;

import com.digitalisationSolde.model.AffectationDossier;
import com.digitalisationSolde.model.Agent;
import com.digitalisationSolde.model.Dossier;
import com.digitalisationSolde.repository.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AgentService {
    @Autowired
    private AgentRepository agentRepository;

    @Autowired
    private DossierService dossierService;

    @Autowired
    PasswordEncoder passwordEncoder;

    public Optional<Agent> getAgent(final Long id){
        return agentRepository.findById(id);
    }

    public Iterable<Agent> getAgents(){
        return agentRepository.findAll();
    }

    public void deleteAgent(final Long id){
        agentRepository.deleteById(id);
    }

    public Agent saveAgent(Agent agent){
        String pw = agent.getPassword();
        agent.setPassword(passwordEncoder.encode(pw));

        /*Agent newAgent = new Agent();
        newAgent.setActivated(agent.getActivated());
        newAgent.setEmail(agent.getEmail());
        newAgent.setDeleted(agent.getDeleted());
        newAgent.setPrenom(agent.getPrenom());
        newAgent.setNom(agent.getNom());
        newAgent.setPassword(agent.getPassword());
        newAgent.setDossiers(agent.getDossiers());
        newAgent.setRoles(agent.getRoles());

       if(newAgent.getAffectationDossiers() != null){
           newAgent.getAffectationDossiers().addAll(agent.getAffectationDossiers().stream().map(affectationDossier -> {
               Optional<Dossier> dossier = dossierService.getDossier(affectationDossier.getDossier().getId());
               AffectationDossier newAffectationDossier = new AffectationDossier();
               newAffectationDossier.setAgent(newAgent);
               newAffectationDossier.setDossier(dossier);
               newAffectationDossier.setDateAffectation(affectationDossier.getDateAffectation());
               newAffectationDossier.setStatus(affectationDossier.getStatus());
               newAffectationDossier.setIdAffectateur(affectationDossier.getIdAffectateur());
               return newAffectationDossier;
           }).collect(Collectors.toList()));
       }*/

        return agentRepository.save(agent);

    }
}
