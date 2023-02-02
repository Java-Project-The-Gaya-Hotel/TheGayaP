package com.gaya.thegayap.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 방 예약이 됐는지 확인할때 쓰는 dto
 */
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class SinFilterRoomDto {


    private String hotelName;
    private String sDate;
    private String eDate;
    private String count;
}
