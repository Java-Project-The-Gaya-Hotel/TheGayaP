package com.gaya.thegayap.mapper;

import com.gaya.thegayap.dto.JeongMemberDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface JeongMapper {
    void joinMember(JeongMemberDto member) throws Exception;

    int idCheck(JeongMemberDto member) throws Exception;

    int emailCheck(JeongMemberDto member) throws Exception;
}
