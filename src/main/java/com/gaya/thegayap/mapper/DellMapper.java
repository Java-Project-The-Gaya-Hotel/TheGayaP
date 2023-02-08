package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.JeongCustomerDto;
import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.SinReservDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface DellMapper {


    //My page Home Data 가져오기
    JeongMemberDto getUserInfo(String memberId);

    // 회원 예약 Table 가져오기
    List<SinReservDto> reservationinfo(String customerId);

    void withdrawalMember(String memberId);
}