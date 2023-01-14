package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.dto.SinDto2;

public interface SinService {
    void insertHotel(SinDto sinDto);


    void insertRoom(String name, int twinCost, int familyCost);
}
