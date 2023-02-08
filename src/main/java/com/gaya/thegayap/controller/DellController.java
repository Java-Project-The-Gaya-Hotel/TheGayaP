package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.JeongCustomerDto;
import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.SinReservDto;
import com.gaya.thegayap.service.DellService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


//데이터만 이동
@RestController
@RequestMapping("/mypage")
@RequiredArgsConstructor
public class DellController {

    private final DellService dellService;

    //My page Home Data 가져오기
    @GetMapping("/getUserInfo")
    public JeongMemberDto getUserInfo(@RequestParam("memberId") String memberId){
        return dellService.getUserInfo(memberId);
    }



    // 회원 예약 Table 가져오기
    @GetMapping("/reservationinfo")
    public List<SinReservDto> reservationinfo(@RequestParam ("customerId") String customerId){
        return dellService.reservationinfo(customerId);
    }

    @PutMapping("/withdrawalMember")
    public void withdrawalMember(@RequestParam ("memberId") String memberId){
    }

}