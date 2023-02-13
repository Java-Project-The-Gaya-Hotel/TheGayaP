package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.*;
import com.gaya.thegayap.mapper.MemberMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberServiceImpl implements MemberService {

    @Autowired
    MemberMapper memberMapper;

    @Override
    public void joinMember(MemberDto member) throws Exception {
        memberMapper.joinMember(member);
    }

    @Override
    public int idCheck(MemberNonPasswordDto member) throws Exception {
        return memberMapper.idCheck(member);
    }

    @Override
    public int emailCheck(MemberNonPasswordDto member) throws Exception {
        return memberMapper.emailCheck(member);
    }

    @Override
    public List<NotMemberReservDto> resvList(String customerId) throws Exception {
        return memberMapper.resvList(customerId);
    }

    @Override
    public MemberNonPasswordDto profile(String memberId) throws Exception {
        MemberNonPasswordDto memberDto = memberMapper.profile(memberId);

        return memberDto;
    }

    @Override
    public List<CustomerDto> checkPoints(String customerId) throws Exception {
        return memberMapper.checkPoints(customerId);
    }


    @Override
    public String findId(String memberName, String memberEmail) throws Exception {
        return memberMapper.findId(memberName, memberEmail);
    }


    @Override
    public void insertInquiry(InquiryDto inquiryDto) throws Exception {
        memberMapper.insertInquiry(inquiryDto);
    }

    @Override
    public List<NotMemberReservDto> notMemberResv(String customerName, long reservationNum) throws Exception {
        return memberMapper.notMemberResv(customerName, reservationNum);
    }

    @Override
    public List<MemberNonPasswordDto> inquiryUserInfo(String userName) throws Exception {
        return memberMapper.inquiryUserInfo(userName);
    }

    @Override
    public InquiryDto inquiryDetail(int idx) throws Exception {
        return memberMapper.inquiryDetail(idx);
    }

    /**
     * 이메일인증
     * @param memberId
     * @param memberEmail
     * @return
     */
    @Override
    public boolean checkMemberByIdAndEmail(String memberId, String memberEmail) {
        try {
            return memberMapper.checkMemberByIdAndEmail(memberId,memberEmail);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }


}
