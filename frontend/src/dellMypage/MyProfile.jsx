import React from 'react';


const styles = {
    cardBox: {
        height: "550px"
    }
}

function MyProfile() {
    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> ~ 님 | No. ~</div>
                        <div className="card-body" style={styles.cardBox}>
                            <h5 className="card-title">Profile</h5>
                            <div>
                                <table className={"table table-hover m-0"}>
                                    <thead className={"container"}>
                                    {/*<th></th>*/}
                                    {/*<th></th>*/}
                                    </thead>

                                    <tbody className={"container"}>

                                    <tr>
                                        <td> Name :</td>
                                        <td><input/></td>
                                    </tr>
                                    <tr>
                                        <td> ID :</td>
                                        <td><input/></td>
                                    </tr>

                                    <tr>
                                        <td> PW :</td>
                                        <td>
                                            <input /></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <button>수정</button>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted border-dark bg-white">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;