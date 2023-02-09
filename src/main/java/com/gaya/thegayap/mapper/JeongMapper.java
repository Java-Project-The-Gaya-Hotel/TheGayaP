package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JeongMapper {
    void joinMember(MemberDto member) throws Exception;

    int idCheck(MemberNonPasswordDto member) throws Exception;

    int emailCheck(MemberNonPasswordDto member) throws Exception;

    List<JeongResvDto> resvList(String customerId) throws Exception;

    MemberNonPasswordDto profile(String memberId) throws Exception;

    List<JeongCustomerDto> checkPoints(String customerId) throws Exception;

    void updateProfile(MemberNonPasswordDto member) throws Exception;


    String findId(String memberName, String memberEmail) throws Exception;

    List<JeongHotelDto> hotelList() throws Exception;

    void insertInquiry(SinInquiryDto inquiryDto) throws Exception;

    List<JeongResvDto> notMemberResv(String customerName, int reservationNum) throws Exception;

    List<MemberNonPasswordDto> inquiryUserInfo(String userName) throws Exception;

    SinInquiryDto inquiryDetail(int idx) throws Exception;
}
