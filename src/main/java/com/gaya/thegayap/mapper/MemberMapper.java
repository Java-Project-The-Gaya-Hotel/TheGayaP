package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {
    void joinMember(MemberDto member) throws Exception;

    int idCheck(MemberNonPasswordDto member) throws Exception;

    int emailCheck(MemberNonPasswordDto member) throws Exception;

    List<NotMemberReservDto> resvList(String customerId) throws Exception;

    MemberNonPasswordDto profile(String memberId) throws Exception;

    List<CustomerDto> checkPoints(String customerId) throws Exception;

    void updateProfile(MemberNonPasswordDto member) throws Exception;


    String findId(String memberName, String memberEmail) throws Exception;



    void insertInquiry(InquiryDto inquiryDto) throws Exception;

    List<NotMemberReservDto> notMemberResv(String customerName, int reservationNum) throws Exception;

    List<MemberNonPasswordDto> inquiryUserInfo(String userName) throws Exception;

    InquiryDto inquiryDetail(int idx) throws Exception;
}
