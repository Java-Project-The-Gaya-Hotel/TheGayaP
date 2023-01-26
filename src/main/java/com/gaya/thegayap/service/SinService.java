package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.*;

import java.util.List;

public interface SinService {
    void insertHotel(SinDto sinDto);



    void insertRoom(SinDto2 sinDto2);

    List<SinRoomDto> checkRoomList(String hotelName, int checkIn, int checkOut);

    void reservationRoom(SinReservDto sinReservDto);

    List<SinInquiryDto> getQAList();

    List<String> getHotelName();

    SinRoomDto getRoomBucket(String roomCode);
}
