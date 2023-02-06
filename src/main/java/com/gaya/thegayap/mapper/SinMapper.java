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

    void reservationRoom(SinReservDto sinReservDto);

    void insertCustomer(SinReservDto sinReservDto);


    List<SinInquiryDto> getQAList();

    List<String> getHotelName();

    SinRoomDto getRoomInfo(String roomCode);

    List<SinAnswerChatDto> getAnswerList(int idx);

    void insertReply(SinAnswerChatDto sinAnswerChatDto);

    List<SinRoomDto> getHotelRoomList(SinFilterRoomDto sinFilterRoomDto);

    List<SinRoomDto> getStayRoomList(int hotelNum);

    List<SinRoomDto> checkBookOverlap(SinFilterRoomDto build);

    MealCostDto getMealCost(int hotelNum);
}
