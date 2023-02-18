package com.gaya.thegayap.dto;

import lombok.Getter;

/**
 * author 신현섭
 * 문의 답글을 가져오는 DTO
 */
@Getter
public class AnswerChatDto {

    private int answerNum;
    private String answerInquiryNum;
    private String answerContents;
    private String answerCreateDate;
    private String answerUserName;
    private String answerIsAdmin;
//    추후 확인 요망
    private String answerStatus;
}
