import React from 'react'
import BookheroImg from '../../img/Bookappointment.png'

const Bookhero = () => {
  return (
    <section className="container booking text-dark">
    <div className="banner">
        <div className="row row-book py-5 justify-content-evenly align-items-center w-100">
            <div className="col-md-5 order-2 order-md-1 d-flex flex-column justify-content-center">
                <div className="text-primary">
                    <h1 className="fw-bold heading">WELCOME !</h1>
                    <p className="fs-4" style={{marginTop: "-15px"}}>How can we help You</p>
                </div>
                <div>
                    <h4 className="fw-semibold text-secondary">Please Fill the Booking Form below</h4>
                    <h5 className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Excepturi adipisci voluptatibus alias repudiandae rem harum tenetur esse. Aliquam, modi.
                        Exercitationem pariatur voluptates, quam quaerat dolore unde! Esse est id sed.</h5>
                </div>
            </div>
            <div className="col-md-7 order-1 order-md-2 "><img src={BookheroImg} alt="" className="py-5"
                    width="100%"/></div>

        </div>
    </div>
</section>
  )
}

export default Bookhero