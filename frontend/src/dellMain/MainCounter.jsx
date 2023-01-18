import React, {useState} from 'react'
import Swal from "sweetalert2";
//React 용 swal




const MainCounter = () => {

    const [count, setCount] = useState(0);
    const plusBtn=()=>{
        setCount(count+1)
        if(count >= 4){
            Swal.fire({
                icon: 'info',
                title: '확인해주세요!',
                text: ' 인원 수는 4명까지 선택할 수 있습니다. ',
                footer: '<a href=""> 고객문의 안내는 여기로 </a>'
            });
            setCount((count)=>Math.max(4))
        }
    }
    const minusBtn=()=>{
        setCount((count)=> Math.max(-1, 0))
    }

    return (
        <div>
            <button onClick={minusBtn} className={"btn btn-outline-secondary"}> - </button>
            <span> {count} </span>
            <button onClick={plusBtn} className={"btn btn-outline-secondary"}> + </button>
        </div>
    )
}
export default MainCounter;