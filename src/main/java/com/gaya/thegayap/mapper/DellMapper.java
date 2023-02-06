package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.JeongCustomerDto;
import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.SinReservDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DellMapper {
    JeongMemberDto getUserInfo(String memberId);

    List<SinReservDto> reservationinfo(Object customerId);
}