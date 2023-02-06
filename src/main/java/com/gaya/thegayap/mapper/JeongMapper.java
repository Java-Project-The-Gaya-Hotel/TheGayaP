package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JeongMapper {
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
