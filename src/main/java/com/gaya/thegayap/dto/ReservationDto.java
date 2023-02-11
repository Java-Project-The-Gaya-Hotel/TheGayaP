package com.gaya.thegayap.dto;

import lombok.*;

/**
 * 방 예약 dto
 * reservation, cutomer, member Table 에 연관됨
 */
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReservationDto {

    private long reservationNum;
    private int reservationHotelNum;
    private String reservationRoomName;
    private String reservationRoomCode;
    private String reservationCustomerName;
    private String reservationCustomerId;
    private String reservationCheckIn;
    private String reservationCheckOut;
    private String reservationDate;
    private int reservationNights;
    private int reservationMealAdult;
    private int reservationMealChild;
    private int reservationPeople;
    private String reservationCost;
    private String reservationRequest;

    // customer_table 쪽
    private String customerName;
    private String customerId;
    private String customerEmail;
    private String customerTel;

    // member_table 포인트 적립
    private int earnPoint;



}
