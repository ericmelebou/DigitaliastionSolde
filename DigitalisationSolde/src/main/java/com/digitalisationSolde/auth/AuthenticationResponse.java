package com.digitalisationSolde.auth;

import com.digitalisationSolde.model.Agent;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

  private String token;

  private String messsage;

  private Agent agent;

  public AuthenticationResponse(String messageResponse) {
    this.messsage = messageResponse;
  }
}
