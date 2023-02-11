package com.gaya.thegayap.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * author 정종율
 * 회원 가입 DTO
 */
@Getter
@NoArgsConstructor
@Setter
public class MemberDto {

    private int memberNum;
    private String memberId;
    private String memberName;
    private String memberPw;
    private String memberEmail;
    private String memberTel;
    private String memberBirth;
    private int memberPoint;
    private String memberTier;
    private String memberCreateDate;
    private String memberDeleteDate;
    private String memberDeletedlYn;

    private String memberRole;

}
