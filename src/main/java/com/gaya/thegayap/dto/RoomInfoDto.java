package com.gaya.thegayap.dto;


import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 방 리스트 정보들을 보내는 dto
 * hotel_room, stay_room Table 에 연관됨
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor(access = AccessLevel.PROTECTED)
public class RoomInfoDto {
    private int roomNum;
    private int roomHotelNum;
    private String roomName;
    private int roomTwinCost;
    private int roomTwinWeekend;
    private int roomFamilyCost;
    private int roomFamilyWeekend;
    private int roomMaxAdult;
    private String roomInfo;
    private String roomCode;
    private String roomImgUrl;


//    추후 다른 DTO로 가야됨
    private String reservationRoomCode;

}
