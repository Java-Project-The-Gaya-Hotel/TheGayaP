import React, {useEffect} from "react";
import seoulImg from "../intoroImg/seoulIntromain.jpg"

const styles = {
    itemsCenter: {
        justifyItems: "center"
    }
}

const {kakao} = window;


function IntroPageSeoul() {


    useEffect(() => {

        mapScript();
    }, [])

    const mapScript = () => {
        let container = document.getElementById("map");
        let options = {
            center: new kakao.maps.LatLng(35.156024, 129.059484),
            level: 2,
        };
        //map
        const map = new kakao.maps.Map(container, options);

        //마커가 표시 될 위치
        let markerPosition = new kakao.maps.LatLng(
            35.156024,
            129.059484
        );

        // 마커를 생성
        let marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커를 지도 위에 표시
        marker.setMap(map);
    };

    return (

        <div>
            <div className={"container m-3"}>

                <div className={"py-5"}>
                    <h2 className={"fw-bolder"}> The Seoul Gaya Hotel </h2>

                    <div className={"p-5 mx-3"}><img src={seoulImg}/></div>

                    <div className={"px-3"}>
                        <div className={"border border-dark p-4"}>
                            서울의 풍경과 생동감을 느끼고 싶은 여행객에게 완벽한 선택입니다.<br/>
                            숙소가 도심의 편리한 위치에 있어 서울의 필수 명소를 방문하는 데 더 많은 시간을 보낼 수 있습니다. <br/>
                            다양한 선택지를 찾고 계신가요? 서울 가야 호텔은 편리한 위치에 있어 다양한 액티비티를 선택할 수 있습니다.
                        </div>
                    </div>
                </div>

                <div className={"px-3 d-grid border border-dark}"} style={styles.itemsCenter} >
                    <h4 className={"p-3"}> 서울 가야호텔 찾아오는 길</h4>
                    <div>
                        <div className={"mb-5"} id={"map"} style={{width: '500px', height: '300px'}}></div>
                    </div>
                </div>
            </div>

        </div>

    )

}

export default IntroPageSeoul;
