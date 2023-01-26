package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.JeongCustomerDto;
import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.JeongResvDto;

import java.util.List;

public interface JeongService {
    void joinMember(JeongMemberDto member) throws Exception;
    int idCheck(JeongMemberDto member) throws Exception;
    int emailCheck(JeongMemberDto member) throws Exception;
    int telCheck(JeongMemberDto member) throws Exception;
    List<JeongResvDto> resvList(String customerId) throws Exception;
    JeongMemberDto profile(String memberId) throws Exception;
    List<JeongCustomerDto> checkPoints(String customerId) throws Exception;
    void updateProfile(JeongMemberDto member) throws Exception;

}
