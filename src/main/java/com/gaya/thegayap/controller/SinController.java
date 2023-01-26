package com.gaya.thegayap.controller;

import com.gaya.thegayap.dto.SinDto2;
import com.gaya.thegayap.dto.SinInquiryDto;
import com.gaya.thegayap.dto.SinReservDto;
import com.gaya.thegayap.dto.SinRoomDto;
import com.gaya.thegayap.service.SinService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping({"/gaya", "/"})
@RequiredArgsConstructor
public class SinController {


    private final SinService sinService;


    //임시 db 입력 코드 시작

    @PostMapping("/insert")
    public void insert(@RequestBody SinDto2 sinDto2) {
        //    호텔 DB 넣기
//        sinService.insertHotel(sinDto);
        sinService.insertRoom(sinDto2);
    }


    //    호텔 이름 가져오기
    @GetMapping("/hotelname")
    public List<String> getHotel() {
        List<String> hotelName = sinService.getHotelName();

        return hotelName;
    }

    //    문의 게시판 글 리스트 가져오기
    @GetMapping("/inquirylist")
    public List<SinInquiryDto> getQAList() {

        List<SinInquiryDto> inquiryList = sinService.getQAList();

        return inquiryList;
    }

//    로그인 스프링 시큐리티 테스트


    //임시 db 입력 코드 종료


    // 방 선택시 리스트
    @GetMapping("/roomlist")
    public List<SinRoomDto> roomList() {
//        어떠한 정보들이 넘어오겠는가
//        예약하려는 호텔/ 체크인시간/ 체크아웃시간/ 몇박/ 인원수

//        if DB에 예약된 체크아웃 =< 예약할 체크인 or 예약할 체크아웃 < DB에 예약된 체크인


        String hotelName = "서울가야호텔";
        int checkIn = 20230203;
        int checkOut = 20230205;



//        들어온 정보로 예약 가능한 룸 확인


        List<SinRoomDto> ableRoomList = sinService.checkRoomList(hotelName, checkIn, checkOut);


        return ableRoomList;
    }


    // 방 예약 코드
    @GetMapping("/bookRoom")
    public void bookRoom() {

//        DB에 필요한 정보
//        예약번호/ 호텔번호/ 룸코드/ 고객이름/ 고객아이디/ 체크인/ 체크아웃/ 예약을 진행한 시간/ 몇박/ 조식옵션(어른/아이)/ 예약한 인원/ 총 금액/ 예약시 요청정보
//        -------------------------------------------

//        어떠한 정보들이 넘어오겠는가

//        예약하려는 호텔/ 체크인시간/ 체크아웃시간/ 몇박/ 인원수(어른/아이)/ 예약한 시간/ 룸코드

//        예약자 이름/ 이메일/ 연락처
//        옵션사항: 회원일시 아이디/ 조식옵션/

//        System.currentTimeMillis() = 예약 번호 생성을 위한 1/1000초 생성


//        백엔드가 진행해야할 정보
//        예약번호 생성


//        변수 지정


        long reservationNum = System.currentTimeMillis();
        int hotelNum = 1;
        String roomCode = "hotel-cKHEX";
        String customerName = "테스터1";
        String customerId = "test1";
        String checkIn = "2023-01-26";
        String checkOut = "2023-01-28";
        String reservationTime = "2023-01-04 22:23:00";
        int nights = 3;
        int breakfastAdultNum = 1;
        int breakfastChildNum = 1;
        int peopleAdultNum = 2;
        int peopleChildNum = 1;
        int reservationPeople = 3;
        int totalCost = 498550;
        String reservationRequest = "방 주세요";

        SinReservDto sinReservDto;

        sinReservDto = new SinReservDto(reservationNum, hotelNum, roomCode, customerName, customerId, checkIn, checkOut, reservationTime, nights, breakfastAdultNum, breakfastChildNum, peopleAdultNum, peopleChildNum, totalCost, reservationPeople, reservationRequest);

        sinService.reservationRoom(sinReservDto);

    }


    //    장바구니 기능
    @GetMapping("/bucket")
    public SinRoomDto getBucket(@RequestParam("roomCode") String roomCode) {
        return sinService.getRoomBucket(roomCode);
    }


    //    QA Detail Page
    @GetMapping("/qa/detail")
    public SinInquiryDto getDetail(@RequestParam("idx") int idx) {


        return null;
    }


}
