package com.gaya.thegayap.dto;

import lombok.Data;


@Data
public class JeongCustomerDto {

    private String reservationNum;
    private String reservationDate;

    private String customerId;
    private String customerName;
    private String customerEarnedPoints;
    private String customerUsedPoints;

}
