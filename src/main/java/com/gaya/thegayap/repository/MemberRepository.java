package com.gaya.thegayap.repository;

import com.gaya.thegayap.entity.MemberTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<MemberTable, Long> {
    Optional<MemberTable> findByMemberId(String username);
}