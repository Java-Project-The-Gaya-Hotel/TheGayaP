package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.JeongCustomerDto;
import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.JeongResvDto;
import com.gaya.thegayap.dto.SinDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface JeongMapper {
    void joinMember(JeongMemberDto member) throws Exception;

    int idCheck(JeongMemberDto member) throws Exception;

    int emailCheck(JeongMemberDto member) throws Exception;

    List<JeongResvDto> resvList(String customerId) throws Exception;

    JeongMemberDto myAccount(String memberId) throws Exception;

    List<JeongCustomerDto> checkPoints(String customerId) throws Exception;
}
