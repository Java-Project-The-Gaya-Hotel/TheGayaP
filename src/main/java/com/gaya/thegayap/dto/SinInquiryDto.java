package com.gaya.thegayap.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SinInquiryDto {

    private int inquiryIdx;
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
