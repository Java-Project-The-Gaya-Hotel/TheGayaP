package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.mapper.SinMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SinServiceImpl implements SinService{

    @Autowired
    SinMapper sinMapper;

    @Override
    public void insertHotel(SinDto sinDto) {
        sinMapper.insertHotel(sinDto);
    }
}
