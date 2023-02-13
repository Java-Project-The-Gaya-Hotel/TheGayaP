package com.gaya.thegayap.dto;

import lombok.Data;

/**
 * 로그인 신청용 DTO
 */
@Data
public class MemberLoginRequestDto {
    private String memberId;
    private String memberPw;
}