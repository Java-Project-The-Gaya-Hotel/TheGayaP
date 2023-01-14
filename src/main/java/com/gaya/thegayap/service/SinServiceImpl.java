package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.dto.SinDto2;
import com.gaya.thegayap.mapper.SinMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class SinServiceImpl implements SinService{

    @Autowired
    SinMapper sinMapper;

    @Override
    public void insertHotel(SinDto sinDto) {
        sinMapper.insertHotel(sinDto);

    }

    @Override
    public void insertRoom(String name, int twinCost, int familyCost) {

        String code = "";
        int twinWeek = (int)(twinCost*1.5);
        int familyWeek = (int)(familyCost*1.5);


        for (int i = 2 ; i < 16; i++) {

            code = roomCodeGenerate();
            if (sinMapper.checkCodeOverlap(code) == 1){
                i--;
                continue;
            }

            SinDto2 sinDto2 = new SinDto2();

            sinDto2.setRoomHotelIdx(i);
            sinDto2.setRoomName(name);
            sinDto2.setRoomTwinCost(twinCost);
            sinDto2.setRoomTwinWeekend(twinWeek);
            sinDto2.setRoomFamilyCost(familyCost);
            sinDto2.setRoomFamilyWeekend(familyWeek);
            sinDto2.setRoomCode(code);


            sinMapper.insertRoom(sinDto2);

        }


    }











//    랜덤 room 코드 생성

    public String roomCodeGenerate() {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 5;
        Random random = new Random();
        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }
}
