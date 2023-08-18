package com.digitalisationSolde.repository;

import com.digitalisationSolde.model.CategorieDocument;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategorieDocumentRepository extends CrudRepository<CategorieDocument, Long> {
}
