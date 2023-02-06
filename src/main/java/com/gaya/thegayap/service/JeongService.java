package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.*;

import java.util.List;

public interface JeongService {
    void joinMember(JeongMemberDto member) throws Exception;
    int idCheck(JeongMemberDto member) throws Exception;
    int emailCheck(JeongMemberDto member) throws Exception;
    List<JeongResvDto> resvList(String customerId) throws Exception;
    JeongMemberDto profile(String memberId) throws Exception;
    List<JeongCustomerDto> checkPoints(String customerId) throws Exception;
    void updateProfile(JeongMemberDto member) throws Exception;

    JeongMemberDto loginCheck(JeongMemberDto member) throws Exception;

    String findId(String memberName, String memberEmail) throws Exception;

    List<JeongHotelDto> hotelList() throws Exception;

    void insertInquiry(SinInquiryDto inquiryDto) throws Exception;
}
