import React, {useEffect} from "react";

const {kakao} = window;



function IntroPageSeoul() {

    useEffect(() => {
        const container = document.getElementById('map');// 지도를 표시할 div
        const option = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(container, option);
    }, [])
    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
// 마커를 생성합니다
    const marker = new kakao.maps.Marker({
        position: markerPosition
    });

    return (

        <div>

            <div>
                <h4>서울 가야호텔</h4>
                <div id={"map"} style={{width: '500px', height: '300px'}}></div>
            </div>


        </div>

    )

}

export default IntroPageSeoul;
