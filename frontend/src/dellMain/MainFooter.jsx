import React from "react";
import Title from "../mainImg/Title ver kingsman.png"

const styles = {
    headerTitle: {
        width: "380px", height: "130px"
    }
}


function MainFooter() {
    return (

        <div>
            <footer className="text-center text-lg-start text-black">

                <div className="p-4 pb-0">

                    <section>
                        <div className="row align-items-center justify-content-center">

                            <div className="col-md-3 col-lg-3 col-xl-3 container">
                                <img src={Title} style={styles.headerTitle}/>
                            </div>

                            {/*<hr className="w-100 clearfix d-md-none"/>*/}

                            {/*<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">*/}
                            {/*    <ul>*/}
                            {/*        <li>고객센터</li>*/}
                            {/*        <li>약관</li>*/}
                            {/*        <li>제작팀 - 4Them</li>*/}
                            {/*    </ul>*/}
                            {/*    <p> 위치 / 번호 </p>*/}
                            {/*</div>*/}

                            <hr className="w-100 clearfix d-md-none"/>

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>


                        </div>
                    </section>


                    <hr className="my-3"/>

                    <section className="p-3 pt-0 text-center">
                        <div>
                            <p>Copyright &copy; by React & Spring 4Them </p>
                        </div>

                    </section>
                </div>
            </footer>
        </div>
    )

}

export default MainFooter;