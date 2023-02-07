package com.gaya.thegayap.service;


import com.gaya.thegayap.dto.JeongCustomerDto;
import com.gaya.thegayap.dto.JeongMemberDto;
import com.gaya.thegayap.dto.SinReservDto;
import com.gaya.thegayap.mapper.DellMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class DellService {

    private final DellMapper dellMapper;

    //My page Home Data 가져오기
    public JeongMemberDto getUserInfo(String memberId) {
        return dellMapper.getUserInfo(memberId);
    }
    // 회원 예약 Table 가져오기
    public List<SinReservDto> reservationinfo(String customerId) {
        return dellMapper.reservationinfo(customerId);
    }
    //회원 정보 수정
    public JeongMemberDto memberSaveInfo(String memberId) {
//        return dellMapper.memberSaveInfo(memberId);
        return null;
    }
}
