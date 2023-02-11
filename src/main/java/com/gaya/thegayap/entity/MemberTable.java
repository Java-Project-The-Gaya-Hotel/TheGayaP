package com.gaya.thegayap.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * 실제 user 테이블
 * author 신현섭
 */
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class MemberTable {

    @Id
    @Column(updatable = false, unique = true, nullable = false)
    private String memberId;

    @Column(nullable = false)
    private String memberPw;

    @Column(nullable = false)
    private String memberRole;

    @Column(nullable = false)
    private String memberDeletedYn;



}
