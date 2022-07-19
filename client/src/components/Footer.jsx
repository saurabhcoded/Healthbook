import React from 'react'
import wave2 from '../img/wave2.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <img src={wave2} alt=""/>
    <section className="footer">
      <div className="container p-3 text-light">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-4 ">    
            <div className="text  mx-auto">
              <h3 className="lh-1 fw-bold">HEATLH<br/>BOOK</h3>
              <p className="fs-5 lh-sm w-75"><i
                className='fs-6 bx bxs-quote-left me-3'></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae consequuntur rem quaerat est eligendi perspiciatis sint sed suscipit libero delectus! Quis, <i
                className='fs-6 bx bxs-quote-right me-3'></i></p>
                <button className="btn btn-outline-light"  style={{borderRadius: "0"}}>About us</button>
            </div>         

          </div>
          <div className="col-12 col-md-3">
            <ul className="list fs-5 text-justify pt-4" style={{paddingLeft:"0 "}}>
              <li className="list-group-item fs-3 fw-semibold">Useful Links</li>
              <li className="list-group-item"><Link to="/" className="text-light"  style={{textDecoration:"none"}}>Home</Link></li>
              <li className="list-group-item"><Link to="/book" className="text-light" style={{textDecoration:"none"}}>Book Appointment</Link></li>
              <li className="list-group-item"><Link to="/about" className="text-light"  style={{textDecoration:"none"}}>About us</Link></li>
              <li className="list-group-item"><Link to="/tc" className="text-light"  style={{textDecoration:"none"}}>Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-5 h-100 pb-5">
            <div className="text-start text-md-star">
              <h4 className="fw-semibold">
                Join Our NewsLetter
              </h4>
              <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sapiente consequuntur</p>
              <form action="" className="row w-sm-75 w-100  mx-auto">
                <input type="text" className="col  form-control form-control-lg fs-6 rounded-0" placeholder="Email address"/><button className="col-4 btn btn-primary text-center fw-bold" style={{borderRadius: "0"}}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Footer