package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.*;
import com.gaya.thegayap.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * author 정종율
 * 고객에 관련된 컨트롤러
 */
@RestController
@CrossOrigin("http://localhost:3000")
public class MemberController {

    @Autowired
    MemberService memberService;





//    회원가입페이지

    /**
     * 회원 가입
     * author 정종율
     * @param member
     * @throws Exception
     */
    @RequestMapping(value = "/join/insert", method = RequestMethod.POST)
    public void joinMember(@RequestBody MemberDto member) throws Exception {
        PasswordEncoder pwe = PasswordEncoderFactories.createDelegatingPasswordEncoder();

        String rawPw = member.getMemberPw();
        String encodePw = pwe.encode(rawPw);
        member.setMemberPw(encodePw);
        memberService.joinMember(member);
    }

    /**
     * ID 중복 체크
     * author 황하늘
     * @param member
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/join/idCheck", method = RequestMethod.GET)
    public int idCheck(MemberNonPasswordDto member) throws Exception{
        int idResult = memberService.idCheck(member);

        return idResult;
    }


    /**
     * Email 중복 체크
     * author 황하늘
     * @param member
     * @return
     * @throws Exception
     */
    @RequestMapping(value = "/join/emailCheck", method = RequestMethod.GET)
    public int emailCheck(MemberNonPasswordDto member) throws Exception{
        int emailResult = memberService.emailCheck(member);

        return emailResult;
    }

//      안쓰는 코드

////    마이페이지
//    // 예약확인 조회
//    @GetMapping("/mypage/resv")
//    public Object myResv(@RequestParam("customerId") String customerId) throws Exception {
//        List<JeongResvDto> resvList = memberService.resvList(customerId);
//        return resvList;
//    }
//
//    // 내 등급, 포인트 조회
//    @GetMapping("/mypage/account")
//    public Object account(@RequestParam("memberId") String memberId) throws Exception {
//        MemberNonPasswordDto memberDto = memberService.profile(memberId);
//        return memberDto;
//    }
//
//    // 내 포인트 사용내역 조회
//    @GetMapping("/mypage/point")
//    public Object myPoint(@RequestParam("customerId") String customerId) throws Exception {
//        List<JeongCustomerDto> checkPoints = memberService.checkPoints(customerId);
//        return checkPoints;
//    }
//
//    // 프로필 수정페이지 프로필 조회
//    @GetMapping("/mypage/profile")
//    public Object profile(@RequestParam("memberId") String memberId) throws Exception {
//        MemberNonPasswordDto memberDto = memberService.profile(memberId);
//        return memberDto;
//    }






    /**
     * 이름과 이메일로 아이디 찾기
     * author 정종율
     * @param memberName
     * @param memberEmail
     * @return
     * @throws Exception
     */
    @GetMapping("/login/findId")
    public String findId(@RequestParam("memberName") String memberName, @RequestParam("memberEmail") String memberEmail) throws Exception {

        String result = memberService.findId(memberName, memberEmail);
        return result;
    }

    /**
     * 고객이름과 예약번호로 예약 정보를 조회하는 컨트롤러
     * author 정종율
     * @param customerName 고객이름
     * @param reservationNum 예약번호
     * @return 예약 정보
     * @throws Exception
     */
    @GetMapping("/login/findResv")
    public Object notMemberResvList(@RequestParam("customerName") String customerName, @RequestParam("reservationNum") int reservationNum) throws Exception {
        List<NotMemberReservDto> notMemberResvList = memberService.notMemberResv(customerName, reservationNum);

        if (notMemberResvList.isEmpty()) return 0;

        return notMemberResvList;
    }



//    문의

    /**
     * 문의 작성
     * author 정종율
     * @param inquiryDto
     * @throws Exception
     */
    @PostMapping("/qa/write")
    public void writeInquiry(@RequestBody InquiryDto inquiryDto) throws Exception {

        memberService.insertInquiry(inquiryDto);
    }


    /**
     * 문의 작성 페이지에 유저 정보 가져오기
     * author 정종율
     * @param userName
     * @return
     * @throws Exception
     */
    @GetMapping("/qa/writeUser")
    public Object inquiryUser(@RequestParam("userName") String userName) throws Exception {
        List<MemberNonPasswordDto> userInfo = memberService.inquiryUserInfo(userName);

        return userInfo;
    }


    /**
     * 문의 상세페이지 정보 불러오는 컨트롤러
     * @param idx 글번호
     * @return inquiryDto
     * @throws Exception
     */
    @GetMapping("/qa/getDetail")
    public InquiryDto inquiryDetail(@RequestParam("idx") int idx) throws Exception {
        InquiryDto inquiryDto = memberService.inquiryDetail(idx);

        return inquiryDto;
    }


    /**
     * 토큰의 ID로 유저의 정보를 가져오는 컨트롤러
     * author 박예린
     * @param memberId
     * @return
     * @throws Exception
     */
    @GetMapping("/member/userinfo")
    public MemberNonPasswordDto getUserInfo(@RequestParam ("memberId")String memberId) throws Exception {
        return memberService.profile(memberId);
    }

}
