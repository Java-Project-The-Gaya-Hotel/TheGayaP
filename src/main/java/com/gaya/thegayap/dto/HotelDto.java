package com.gaya.thegayap.dto;

import lombok.Data;

@Data
public class HotelDto {
    private int hotelNum;
    private String hotelName;
    private String hotelAddr;
    private String hotelTel;
    private int mealAdult;
    private int mealChild;
}
