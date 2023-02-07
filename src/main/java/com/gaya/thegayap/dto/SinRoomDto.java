package com.gaya.thegayap.dto;


import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 방 리스트 정보들을 보내는 dto
 */
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
    private String reservationRoomCode;
    private String roomInfo;
    private int roomMaxAdult;

    private String roomImgUrl;
}
