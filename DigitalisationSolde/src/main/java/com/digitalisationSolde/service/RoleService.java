package com.digitalisationSolde.service;

import com.digitalisationSolde.model.Role;
import com.digitalisationSolde.model.RoleType;
import com.digitalisationSolde.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public Optional<Role> getRole(final Long id){
        return roleRepository.findById(id);
    }

    public Iterable<Role> getRoles(){
        return roleRepository.findAll();
    }

    public void deleteRole(final Long id){
        roleRepository.deleteById(id);
    }

    public Role saveRole(Role role){
        return roleRepository.save(role);
    }

    public Role getRoleByNom(RoleType roleName) {
        return  roleRepository.findByNom(roleName);
    }
}
