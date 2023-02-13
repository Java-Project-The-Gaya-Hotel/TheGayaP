package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.*;

import java.util.List;

public interface HotelService {

    List<RoomInfoDto> checkRoomList(int hotelNum, String checkIn, String checkOut, int adultCount);

    void reservationRoom(ReservationDto reservationDto);


    List<InquiryDto> getQAList();

    List<HotelDto> hotelList() throws Exception;

    RoomInfoDto getRoomBucket(String roomCode);

    List<AnswerChatDto> getAnswerDataList(int idx);

    void insertReply(AnswerChatDto answerChatDto);

    MealCostDto getMealCost(int roomCode);
}
