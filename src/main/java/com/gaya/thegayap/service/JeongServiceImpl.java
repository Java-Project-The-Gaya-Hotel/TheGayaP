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
    public void joinMember(JeongMemberDto member) throws Exception {
        jeongMapper.joinMember(member);
    }

    @Override
    public int idCheck(JeongMemberDto member) throws Exception {
        return jeongMapper.idCheck(member);
    }

    @Override
    public int emailCheck(JeongMemberDto member) throws Exception {
        return jeongMapper.emailCheck(member);
    }

    @Override
    public List<JeongResvDto> resvList(String customerId) throws Exception {
        return jeongMapper.resvList(customerId);
    }

    @Override
    public JeongMemberDto profile(String memberId) throws Exception {
        JeongMemberDto memberDto = jeongMapper.profile(memberId);

        return memberDto;
    }

    @Override
    public List<JeongCustomerDto> checkPoints(String customerId) throws Exception {
        return jeongMapper.checkPoints(customerId);
    }

    @Override
    public void updateProfile(JeongMemberDto member) throws Exception {
        jeongMapper.updateProfile(member);
    }

    @Override
    public JeongMemberDto loginCheck(JeongMemberDto member) throws Exception {
        JeongMemberDto memberDto = jeongMapper.loginCheck(member);

        return memberDto;
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
    public List<JeongMemberDto> inquiryUserInfo(String userName) throws Exception {
        return jeongMapper.inquiryUserInfo(userName);
    }

    @Override
    public List<SinInquiryDto> inquiryDetail(int idx) throws Exception {
        return jeongMapper.inquiryDetail(idx);
    }


}
