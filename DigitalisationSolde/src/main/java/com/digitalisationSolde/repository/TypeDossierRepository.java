package com.digitalisationSolde.repository;

import com.digitalisationSolde.model.TypeDossier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeDossierRepository  extends CrudRepository<TypeDossier, Long> {
}
