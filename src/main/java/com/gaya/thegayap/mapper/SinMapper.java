package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.dto.SinDto2;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SinMapper {
    void insertHotel(SinDto sinDto);

    void insertRoom(SinDto2 sinDto2);

    int checkCodeOverlap(String code);
}
