import React from "react";

function MainFooter() {
    return (<div>

        <div>

            <footer className="text-center text-lg-start text-black">

                <div className="container p-4 pb-0">

                    <section>
                        <div className="row">

                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold"> The Gaya </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer
                                    content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                    elit.
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none"/>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <p> loam</p>
                            </div>


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

                    <section className="p-3 pt-0">
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 col-lg-8 text-center text-md-start">
                                <p>empty </p>
                            </div>

                            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                                <p> empty </p>
                            </div>

                        </div>
                    </section>
                </div>
            </footer>
        </div>


    </div>)
}

export default MainFooter;