package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.SinDto;
import com.gaya.thegayap.dto.SinDto2;
import com.gaya.thegayap.dto.SinRoomDto;
import com.gaya.thegayap.mapper.SinMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class SinServiceImpl implements SinService {

    @Autowired
    SinMapper sinMapper;

    @Override
    public void insertHotel(SinDto sinDto) {
        sinMapper.insertHotel(sinDto);

    }

    @Override
    public void insertRoom(SinDto2 sinDto2) {

//        int twinWeek = (int) (sinDto2.getRoomTwinCost() * 1.5);
//        int familyWeek = (int) (sinDto2.getRoomFamilyCost() * 1.5);
//
//
//        for (int i = 2; i < 16; i++) {
//            String code = "stay-";
//            code += roomCodeGenerate();
//            if (sinMapper.checkCodeOverlap(code) == 1) {
//                i--;
//                continue;
//            }
//
//            SinDto2 sinDto11 = new SinDto2();
//
//            sinDto11.setRoomHotelIdx(i);
//            sinDto11.setRoomName(sinDto2.getRoomName());
//            sinDto11.setRoomTwinCost(sinDto2.getRoomTwinCost());
//            sinDto11.setRoomTwinWeekend(twinWeek);
//            sinDto11.setRoomFamilyCost(sinDto2.getRoomFamilyCost());
//            sinDto11.setRoomFamilyWeekend(familyWeek);
//            sinDto11.setRoomCode(code);
//
//
//            sinMapper.insertRoom(sinDto11);
//
//        }

        int[] hotelNum = {1, 16};

        int twinWeek1 = (int) (sinDto2.getRoomTwinCost() * 1.1);

        for (int i = 0; i < 2; i++) {
            String code = "hotel-";
            code += roomCodeGenerate();
            if (sinMapper.checkCodeOverlap(code) == 1) {
                i--;
                continue;
            }

            SinDto2 sinDto11 = new SinDto2();

            sinDto11.setRoomHotelIdx(hotelNum[i]);
            sinDto11.setRoomName(sinDto2.getRoomName());
            sinDto11.setRoomTwinCost(sinDto2.getRoomTwinCost());
            sinDto11.setRoomTwinWeekend(twinWeek1);
            sinDto11.setRoomCode(code);
            sinDto11.setRoomMaxAdult(sinDto2.getRoomMaxAdult());


            sinMapper.insertRoom(sinDto11);

        }


    }

//    Set 형식으로 필터

//    @Override
//    public List<SinRoomDto> checkRoomList(String hotelName, int checkIn, int checkOut, String nights) {
//
//
//
////        예약될 호텔에 있는 방에 예약된 정보를 불러옴
//        int hotelNum = sinMapper.getHotelNum(hotelName);
//
////        DB에서 온 데이터를 넣음
//        List<SinRoomDto> resultList = sinMapper.checkBookOverlap(hotelNum);
//        Set<String> roomSet = new HashSet<>();
//        Set<String> unableRoomSet = new HashSet<>();
//
//
//        for (SinRoomDto sinRoomDto : resultList) {
//
//            //            예약 날짜가 null이면 그냥 바로 리스트에 추가하고 continue
//            if (sinRoomDto.getReservationCheckIn() == null || sinRoomDto.getReservationCheckOut() == null) {
//                continue;
//            }
//
////            DB에서 온 date 타입을 yyyy-MM-dd 에서 yyyyMMdd로 변경
//            int dbCheckIn = Integer.parseInt((sinRoomDto.getReservationCheckIn().replaceAll("-", "")));
//            int dbCheckOut = Integer.parseInt(sinRoomDto.getReservationCheckOut().replaceAll("-", ""));
//
////            예약하려는 날짜가 중첩되는게 있으면 Set에 넣어 중복 처리
//            if (dbCheckOut > checkIn && checkOut > dbCheckIn) {
//                unableRoomSet.add(sinRoomDto.getRoomCode());
//            }
//
//        }
//
//
////        실제 예약가능한 리스트를 넣을 곳
//        List<SinRoomDto> filterList = new ArrayList<>();
//
////        SinRoomDto = 방의 정보를 담을 Dto
//        for (SinRoomDto sinRoomDto : resultList) {
//
//            if (!unableRoomSet.contains(sinRoomDto.getRoomCode())) {
//                if (!roomSet.contains(sinRoomDto.getRoomCode())) {
//                    filterList.add(sinRoomDto);
//                    roomSet.add(sinRoomDto.getRoomCode());
//                }
//            }
//
//
//        }
//        return filterList;
//
//    }

    //    Map형식으로 필터
    @Override
    public List<SinRoomDto> checkRoomList(String hotelName, int checkIn, int checkOut, String nights) {


//        예약될 호텔에 있는 방에 예약된 정보를 불러옴
        int hotelNum = sinMapper.getHotelNum(hotelName);

//        DB에서 온 데이터를 넣음
        List<SinRoomDto> resultList = sinMapper.checkBookOverlap(hotelNum);
        Map<String, SinRoomDto> roomMap = new HashMap<>();
        //        실제 예약가능한 리스트를 넣을 곳
        List<SinRoomDto> filterList = new ArrayList<>();

        for (SinRoomDto sinRoomDto : resultList) {
            roomMap.put(sinRoomDto.getRoomCode(), sinRoomDto);
        }


        for (SinRoomDto sinRoomDto : resultList) {


            //            예약 날짜가 null이면 그냥 바로 리스트에 추가하고 continue
            if (sinRoomDto.getReservationCheckIn() == null || sinRoomDto.getReservationCheckOut() == null) {
                continue;
            }

//            DB에서 온 date 타입을 yyyy-MM-dd 에서 yyyyMMdd로 변경
            int dbCheckIn = Integer.parseInt((sinRoomDto.getReservationCheckIn().replaceAll("-", "")));
            int dbCheckOut = Integer.parseInt(sinRoomDto.getReservationCheckOut().replaceAll("-", ""));

//            예약하려는 날짜가 중첩되는게 있으면 Set에 넣어 중복 처리
            if (dbCheckOut > checkIn && checkOut > dbCheckIn) {
                roomMap.put(sinRoomDto.getRoomCode(), null);
            }


        }


        roomMap.forEach((key, value) -> {
            if (value != null) {
                filterList.add(value);
            }
        });


        return filterList;
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
