package com.digitalisationSolde.auth;


import com.digitalisationSolde.model.Agent;
import com.digitalisationSolde.repository.AgentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    private final AgentRepository repository;

    @GetMapping("/test")
    public String find() {
        return "Hello world";
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ) {
        if (repository.existsByEmail(request.getEmail())) {
            AuthenticationResponse response = new AuthenticationResponse();
            response.setMesssage("Email a déja été utilisé");
            return ResponseEntity.badRequest().body(new AuthenticationResponse(("Email a déja été utilisé")));
        } else {
            return ResponseEntity.ok(service.register(request));
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        Agent agent = repository.findByEmail(request.getEmail()).get();
        if(agent.getActivated()!=true) {
            AuthenticationResponse error = new AuthenticationResponse("Votre compte est inactif! veuillez contacter l'administrateur");
            return ResponseEntity.badRequest().body(error);
        }
        return ResponseEntity.ok(service.authenticate(request));
    }


}
