package com.digitalisationSolde.repository;

import com.digitalisationSolde.model.Structure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StructureRepository extends CrudRepository<Structure, Long> {
}
