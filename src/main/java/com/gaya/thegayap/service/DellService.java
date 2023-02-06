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

    public JeongMemberDto getUserInfo(String memberId) {
        return dellMapper.getUserInfo(memberId);
    }

    public List<SinReservDto> reservationinfo(Object customerId) {
        return dellMapper.reservationinfo(customerId);
    }
}
