package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.dto.SinDto2;
import com.gaya.thegayap.dto.SinReservDto;
import com.gaya.thegayap.dto.SinRoomDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SinMapper {
    void insertHotel(SinDto sinDto);

    void insertRoom(SinDto2 sinDto2);

    int checkCodeOverlap(String code);

    List<SinRoomDto> checkBookOverlap(int hotelNum);

    int getHotelNum(String hotelName);

    void reservationRoom(SinReservDto sinReservDto);
}
