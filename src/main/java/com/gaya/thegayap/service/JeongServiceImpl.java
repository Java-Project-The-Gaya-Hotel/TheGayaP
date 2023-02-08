package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.*;
import com.gaya.thegayap.mapper.JeongMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JeongServiceImpl implements JeongService{

    @Autowired
    JeongMapper jeongMapper;

    @Override
    public void joinMember(MemberDto member) throws Exception {
        jeongMapper.joinMember(member);
    }

    @Override
    public int idCheck(MemberNonPasswordDto member) throws Exception {
        return jeongMapper.idCheck(member);
    }

    @Override
    public int emailCheck(MemberNonPasswordDto member) throws Exception {
        return jeongMapper.emailCheck(member);
    }

    @Override
    public List<JeongResvDto> resvList(String customerId) throws Exception {
        return jeongMapper.resvList(customerId);
    }

    @Override
    public MemberNonPasswordDto profile(String memberId) throws Exception {
        MemberNonPasswordDto memberDto = jeongMapper.profile(memberId);

        return memberDto;
    }

    @Override
    public List<JeongCustomerDto> checkPoints(String customerId) throws Exception {
        return jeongMapper.checkPoints(customerId);
    }

    @Override
    public void updateProfile(MemberNonPasswordDto member) throws Exception {
        jeongMapper.updateProfile(member);
    }

    @Override
    public String findId(String memberName, String memberEmail) throws Exception {
        return jeongMapper.findId(memberName, memberEmail);
    }

    @Override
    public List<JeongHotelDto> hotelList() throws Exception {
        return jeongMapper.hotelList();
    }

    @Override
    public void insertInquiry(SinInquiryDto inquiryDto) throws Exception {
        jeongMapper.insertInquiry(inquiryDto);
    }

    @Override
    public List<JeongResvDto> notMemberResv(String customerName, int reservationNum) throws Exception {
        return jeongMapper.notMemberResv(customerName, reservationNum);
    }

    @Override
    public List<MemberNonPasswordDto> inquiryUserInfo(String userName) throws Exception {
        return jeongMapper.inquiryUserInfo(userName);
    }

    @Override
    public SinInquiryDto inquiryDetail(int idx) throws Exception {
        return jeongMapper.inquiryDetail(idx);
    }


}
