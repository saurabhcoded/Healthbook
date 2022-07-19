import React from 'react'
import HeroImg from '../../img/heroimg.png'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section id="Hero">
     {/* Container  */}
    <div className="container py-5">
      <div className="pt-5 w-100 row justify-content-center align-items-center">
        <div className="col-md-5 col-lg-5 col-sm-12 order-2 order-md-1 text-light py-4">
          <h5>Are You worried about your family?</h5>
          <h1 className="fw-bold lh-sm">We are the Premium Caretaker for You and Your family.<br/>So Care Now</h1>
          <Link to="/book">
          <button className="btn btn-primary my-4 rounded-pill fs-6 fw-semibold px-4 py-3">
            Book Appointment
            </button>
          </Link>
        </div>
        <div className="col-md-7 col-lg-7 col-sm-12 order-1 order-md-2 mt-4 mt-sm-4">
          <img src={HeroImg} alt="" width="100%"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero