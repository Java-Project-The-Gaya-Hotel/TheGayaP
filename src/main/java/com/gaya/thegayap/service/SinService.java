package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.dto.SinDto2;
import com.gaya.thegayap.dto.SinReservDto;
import com.gaya.thegayap.dto.SinRoomDto;

import java.util.List;

public interface SinService {
    void insertHotel(SinDto sinDto);



    void insertRoom(SinDto2 sinDto2);

    List<SinRoomDto> checkRoomList(String hotelName, int checkIn, int checkOut);

    void reservationRoom(SinReservDto sinReservDto);
}
