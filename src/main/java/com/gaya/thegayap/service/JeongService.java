package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.*;

import java.util.List;

public interface JeongService {
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
