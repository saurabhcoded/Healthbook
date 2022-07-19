import React from 'react'

const Testimonial = () => {
  return (
    <section className="testimonnials  container p-4">
    <h2 className="fw-bold text-center">Testimonials</h2>
    <hr className="w-25 center mx-auto mb-5" style={{borderTop:"5px solid #154360",marginTop:"-5px"}} />

    <div id="carouselExampleIndicators" className="carousel slide bg-dark h-75 " data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="radio" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
          className="active rounded-circle bg-dark" style={{width: "15px",height: "15px"}} aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2 "
          className="rounded-circle  bg-dark" style={{width: "15px",height:" 15px"}}></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"
          className="rounded-circle  bg-dark" style={{width:"15px", height:" 15px"}}></button>
      </div>
      <div className="carousel-inner align-items- bg-white" style={{minHeight:"550px",border:" none"}}>
        <div className="carousel-item active">
          <div className="container  py-3   bg-light">
            <div className="d-flex flex-column text-light mx-auto text-center  text-dark">
              <h3>Nitesh Kumar</h3>
              <p>Anxiety Patient</p>
              <p className="fs-6 lh-sm fw-slim mx-auto" style={{maxWidth:"600px"}}><i
                  className='fs-3 bx bxs-quote-left me-3'></i>The experience with Doctors of HEALTHBOOK was extremely
                positive. He is a very practical doctor and at times can be straightforward in his approach. He is
                honest in his approach and i remember him telling me in the first meeting itself that there are no
                quick fixes and that it will take some time before improvement shows. He answers all the questions and
                doesn’t shy away from tough ones. Fees may appear costly at times. His sessions cost 1800 though
                consultation fees is 900. I chose minimal medicines and more sessions which worked good for me. In
                nutshell, good doctor. Good experience.<i className='bx bxs-quote-right fs-3 ms-3'></i>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container  py-3 bg-light">
            <div className="d-flex flex-column text-light mx-auto text-center  text-dark">
              <h3>Prateek Kanade</h3>
              <p>Depression Treatment</p>
              <p className="fs-6 lh-sm fw-slim mx-auto" style={{maxWidth:"600px"}}><i
                  className='fs-3 bx bxs-quote-left me-3'></i>I visited the doctor for my depression and she was very
                patient in listening to my problem. There was no hurry to see the next patient and she dealt with my
                issue very well. She prescribed me anti depressants and we had follow ups as well. She remembered my
                issue even after I went for a follow-up 2-3 months later as well. Dr. Priyanka is also soft spoken and
                a very very competent Psychiatrist.<i className='bx bxs-quote-right fs-3 ms-3'></i>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container  py-3   bg-light">
            <div className="d-flex flex-column text-light mx-auto text-center  text-dark">
              <h3>Mayank</h3>
              <p>Visited For OCD Treatment</p>
              <p className="fs-6 lh-sm fw-slim mx-auto" style={{maxWidth:"600px"}}><i
                  className='fs-3 bx bxs-quote-left me-3'></i>Only people who have mental health issues know how much they
                have to suffer. It took me 3 years to accept that i have a problem, i was having what is called as
                obsessive compulsive disorder for almost 4 years and i could start treatment only last year. Initially
                i saw a psychiatrist at lucknow, where i reside, but didnt feel any improvement. I was told about Dr
                Priyanka Goyal by my friend who lives in delhi and had taken treatment from her. I had to take train
                to see her everytime as her clinic is noida but it was so worth it.<i
                  className='bx bxs-quote-right fs-3 ms-3'></i>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  )
}

export default Testimonial