package com.gaya.thegayap.dto;

import lombok.Data;

@Data
public class JeongResvDto {
    private long reservationNum;
    private int hotelNum;
    private String roomCode;
    private String customerName;
    private String customerId;
    private String reservationCheckIn;
    private String reservationCheckOut;
    private String reservationDate;
    private int reservationNights;
    private int reservationMealAdult;
    private int reservationMealChild;
    private int reservationPeople;
    private int reservationCost;
    private int reservationRequest;

    private String hotelName;
}
