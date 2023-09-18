package com.digitalisationSolde.model;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.*;
@Entity
@Data
public class Document1102 extends Document {
   private String codeCategorieAnc;
   private String codeEchelleCorpsAnc;
   private int codeGradeAnc;
   private int codeIndiceAnc;
   private String codeCategorieNv;
   private String codeEchelleCorpsNv;
   private int codeGradeNv;
   private int codeIndiceNv;

}