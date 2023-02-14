package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.*;

import java.util.List;

public interface MemberService {
    void joinMember(MemberDto member) throws Exception;
    int idCheck(MemberNonPasswordDto member) throws Exception;
    int emailCheck(MemberNonPasswordDto member) throws Exception;
    List<NotMemberReservDto> resvList(String customerId) throws Exception;
    MemberNonPasswordDto profile(String memberId) throws Exception;
    List<CustomerDto> checkPoints(String customerId) throws Exception;

    String findId(String memberName, String memberEmail) throws Exception;


    void insertInquiry(InquiryDto inquiryDto) throws Exception;

    List<NotMemberReservDto> notMemberResv(String customerName, long reservationNum) throws Exception;

    List<MemberNonPasswordDto> inquiryUserInfo(String userName) throws Exception;

    InquiryDto inquiryDetail(int idx) throws Exception;

    boolean checkMemberByIdAndEmail(String memberId, String memberEmail);
}
