package com.digitalisationSolde;

import com.digitalisationSolde.model.*;
import com.digitalisationSolde.service.RoleService;
import com.digitalisationSolde.service.AgentService;
import com.digitalisationSolde.service.TypeDossierService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class DigitalisationSoldeApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitalisationSoldeApplication.class, args);
	}
	@Bean
	CommandLineRunner start(AgentService agentService, RoleService roleService, TypeDossierService typeDossierService){
		return  args -> {
			Set<Role> roles = new HashSet<>();
			roles.add(new Role(RoleType.ADMIN));
			roles.add(new Role(RoleType.USAGER));
		Set<PieceJustificative> piecesJustificatives = new HashSet<>();
 	piecesJustificatives.add(new PieceJustificative("Acte d’affectation"));
 		piecesJustificatives.add(new PieceJustificative("Certificat de prise de service"));
 	piecesJustificatives.add(new PieceJustificative("Un certificat de cessation de paiement"));
 	piecesJustificatives.add(new PieceJustificative("L’arrêté de remise à la disposition de la Fonction Publique (fin de détachement)"));
 		piecesJustificatives.add(new PieceJustificative("Un bulletin de salaire de l’intéressé(e), facultatif"));
 		piecesJustificatives.add(new PieceJustificative("Une photocopie de la CNI"));
 		piecesJustificatives.add(new PieceJustificative("Une demande de reprise formulée par l’intéressé(e)"));

	 typeDossierService.saveTypeDossier(new TypeDossier("Changement de service", piecesJustificatives));
			//agentService.saveAgent(new Agent( "userds@gmail.com","1234",true, roles));


		};
	}
}
