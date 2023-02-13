package com.gaya.thegayap.dto;

import lombok.Data;


/**
 * 비회원 예약 확인을 위한 DTO
 */
@Data
public class NotMemberReservDto {
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
    private String reservationRequest;

    private String hotelName;
}
