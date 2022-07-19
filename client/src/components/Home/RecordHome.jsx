import React from 'react'
import presentation from '../../img/presentation.png'

const RecordHome = () => {
    return (
        <section className="records">
            <div className="container vh-100">
                <div className="container overflow-hidden py-5">
                    <h2 className="fw-bold text-center">Know More about Us</h2>
                    <hr className="w-25 center mx-auto mb-5" style={{ borderTop: "5px solid #154360", marginTop: "-5px" }} />
                    <div className="row gx-4 justify-content-evenly text-center  ">
                        <div className="col mt-3">
                            <div className="p-3 bg-light rounded-1 shadow-sm">
                                <h1 className="text-warning fw-bold">10+</h1>
                                <h4>Years Experience</h4>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="p-3 bg-light rounded-1 shadow-sm">
                                <h1 className="text-warning fw-bold">5000+</h1>
                                <h4> Patients Healed</h4>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="p-3  bg-light rounded-1 shadow-sm">
                                <h1 className="text-warning fw-bold">900+</h1>
                                <h4>Reviews received</h4>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="p-3 bg-light rounded-1 shadow-sm">
                                <h1 className="text-warning fw-bold">4.8+</h1>
                                <h4> Google ratings</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12"><img src={presentation} alt="" width="100%" />
                </div>
            </div>
        </section>
    )
}

export default RecordHome