package com.digitalisationSolde.repository;

import com.digitalisationSolde.model.Role;
import com.digitalisationSolde.model.RoleType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository  extends CrudRepository<Role, Long> {
    Role findByNom(RoleType roleName);
}
