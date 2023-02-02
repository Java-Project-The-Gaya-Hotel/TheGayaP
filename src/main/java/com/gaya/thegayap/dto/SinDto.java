package com.gaya.thegayap.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

// 호텔 입력 임시 dto
@Getter
@AllArgsConstructor
public class SinDto {
    private String hotelName;
    private String hotelAddr;
    private String hotelTel;
    private int hotelMealAdult;
    private int hotelMealChild;


}
