package com.gaya.thegayap.dto;

import lombok.Data;

@Data
public class MemberLoginRequestDto {
    private String memberId;
    private String memberPw;
}