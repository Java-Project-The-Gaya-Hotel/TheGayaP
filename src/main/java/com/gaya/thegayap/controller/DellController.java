package com.gaya.thegayap.controller;


import com.gaya.thegayap.dto.JeongCustomerDto;
import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.SinReservDto;
import com.gaya.thegayap.service.DellService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


//데이터만 이동
@RestController
@RequestMapping("/mypage")
@RequiredArgsConstructor
public class DellController {

    private final DellService dellService;

    @GetMapping("/getUserInfo")
    public JeongMemberDto getUserInfo(@RequestParam("memberId") String memberId){
        return dellService.getUserInfo(memberId);
    }


    @GetMapping("/reservationinfo")
    public List<SinReservDto> reservationinfo(@RequestParam ("customerId") Object customerId){
        return dellService.reservationinfo(customerId);
    }

}
