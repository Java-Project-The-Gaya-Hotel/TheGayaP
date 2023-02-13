package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.*;
import com.gaya.thegayap.mapper.HotelMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;


@Service
@RequiredArgsConstructor
public class HotelServiceImpl implements HotelService {


    private final HotelMapper hotelMapper;




    //    임시 방 입력 코드
//    @Override
//    public void insertRoom(SinDto2 sinDto2) {

//        int twinWeek = (int) (sinDto2.getRoomTwinCost() * 1.5);
//        int familyWeek = (int) (sinDto2.getRoomFamilyCost() * 1.5);
//
//
//        for (int i = 2; i < 16; i++) {
//            String code = "stay-";
//            code += roomCodeGenerate();
//            if (sinMapper.checkCodeOverlap(code) == 1) {
//                i--;
//                continue;
//            }
//
//            SinDto2 sinDto11 = new SinDto2();
//
//            sinDto11.setRoomHotelIdx(i);
//            sinDto11.setRoomName(sinDto2.getRoomName());
//            sinDto11.setRoomTwinCost(sinDto2.getRoomTwinCost());
//            sinDto11.setRoomTwinWeekend(twinWeek);
//            sinDto11.setRoomFamilyCost(sinDto2.getRoomFamilyCost());
//            sinDto11.setRoomFamilyWeekend(familyWeek);
//            sinDto11.setRoomCode(code);
//
//
//            sinMapper.insertRoom(sinDto11);
//
//        }

//        int[] hotelNum = {1, 16};
//
//        int twinWeek1 = (int) (sinDto2.getRoomTwinCost() * 1.1);
//
//        for (int i = 0; i < 2; i++) {
//            String code = "hotel-";
//            code += roomCodeGenerate();
//            if (hotelMapper.checkCodeOverlap(code) == 1) {
//                i--;
//                continue;
//            }
//
//            SinDto2 sinDto11 = new SinDto2();
//
//            sinDto11.setRoomHotelIdx(hotelNum[i]);
//            sinDto11.setRoomName(sinDto2.getRoomName());
//            sinDto11.setRoomTwinCost(sinDto2.getRoomTwinCost());
//            sinDto11.setRoomTwinWeekend(twinWeek1);
//            sinDto11.setRoomCode(code);
//            sinDto11.setRoomMaxAdult(sinDto2.getRoomMaxAdult());
//
//
//            hotelMapper.insertRoom(sinDto11);
//
//        }


//    }


//    Set 형식으로 필터

//    @Override
//    public List<SinRoomDto> checkRoomList(String hotelName, int checkIn, int checkOut, String nights) {
//
//
//
////        예약될 호텔에 있는 방에 예약된 정보를 불러옴
//        int hotelNum = sinMapper.getHotelNum(hotelName);
//
////        DB에서 온 데이터를 넣음
//        List<SinRoomDto> resultList = sinMapper.checkBookOverlap(hotelNum);
//        Set<String> roomSet = new HashSet<>();
//        Set<String> unableRoomSet = new HashSet<>();
//
//
//        for (SinRoomDto sinRoomDto : resultList) {
//
//            //            예약 날짜가 null이면 그냥 바로 리스트에 추가하고 continue
//            if (sinRoomDto.getReservationCheckIn() == null || sinRoomDto.getReservationCheckOut() == null) {
//                continue;
//            }
//
////            DB에서 온 date 타입을 yyyy-MM-dd 에서 yyyyMMdd로 변경
//            int dbCheckIn = Integer.parseInt((sinRoomDto.getReservationCheckIn().replaceAll("-", "")));
//            int dbCheckOut = Integer.parseInt(sinRoomDto.getReservationCheckOut().replaceAll("-", ""));
//
////            예약하려는 날짜가 중첩되는게 있으면 Set에 넣어 중복 처리
//            if (dbCheckOut > checkIn && checkOut > dbCheckIn) {
//                unableRoomSet.add(sinRoomDto.getRoomCode());
//            }
//
//        }
//
//
////        실제 예약가능한 리스트를 넣을 곳
//        List<SinRoomDto> filterList = new ArrayList<>();
//
////        SinRoomDto = 방의 정보를 담을 Dto
//        for (SinRoomDto sinRoomDto : resultList) {
//
//                예약이 돼있는 방                지금 예약있는 모든방
//            if (!unableRoomSet.contains(sinRoomDto.getRoomCode())) {
//                          중복처리 한값
//                if (!roomSet.contains(sinRoomDto.getRoomCode())) {
//                    filterList.add(sinRoomDto);
//                    roomSet.add(sinRoomDto.getRoomCode());
//                }
//            }
//
//        }
//        return filterList;
//
//    }


    /**
     * 호텔 리스트를 가져오는 메서드
     * author 정종율
     * @return
     * @throws Exception
     */
    @Override
    public List<HotelDto> hotelList() throws Exception {
        return hotelMapper.hotelList();
    }

    //    Map형식으로 필터

    /**
     * 예약된 방을 필터하여 방의 리스트를 보냄
     *
     * @param hotelNum   호텔 DB번호
     * @param sDate      체크인 날짜
     * @param eDate      체크아웃 날짜
     * @param adultCount 어른 인원수
     * @return
     */
    @Override
    public List<RoomInfoDto> checkRoomList(int hotelNum, String sDate, String eDate, int adultCount) {

        //  전체 방 리스트
        List<RoomInfoDto> roomList;

        //  체크인 체크아웃으로 필터링 된 예약된 방 룸코드
        List<RoomInfoDto> reservationList;

        //        실제 예약가능한 리스트를 넣을 곳

        List<RoomInfoDto> filterList = new ArrayList<>();
        //      필터링 할 Map
        Map<String, RoomInfoDto> roomMap = new HashMap<>();


        try {
            //        선택된 호텔의 방 리스트 가져오기
            if (hotelNum == 1 || hotelNum == 16) {
//        DB에서 온 데이터를 넣음
                roomList = hotelMapper.getHotelRoomList(FilterRoomDto.builder().hotelNum(hotelNum).adultCount(adultCount).build());
            } else {
                roomList = hotelMapper.getStayRoomList(hotelNum);
            }


            reservationList = hotelMapper.checkBookOverlap(FilterRoomDto.builder().hotelNum(hotelNum).checkIn(sDate).checkOut(eDate).adultCount(adultCount).build());

//            System.out.println(reservationList);

            for (RoomInfoDto roomInfoDto : roomList) {
                roomMap.put(roomInfoDto.getRoomCode(), roomInfoDto);
            }


            if (reservationList != null) {
                for (RoomInfoDto roomInfoDto : reservationList) {
//            동일한 코드가 있을시 dto를 null 처리
                    roomMap.put(roomInfoDto.getReservationRoomCode(), null);
                }
            }

            roomMap.forEach((key, value) -> {
                if (value != null) {
                    filterList.add(value);
                }
            });
        } catch (Exception e) {
            e.printStackTrace();
        }


        return filterList;
    }


    /**
     * 방을 예약하는 서비스
     *
     * @param reservationDto
     */
    @Override
    public void reservationRoom(ReservationDto reservationDto) {
        int memberP = reservationDto.getEarnPoint();
        try {

            if (memberP != 0) {
                hotelMapper.updateMemberPoint(reservationDto);
            }

            hotelMapper.insertCustomer(reservationDto);
            hotelMapper.reservationRoom(reservationDto);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 문의 게시글 리스트를 불러오는 서비스
     *
     * @return List(SinInquiryDto)
     */
    @Override
    public List<InquiryDto> getQAList() {
        try {
            List<InquiryDto> inquiryList = hotelMapper.getQAList();
            return inquiryList;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }


    /**
     * 임시 방 비교 서비스
     *
     * @param roomCode 방 코드
     * @return SinRoomDto
     */
    @Override
    public RoomInfoDto getRoomBucket(String roomCode) {
        return hotelMapper.getRoomInfo(roomCode);
    }

    @Override
    public List<AnswerChatDto> getAnswerDataList(int idx) {


        return hotelMapper.getAnswerList(idx);
    }

    /**
     * 문의 답글을 DB에 넣는 서비스
     *
     * @param answerChatDto
     */
    @Override
    public void insertReply(AnswerChatDto answerChatDto) {
        if (answerChatDto.getAnswerStatus() != null) {
            hotelMapper.updateInquiryStatus(answerChatDto);
        }
        if (answerChatDto.getAnswerContents() != null) {
            hotelMapper.insertReply(answerChatDto);
        }
    }


    /**
     * roomCode를 받아 그 방의 호텔 조식과 방의 가격을 보내는 서비스
     *
     * @param hotelNum
     * @return SInRoomCostDto
     */
    @Override
    public MealCostDto getMealCost(int hotelNum) {


        return hotelMapper.getMealCost(hotelNum);
    }


    /**
     * roomCode 랜덤 생성 메서드
     *
     * @return
     */
    public String roomCodeGenerate() {
        int leftLimit = 48; // numeral '0'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 5;
        Random random = new Random();
        String generatedString = random.ints(leftLimit, rightLimit + 1)
                .filter(i -> (i <= 57 || i >= 65) && (i <= 90 || i >= 97))
                .limit(targetStringLength)
                .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
                .toString();

        return generatedString;
    }
}
