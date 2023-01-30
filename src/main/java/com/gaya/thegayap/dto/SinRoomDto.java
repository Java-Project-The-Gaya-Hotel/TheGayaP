package com.gaya.thegayap.dto;


import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class SinRoomDto {
    private String roomName;
    private int roomHotelNum;
    private int roomTwinCost;
    private int roomTwinWeekend;
    private int roomFamilyCost;
    private int roomFamilyWeekend;
    private String roomCode;
    private String roomInfo;
    private int roomMaxAdult;
}
