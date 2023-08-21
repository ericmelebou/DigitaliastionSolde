package com.digitalisationSolde.auth;


import com.digitalisationSolde.config.JwtService;
import com.digitalisationSolde.model.Agent;
import com.digitalisationSolde.model.Role;
import com.digitalisationSolde.model.RoleType;
import com.digitalisationSolde.repository.AgentRepository;
import com.digitalisationSolde.service.RoleService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional
public class AuthenticationService {
  private final AgentRepository repository;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;
  private final AuthenticationManager authenticationManager;

  @Autowired
  private RoleService roleService;

  public AuthenticationResponse register(RegisterRequest request) {
    Set<Role> roles = new HashSet<>();
    if(request.getRoles() == null){
      Role defaultRole = roleService.getRoleByNom(RoleType.valueOf("USER"));
      roles.add(defaultRole);
    } else {
      for (String roleName : request.getRoles()) {
        Role role = roleService.getRoleByNom(RoleType.valueOf(roleName));
        if(role != null){
          roles.add(role);
        }

      }
    }

    var user = Agent.builder()
            .nom(request.getNom())
            .prenom(request.getPrenom())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .roles(roles)
            .activated(true)
            .build();
    repository.save(user);
    var jwtToken = jwtService.generateToken(user);
    return AuthenticationResponse.builder()
            .token(jwtToken)
            .agent(user)
            .build();
  }

  public AuthenticationResponse authenticate(AuthenticationRequest request) {
    authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                    request.getEmail(),
                    request.getPassword()
            )
    );
    var utilisateur = repository.findByEmail(request.getEmail())
            .orElseThrow();
    var jwtToken = jwtService.generateToken(utilisateur);
    return AuthenticationResponse.builder()
            .token(jwtToken).agent(utilisateur)
            .build();
  }



}
