package com.digitalisationSolde.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.*;
@Entity
@Data
public class Document1107 extends Document {
   private int codeModeReglement;
   private int numeroCompteEnBanque;
   private int codeAgence;
   private int cleRib;

}