package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.SinDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SinMapper {
    void insertHotel(SinDto sinDto);
}
