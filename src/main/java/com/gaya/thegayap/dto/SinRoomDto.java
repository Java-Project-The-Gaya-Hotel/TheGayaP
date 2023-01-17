package com.gaya.thegayap.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SinRoomDto {
    private String roomName;
    private int roomTwinCost;
    private int roomTwinWeekend;
    private int roomFamilyCost;
    private int roomFamilyWeekend;
    private String roomCode;
    private String roomInfo;
    private int roomMaxAdult;

    private String reservationCheckIn;
    private String reservationCheckOut;
}
