import {BrowserRouter, Routes, Route} from "react-router-dom";
import WriteInquiry from "./inquiry/WriteInquiry";
import Join from "./join/Join";
import MypageTest from "./test/MypageTest";

function JJYReact(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"}>
                        <Route path={"/inquiry/write"} element={<WriteInquiry/>}/>
                        <Route path={"/mypage"} element={<MypageTest/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default JJYReact;
