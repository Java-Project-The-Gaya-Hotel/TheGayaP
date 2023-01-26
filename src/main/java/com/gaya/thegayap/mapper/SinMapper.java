package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SinMapper {
//    임시 호텔 입력
    void insertHotel(SinDto sinDto);

//    임시 방 입력

    void insertRoom(SinDto2 sinDto2);

//
    int checkCodeOverlap(String code);

    List<SinRoomDto> checkBookOverlap(int hotelNum);

    int getHotelNum(String hotelName);

    void reservationRoom(SinReservDto sinReservDto);

    List<SinInquiryDto> getQAList();

    List<String> getHotelName();

    SinRoomDto getRoomInfo(String roomCode);
}
