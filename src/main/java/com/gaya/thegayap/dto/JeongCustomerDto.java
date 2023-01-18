package com.gaya.thegayap.dto;

import lombok.Data;


@Data
public class JeongCustomerDto {
    private String customerId;
    private String customerName;
    private String earnedPoints;
    private String usedPoints;

    private String reservationDate;
}
