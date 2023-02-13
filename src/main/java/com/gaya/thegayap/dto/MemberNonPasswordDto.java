package com.gaya.thegayap.dto;

import lombok.Data;

/**
 * 비밀번호를 제외한 유저의 정보를 보내는 DTO
 */
@Data
public class MemberNonPasswordDto {
    private int memberNum;
    private String memberId;
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
