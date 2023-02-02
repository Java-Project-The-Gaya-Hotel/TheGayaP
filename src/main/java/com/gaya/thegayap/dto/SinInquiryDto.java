package com.gaya.thegayap.dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 문의글 dto
 */
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SinInquiryDto {

    private int inquiryNum;
    private int inquiryReservationNum;
    private String inquiryCategory;
    private String inquiryHotelName;
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
