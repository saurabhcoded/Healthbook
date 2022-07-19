import React from 'react'
import undrawMedicine from '../../img/undraw_medicine_b-1-ol.svg'
import { Link } from 'react-router-dom'

const ContactHome = () => {
    return (
        <section className="contact py-5" style={{ paddingBottom: "50px" }}>
            <div className="container">
                <div className="row align-items-stretch">
                    <div className="col-md-5 col-sm-12">
                        <img src={undrawMedicine} alt="" width="100%" />
                    </div>
                    <div className="col-md-7 col-sm-12 text-center pt-5">
                        <h2 className="fw-bold">Book An Appointment</h2>
                        <hr className="w-50 center mx-auto mb-3" style={{ borderTop: "5px solid #154360", marginTop: "-5px" }} />
                        <p className="fs-4 w-75 mx-auto"><i className='fs-3 bx bxs-quote-left me-3 text-primary'></i>Fill the Appointment
                            form for your preferred date and time and we’ll get in touch with you as soon as possible<i
                                className='fs-3 bx bxs-quote-right ms-3 text-primary'></i></p>
                        <Link to="/book">
                            <button className="btn btn-outline-primary  p-4 fs-5 " style={{ borderRadius: "0" }}>Book Appointment</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactHome