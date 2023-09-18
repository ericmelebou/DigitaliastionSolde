package com.digitalisationSolde.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.*;
@Entity
@Data
public class Document2101 extends Document {
   private int numeroEcriture;
   private int codePoste;
   private Date dateDebut;

}