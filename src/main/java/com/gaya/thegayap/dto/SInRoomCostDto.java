package com.gaya.thegayap.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;


/**
 * 조식 가격과 방 가격을 보내는 dto
 */
@Getter
@NoArgsConstructor
public class SInRoomCostDto {


    private String hotelMealAdult;
    private String hotelMealChild;
    private String roomTwinCost;
    private String roomTwinWeekend;
    private String roomFamilyCost;
    private String roomFamilyWeekend;
}
