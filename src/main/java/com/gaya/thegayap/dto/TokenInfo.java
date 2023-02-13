package com.gaya.thegayap.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * JWT TOKEN Dto
 * author 신현섭
 */
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TokenInfo {

    private String grantType;
    private String accessToken;
    private String refreshToken;
}