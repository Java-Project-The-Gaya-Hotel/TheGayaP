package com.gaya.thegayap.repository;

import com.gaya.thegayap.entity.MemberTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * 유저 이름을 가져오는 Repo
 */
public interface MemberRepository extends JpaRepository<MemberTable, Long> {
    Optional<MemberTable> findByMemberIdAndMemberDeletedYn(String memberId, String memberDeletedYn);
}