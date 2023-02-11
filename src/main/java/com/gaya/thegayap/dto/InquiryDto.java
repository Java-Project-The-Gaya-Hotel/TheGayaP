package com.gaya.thegayap.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 문의글 dto
 * author 신현섭
 * inquiry Table 과 연관됨
 */
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InquiryDto {

    private int inquiryNum;
    private String inquiryCategory;
    private String inquiryHotelName;
    private int inquiryReservationNum;
    private String inquiryTitle;
    private String inquiryContents;
    private String inquiryUserName;
    private String inquiryUserEmail;
    private String inquiryUserTel;
    private String inquiryCreateDate;
    private String inquiryDeletedYn;

    private String inquiryStatus;

    private String inquiryPassword;
    private String inquiryHidden;
}
