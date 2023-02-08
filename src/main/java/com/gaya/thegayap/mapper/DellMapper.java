package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.MemberNonPasswordDto;
import com.gaya.thegayap.dto.SinReservDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DellMapper {


    //My page Home Data 가져오기
    MemberNonPasswordDto getUserInfo(String memberId);

    // 회원 예약 Table 가져오기
    List<SinReservDto> reservationinfo(String customerId);

    void withdrawalMember(String memberId);
}