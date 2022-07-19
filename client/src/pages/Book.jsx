import React, { useState } from 'react'
import Bookhero from '../components/Book/Bookhero';

// import BookingForm from '../components/BookingForm'

const Book = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [timeslot, setTimeslot] = useState('');
  const [date, setDate] = useState('');
  const [problem, setProblem] = useState('');
  const [concern, setConcern] = useState('');
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    if (e && e.preventDefault) { e.preventDefault(); }
    try {
      let res = await fetch("https://healthbookserver.herokuapp.com/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          timeslot: timeslot,
          date: date,
          problem: problem,
          concern: concern,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("User Created succesfully");
        setFirstname("")
        setLastname("")
        setEmail("")
        setPhone("")
        setTimeslot("")
        setDate("")
        setProblem("")
        setConcern("")
        console.log(resJson);
      }
    } catch (error) {
      setMessage("An erro occured")
    }
  }



  return (
    <>
    <Bookhero/>
    <form className='Bookingform container p-4' onSubmit={handleSubmit} style={{ maxWidth: "550px", background: "#aecce0" }}>
      <div className="message">{message ? <p>{message}</p> : null}</div>
      <h5 className='mb-3'>Contact Details</h5>
      <div className="row">
        <div className="col mb-2">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" name='firstname' value={firstname} onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className="col mb-2">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} />
        </div>
      </div>
      <div className="col mb-2">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="col mb-2">
        <label className="form-label">Contact Number</label>
        <input type="number" className="form-control" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <hr />
      <h5 className='mb-3'>Medical information</h5>
      <div className="row">
        <div className="col mb-2">
          <label className="form-label">Select timeslot</label>
          <select className="form-select fs-6" name='timeslot' value={timeslot} onChange={(e) => setTimeslot(e.target.value)}>
            <option >Click to select</option>
            <option value="10AM">10AM</option>
            <option value="11AM">11AM</option>
            <option value="12PM">12PM</option>
            <option value="1PM">1PM</option>
            <option value="2PM">2PM</option>
            <option value="3Pm">3PM</option>
            <option value="4PM">4PM</option>
            <option value="5PM">5PM</option>
            <option value="6PM">6PM</option>
          </select>
        </div>
        <div className="col mb-2">
          <label className="form-label">Pick a Date</label>
          <input type="date" className="form-control"  min="2022-06-09" max="2024-12-31" name='date' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
      </div>
      <div className="mb-2">
        <label className="form-label">Select your problem</label>
        <select className="form-select " name='problem' value={problem} onChange={(e) => setProblem(e.target.value)}>
          <option >Click to Select</option>
          <option value="Depression">Depression</option>
          <option value="Anxiety">Anxiety</option>
          <option value="OCD">OCD</option>
          <option value="ADHD">ADHD</option>
          <option value="others">others</option>
        </select>
      </div>
      <div className="mb-4">
        <label >Share concern</label>
        <textarea className='form-control' name="concern" rows="5" value={concern} onChange={(e) => setConcern(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Book