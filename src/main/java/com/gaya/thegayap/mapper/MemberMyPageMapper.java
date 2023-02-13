package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.MemberNonPasswordDto;
import com.gaya.thegayap.dto.InquiryDto;
import com.gaya.thegayap.dto.ReservationDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * author 박예린
 */
@Mapper
public interface MemberMyPageMapper {


    //My page Home Data 가져오기
    MemberNonPasswordDto getUserInfo(String memberId);

    // 회원 예약 Table 가져오기
    List<ReservationDto> reservationInfo(String customerId);

    void withdrawalMember(String memberId);

    InquiryDto myQaListTable(String memberId);


    void updateProfile(MemberNonPasswordDto member) throws Exception;
}