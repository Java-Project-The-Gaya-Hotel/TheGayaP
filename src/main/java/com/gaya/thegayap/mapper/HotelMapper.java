package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HotelMapper {



    void reservationRoom(ReservationDto reservationDto);

    void insertCustomer(ReservationDto reservationDto);


    List<InquiryDto> getQAList();


    RoomInfoDto getRoomInfo(String roomCode);

    List<AnswerChatDto> getAnswerList(int idx);

    void insertReply(AnswerChatDto answerChatDto);

    List<RoomInfoDto> getHotelRoomList(FilterRoomDto filterRoomDto);

    List<RoomInfoDto> getStayRoomList(int hotelNum);

    List<RoomInfoDto> checkBookOverlap(FilterRoomDto build);

    MealCostDto getMealCost(int hotelNum);

    List<HotelDto> hotelList() throws Exception;

    void updateMemberPoint(ReservationDto reservationDto);

    void updateInquiryStatus(AnswerChatDto answerStatus);
}
