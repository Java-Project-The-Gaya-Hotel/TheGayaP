package com.gaya.thegayap.service;

import com.gaya.thegayap.dto.TokenInfo;
import com.gaya.thegayap.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 유저 로그인 검사를 하는 클래스
 * author 신현섭
 */
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberLoginService {

    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;

    @Transactional
    public TokenInfo login(String memberId, String password) {
        // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
        // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(memberId, password);

        // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
        // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername 메서드가 실행
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);

        return tokenInfo;
    }

    /**
     * 토큰의 유효성을 검사하고 재생성을 위한 메서드
     * @param token
     * @return 재생성된 토큰 반환
     */
    public TokenInfo validate(TokenInfo token) {

        if (jwtTokenProvider.validateToken(token.getRefreshToken())){
            return jwtTokenProvider.reGenerateToken(token);
        }

        return null;
    }

}