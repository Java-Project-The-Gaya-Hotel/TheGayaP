package com.gaya.thegayap.mapper;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SkyMapper {

    public int idCheck(String memberId);
}
