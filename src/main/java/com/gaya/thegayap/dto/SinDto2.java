package com.gaya.thegayap.dto;

import lombok.Getter;
import lombok.Setter;

// 방 입력 임시 dto
@Getter
@Setter
public class SinDto2 {
    private int roomHotelIdx;
    private String roomName;
    private String roomInfo;
    private String roomCode;
    private int roomTwinCost;
    private int roomTwinWeekend;
    private int roomFamilyCost;
    private int roomFamilyWeekend;

    private int roomMaxAdult;

}
