package com.digitalisationSolde.controller;

import com.digitalisationSolde.model.Role;
import com.digitalisationSolde.model.RoleType;
import com.digitalisationSolde.model.Agent;
import com.digitalisationSolde.service.RoleService;
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
public class RoleController {
    @Autowired
    private RoleService roleService;

    PasswordEncoder passwordEncoder;
    @PostMapping("/role")
    public Role createRole(@RequestBody Role role) {
        return roleService.saveRole(role);
    }

    @GetMapping("/role/{id}")
    public Role getRole(@PathVariable("id") final Long id) {
        Optional<Role> Role = roleService.getRole(id);
        if(Role.isPresent()) {
            return Role.get();
        } else {
            return null;
        }
    }

    @GetMapping("/roles")
    public Iterable<Role> getRoles() {

        return roleService.getRoles();
    }

    @PutMapping("/role/{id}")
    public Role updateRole(@PathVariable("id") final Long id, @RequestBody Role role) {
        Optional<Role> r = roleService.getRole(id);
        if (r.isPresent()) {
            Role currentRole = r.get();

            RoleType nom = role.getNom();
            if (nom != null) {
                currentRole.setNom(nom);
            }

            Set<Agent> agents = role.getAgents();
            if (agents != null) {
                currentRole.setAgents(agents);
            }

            roleService.saveRole(currentRole);
            return currentRole;
        } else {
            return null;
        }
    }
    @DeleteMapping ("/role/{id}")
    public void deleteRole(@PathVariable ("id") final Long id) {
        roleService.deleteRole(id);
    }
}
