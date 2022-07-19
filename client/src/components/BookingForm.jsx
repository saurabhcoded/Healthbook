import React from 'react'

const BookingForm = () => {
    return (
        <form className='Bookingform container w-50'>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name='firstname' />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name='lastname' />
            </div>
            <div className="mb-3">
                <label className="form-label">email</label>
                <input type="email" className="form-control" name='email' />
            </div>
            <div className="mb-3">
                <label className="form-label">phone</label>
                <input type="number" className="form-control" name='phone' />
            </div>
            <select className="form-select" name='timeslot'>
                <option selected>timeslot</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
            <div className="mb-3">
                <label className="form-label">Date</label>
                <input type="date" className="form-control" name='date' />
            </div>
            <select className="form-select mb-3" name='problem'>
                <option selected>Problem</option>
                <option value="one">OCD</option>
                <option value="two">DEPRESSION</option>
                <option value="three">ADHD</option>
            </select>
            <div className="mb-5">
                <label >Share concern</label>
                <textarea className='form-control' name="concern" rows="5"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default BookingForm