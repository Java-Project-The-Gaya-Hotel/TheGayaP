package com.gaya.thegayap.controller;

import com.gaya.thegayap.dto.SinDto2;
import com.gaya.thegayap.dto.SinRoomDto;
import com.gaya.thegayap.service.SinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping({"/gaya","/"})
public class SinController {

    @Autowired
    SinService sinService;



    //임시 db 입력 코드

    @PostMapping("/insert")
    public void insert(@RequestBody SinDto2 sinDto2) {
        //    호텔 DB 넣기
//        sinService.insertHotel(sinDto);
        sinService.insertRoom(sinDto2);
    }


    // 방 선택시 리스트
    @GetMapping("/roomlist")
    public List<SinRoomDto> roomList() {
//        어떠한 정보들이 넘어오겠는가
//        예약하려는 호텔/ 체크인시간/ 체크아웃시간/ 몇박/ 인원수

//        if DB에 예약된 체크아웃 =< 예약할 체크인 or 예약할 체크아웃 < DB에 예약된 체크인


        String hotelName = "서울가야호텔";
        int checkIn = 20230115;
        int checkOut = 20230117;
        String nights = "5";



//        들어온 정보로 예약 가능한 룸 확인


        List<SinRoomDto> ableRoomList = sinService.checkRoomList(hotelName,checkIn,checkOut,nights);


        return ableRoomList;
    }




    // 방 예약 코드
    @PostMapping("/bookRoom")
    public void bookRoom() {

//        어떠한 정보들이 넘어오겠는가

//        예약하려는 호텔/ 체크인시간/ 체크아웃시간/ 몇박/ 인원수/ 예약한 시간
//        예약자 이름/
//        옵션사항: 회원일시 아이디/ 조식옵션/




    }


}
