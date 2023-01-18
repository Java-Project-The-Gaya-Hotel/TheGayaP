package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.mapper.JeongMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
}
