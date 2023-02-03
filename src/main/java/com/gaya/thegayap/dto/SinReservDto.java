package com.gaya.thegayap.dto;

import lombok.*;

/**
 * 방 예약 dto
 */
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SinReservDto {
    private long reservationNum;
    private int hotelNum;
    private String roomCode;
    private String customerName;
    private String customerId;

    private String customerEmail;
    private String customerTel;
    private String earnedPoints;
    private String usedPoints;

    private String  checkIn;
    private String  checkOut;
    private String  reservationTime;
    private int nights;
    private int breakfastAdultNum;
    private int breakfastChildNum;
    private int peopleAdultNum;
    private int peopleChildNum;
    private int totalCost;

    private int reservationPeople;
    private String reservationRequest;




}
