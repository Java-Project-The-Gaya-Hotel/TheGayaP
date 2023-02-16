package com.gaya.thegayap.controller;

import com.gaya.thegayap.dto.*;
import com.gaya.thegayap.service.MemberService;
import com.gaya.thegayap.service.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;

/**
 * author 신현섭
 * 호텔관련 컨트롤러
 */
@RestController
//@CrossOrigin("http://localhost:3000")
@RequestMapping("/gaya")
@RequiredArgsConstructor
public class HotelController {


    private final HotelService hotelService;

    private final MemberService memberService;

    /**
     * 체크인 체크아웃 날짜를 받아 해당 날짜에 미예약 방 리스트를 뿌려주는 컨트롤러
     * author 신현섭
     * @param hotelNum 호텔의 DB번호
     * @param sDate 체크인 날짜
     * @param eDate 체크아웃 날짜
     * @param adultCount 인원 수
     * @return
     */
    @GetMapping("/roomlist")
    public List<RoomInfoDto> roomList(@RequestParam("hotelNum") int hotelNum, @RequestParam("sDate") String sDate, @RequestParam("eDate") String eDate, @RequestParam("adultCount") int adultCount) {
//        어떠한 정보들이 넘어오겠는가
//        예약하려는 호텔/ 체크인시간/ 체크아웃시간/ 몇박/ 인원수

//        if DB에 예약된 체크아웃 =< 예약할 체크인 or 예약할 체크아웃 < DB에 예약된 체크인

        try {


            List<RoomInfoDto> ableRoomList = hotelService.checkRoomList(hotelNum, sDate, eDate,adultCount);

            return ableRoomList;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;


        // 들어온 정보로 예약 가능한 룸 확인


    }


    /**
     * 호텔 리스트 불러오기
     * author 정종율
     * @return
     * @throws Exception
     */
    @GetMapping("/hotelList")
    public List<HotelDto> getHotelList() throws Exception {
        List<HotelDto> hotelDto = hotelService.hotelList();

        return hotelDto;
    }


    /**
     * 호텔 번호 코드를 받아 가격 정보를 보내주는 컨트롤러
     * author 신현섭
     * @param hotelNum  호텔 번호
     * @return MealCostDto 타입으로 리턴
     */
    @GetMapping("/checkmealcost")
    public MealCostDto getMealCost(@RequestParam ("hotelNum")int hotelNum){


        return hotelService.getMealCost(hotelNum);
    }


    /**
     * 방 예약 컨트롤러
     * author 신현섭
     * @param reservationDto 예약 DTO
     */
    @PostMapping("/bookroom")
    public void bookRoom(@RequestBody ReservationDto reservationDto) {

//        DB에 필요한 정보
//        예약번호/ 호텔번호/ 룸코드/ 고객이름/ 고객아이디/ 체크인/ 체크아웃/ 예약을 진행한 시간/ 몇박/ 조식옵션(어른/아이)/ 예약한 인원/ 총 금액/ 예약시 요청정보
//        -------------------------------------------

//        어떠한 정보들이 넘어오겠는가

//        예약하려는 호텔/ 체크인시간/ 체크아웃시간/ 몇박/ 인원수(어른/아이)/ 예약한 시간/ 룸코드

//        예약자 이름/ 이메일/ 연락처
//        옵션사항: 회원일시 아이디/ 조식옵션/

//        System.currentTimeMillis() = 예약 번호 생성을 위한 1/1000초 생성

        hotelService.reservationRoom(reservationDto);

    }


    /**
     * 룸코드 기반 방 비교 컨트롤러(예정)
     * @param roomCode
     * @return
     */
    @GetMapping("/bucket")
    public RoomInfoDto getBucket(@RequestParam("roomCode") String roomCode) {
        return hotelService.getRoomBucket(roomCode);
    }



    /**
     * 문의 게시글 번호를 받아 문의 상세 데이터를 보내는 컨트롤러
     * author 신현섭
     * @param idx 문의 게시글 번호
     * @return List(SinAnswerChatDto) 타입으로 리턴
     */
    @GetMapping("/qa/detail")
    public List<AnswerChatDto> getDetail(@RequestParam("idx") int idx) {

        List<AnswerChatDto> sinAnswerChatList = hotelService.getAnswerDataList(idx);


        return sinAnswerChatList;
    }


    /**
     * 문의 게시판 리스트 가져오는 컨트롤러
     * author 신현섭
     * @return
     */
    @GetMapping("/inquirylist")
    public List<InquiryDto> getQAList() {

        List<InquiryDto> inquiryList = hotelService.getQAList();

        return inquiryList;
    }

    //  QA 답글 Insert

    /**
     * QA답글 작성 시 DB 입력 컨트롤러
     * author 신현섭
     * @param answerChatDto 문의답변 타입 dto
     * @return String 타입으로 입력 성공,실패 서버에 리턴
     */
    @PostMapping("/qa/reply/insert")
    public String insertReply(@RequestBody AnswerChatDto answerChatDto) {

        try {
            hotelService.insertReply(answerChatDto);
            return "데이터 입력 성공";

        } catch (Exception e) {
            e.printStackTrace();
            return "데이터 입력 실패";
        }
    }



}
