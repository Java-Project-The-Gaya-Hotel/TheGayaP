import React from "react";

function Join3Detail() {
    return (
        <div className={"row"}>
            <div className="selector disabled col">
                <select className="form-select form-select-sm"  >
                    <option value="">직접입력</option>

                    <option value="naver.com" title="naver.com">naver.com</option>

                    <option value="hanmail.net" title="hanmail.net">hanmail.net</option>

                    <option value="nate.com" title="nate.com">nate.com</option>

                    <option value="gmail.com" title="gmail.com">gmail.com</option>

                    <option value="hotmail.com" title="hotmail.com">hotmail.com</option>

                    <option value="yahoo.co.kr" title="yahoo.co.kr">yahoo.co.kr</option>

                </select>

            </div>
        </div>
    )
}

export default Join3Detail;