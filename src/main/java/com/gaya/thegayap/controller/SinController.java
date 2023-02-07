package com.gaya.thegayap.controller;

import com.gaya.thegayap.dto.*;
import com.gaya.thegayap.service.JeongService;
import com.gaya.thegayap.service.JeongServiceImpl;
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

    private final JeongService jeongService;


    //임시 db 입력 코드 시작

    @PostMapping("/insert")
    public void insert(@RequestBody SinDto2 sinDto2) {
        //    호텔 DB 넣기
//        sinService.insertHotel(sinDto);
        sinService.insertRoom(sinDto2);
    }





    //임시 db 입력 코드 종료





    /**
     * 호텔 이름 가져오는 컨트롤러
     * @return
     */
    @GetMapping("/hotelname")
    public List<String> getHotel() {
        List<String> hotelName = sinService.getHotelName();

        return hotelName;
    }

    /**
     * 체크인 체크아웃 날짜를 받아 해당 날짜에 미예약 방 리스트를 뿌려주는 컨트롤러
     * @param hotelNum 호텔의 DB번호
     * @param sDate 체크인 날짜
     * @param eDate 체크아웃 날짜
     * @param adultCount 인원 수
     * @return
     */
    @GetMapping("/roomlist")
    public List<SinRoomDto> roomList(@RequestParam("hotelNum") int hotelNum, @RequestParam("sDate") String sDate, @RequestParam("eDate") String eDate, @RequestParam("adultCount") int adultCount) {
//        어떠한 정보들이 넘어오겠는가
//        예약하려는 호텔/ 체크인시간/ 체크아웃시간/ 몇박/ 인원수

//        if DB에 예약된 체크아웃 =< 예약할 체크인 or 예약할 체크아웃 < DB에 예약된 체크인

        try {


            List<SinRoomDto> ableRoomList = sinService.checkRoomList(hotelNum, sDate, eDate,adultCount);

            return ableRoomList;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;


        // 들어온 정보로 예약 가능한 룸 확인


    }





    /**
     * 호텔 번호 코드를 받아 가격 정보를 보내주는 컨트롤러
     * @param hotelNum  호텔 번호
     * @return MealCostDto 타입으로 리턴
     */
    @GetMapping("/checkmealcost")
    public MealCostDto getMealCost(@RequestParam ("hotelNum")int hotelNum){


        return sinService.getMealCost(hotelNum);
    }


    /**
     * 방 예약 컨트롤러
     * @param sinReservDto
     */
    @PostMapping("/bookroom")
    public void bookRoom(@RequestBody SinReservDto sinReservDto) {

//        DB에 필요한 정보
//        예약번호/ 호텔번호/ 룸코드/ 고객이름/ 고객아이디/ 체크인/ 체크아웃/ 예약을 진행한 시간/ 몇박/ 조식옵션(어른/아이)/ 예약한 인원/ 총 금액/ 예약시 요청정보
//        -------------------------------------------

//        어떠한 정보들이 넘어오겠는가

//        예약하려는 호텔/ 체크인시간/ 체크아웃시간/ 몇박/ 인원수(어른/아이)/ 예약한 시간/ 룸코드

//        예약자 이름/ 이메일/ 연락처
//        옵션사항: 회원일시 아이디/ 조식옵션/

//        System.currentTimeMillis() = 예약 번호 생성을 위한 1/1000초 생성

        sinService.reservationRoom(sinReservDto);

    }


    /**
     * 룸코드 기반 방 비교 컨트롤러(예정)
     * @param roomCode
     * @return
     */
    @GetMapping("/bucket")
    public SinRoomDto getBucket(@RequestParam("roomCode") String roomCode) {
        return sinService.getRoomBucket(roomCode);
    }



    /**
     * 문의 게시글 번호를 받아 문의 상세 데이터를 보내는 컨트롤러
     * @param idx 문의 게시글 번호
     * @return List(SinAnswerChatDto) 타입으로 리턴
     */
    @GetMapping("/qa/detail")
    public List<SinAnswerChatDto> getDetail(@RequestParam("idx") int idx) {

        List<SinAnswerChatDto> sinAnswerChatList = sinService.getAnswerDataList(idx);


        return sinAnswerChatList;
    }


    /**
     * 문의 게시판 리스트 가져오는 컨트롤러
     * @return
     */
    @GetMapping("/inquirylist")
    public List<SinInquiryDto> getQAList() {

        List<SinInquiryDto> inquiryList = sinService.getQAList();

        return inquiryList;
    }

    //  QA 답글 Insert

    /**
     * QA답글 작성 시 DB 입력 컨트롤러
     * @param sinAnswerChatDto 문의답변 타입 dto
     * @return String 타입으로 입력 성공,실패 서버에 리턴
     */
    @PostMapping("/qa/reply/insert")
    public String insertReply(@RequestBody SinAnswerChatDto sinAnswerChatDto) {

        try {
            sinService.insertReply(sinAnswerChatDto);
            return "데이터 입력 성공";

        } catch (Exception e) {
            e.printStackTrace();
            return "데이터 입력 실패";
        }
    }

    @GetMapping("/userinfo")
    public JeongMemberDto getUserInfo(@RequestParam ("memberId")String memberId) throws Exception {
        return jeongService.profile(memberId);
    }



}
