package com.digitalisationSolde.repository;

import com.digitalisationSolde.model.Agent;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AgentRepository extends CrudRepository<Agent, Long> {
  @Query("SELECT u FROM Agent u WHERE u.email = ?1")
  Optional<Agent> findByEmail(String email);
  Boolean existsByEmail (String email);
  public Optional<Agent> findByResetPasswordToken(String resetPasswordToken);



}
