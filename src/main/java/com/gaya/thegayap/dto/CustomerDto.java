package com.gaya.thegayap.dto;

import lombok.Data;

/**
 * author 정종율
 * 예약 회원 DTO
 */
@Data
public class CustomerDto {

    private String reservationNum;
    private String reservationDate;

    private String customerId;
    private String customerName;
    private String customerEarnedPoints;
    private String customerUsedPoints;

}
