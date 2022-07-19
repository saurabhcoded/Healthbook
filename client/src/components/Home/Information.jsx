import React from 'react'
import wave from '../../img/wave.svg'
import HandopenDR from '../../img/HandopenDR.png'

const Information = () => {
  return (
    <section className=" pb-5">
    <div className="m-0">
      <img src={wave} alt=""/>
    </div>
    <div className="container">
      <div className="h-100 w-100 row justify-content-center align-items-center pb-4  text-justify">
        <div className="col-md-5 col-sm-12 col-sm12">
          <img src={HandopenDR} alt="" width="100%"/>
        </div>
        <div className="col-md-7 col-sm-12 col-sm12 pt-4 text-justify">
          <h4 className="fw-bold ">What is special in us</h4>
          <p className="fs-5 lh-sm ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quas sint enim, a
            illo esse nesciunt eaque consequuntur quia atque repudiandae accusamus!</p>
          <div className="container-fluid text-justify  py-3">
            <div className="row justify-content-evenly">
              <i className="col-1 bi bi-bandaid-fill fs-2 text-warning pe-4"></i>
              <div className="point col">
                <h5 className="fw-bold">All Appointment on your preferred time</h5>
                <h6 className="lh-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, molestiae dolorum sed
                  vitae ducimus blanditiis doloribus, consectetur corrupti velit perspiciatis saepe quidem? Doloribus
                  earum praesentium accusantium.</h6>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <i className="col-1 bi bi-alarm fs-2 text-dark pe-4"></i>
              <div className="point col">
                <h5 className="fw-bold">Handwritten summary of your reports</h5>
                <h6 className="lh-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur provident hic
                  dolorum repudiandae aperiam. Culpa ducimus quas atque reprehenderit possimus?</h6>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <i className="col-1 bi bi-activity fs-2 text-danger fw-bold pe-4"></i>
              <div className="point col">
                <h5 className="fw-bold">Handwritten summary of your reports</h5>
                <h6 className="lh-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eum, aliquam
                  provident vero molestiae et velit voluptatibus illo fugiat vel dolore minima autem accusamus soluta
                  laboriosam natus ipsam.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Information