package com.gaya.thegayap.dto;

import lombok.Data;

@Data
public class JeongMemberDto {
    private int memberNum;
    private String memberId;
    private String memberPw;
    private String memberName;
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
