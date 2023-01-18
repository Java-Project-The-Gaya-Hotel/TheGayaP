package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.JeongMemberDto;

public interface JeongService {
    void joinMember(JeongMemberDto member) throws Exception;
    int idCheck(JeongMemberDto member) throws Exception;
    int emailCheck(JeongMemberDto member) throws Exception;
}
