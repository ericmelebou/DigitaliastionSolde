package com.digitalisationSolde.repository;

import com.digitalisationSolde.model.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository  extends CrudRepository<Role, Long> {
}
