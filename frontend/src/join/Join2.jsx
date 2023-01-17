import React from "react";
import "../join/Join2.css"
import Join2Detail from "./Join2Detail";




function Join2(props) {
    // const [Name, setName] = React.useState("")
    // const [Number, setNumber] = React.useState("")
    // const [Birth, setBirth] = React.useState("")
    // const onBirthHandler = (event) => {
    //     setBirth(event.currentTarget.value)
    // }
    //
    // const onNameHandler = (event) => {
    //     setName(event.currentTarget.value)
    // }
    //
    // const onNumberHandler = (event) => {
    //     setNumber(event.target.value)
    // }
    // const onSubmitHandler = (event) => {
    //     event.preventDefault();
    //     console.log('name', Name);
    //     console.log('Birth', Birth);
    //     console.log('number', Number);
    //     let body = {
    //         name: Name,
    //         birth: Birth,
    //         number: Number
    //     }
    // }
    // return (
    //
    //     <div>
    //         <form onSubmit={onSubmitHandler}>
    //         <table className={"tableTypeB"} summary={"성명,아이디,비밀번호,비밀번호확인,생년월일,이메일,휴대전화로 구성된테이블입니다."}>
    //             <colgroup>
    //                 <col width="16%" className="col1"></col>
    //                 <col className="col2"></col>
    //             </colgroup>
    //             <tbody>
    //             <tr className="first">
    //                 <th scope="row" className="first"><em className="ast">*</em> 성명</th>
    //                 <td className="first">
    //                     <div className={"row"}>
    //                          <div className={"col"}>
    //                              <input type={"text"} value={Name} onChange={onNameHandler} />
    //                          </div>
    //
    //                     </div>
    //                 </td>
    //
    //             </tr>
    //             <tr className={"first"}>
    //                 <th scope="row" className="first"><em className="ast">*</em> 생년월일</th>
    //                 <td className="first " >
    //                     <input type={"date"} value={Birth} onChange={onBirthHandler} />
    //                   {/*<Join2Detail/>*/}
    //                 </td>
    //             </tr>
    //
    //             <tr className="first">
    //                 <th scope="row" className="first"><em className="ast">*</em> 휴대전화</th>
    //                 <td className="first" >
    //                     <div  >
    //                         <div className="selector disabled row"  >
    //                             <select  className="form-select form-select-sm col"  >
    //                                 <option value="+82" title="+82" >+82</option>
    //                                 <option value="+82" title="+82" >+82</option>
    //                                 <option value="+82" title="+82" >+82</option>
    //                                 <option value="+82" title="+82" >+82</option>
    //                                 <option value="+82" title="+82" >+82</option>
    //                                 <option value="+82" title="+82" >+82</option>
    //                             </select>
    //                             <input value={Number} onChange={onNumberHandler} className={"col"}/>
    //
    //                         </div>
    //                         <div className={"col"}>
    //
    //
    //                         </div>
    //                         <div className={"col"}>
    //
    //                         </div>
    //
    //                     </div>
    //                 </td>
    //             </tr>
    //             </tbody>
    //         </table>
    //             <button formAction={""}>
    //                 확인
    //             </button>
    //         </form>
    // //     </div>
    // )
}

export default Join2;