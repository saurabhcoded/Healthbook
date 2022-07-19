import React from 'react'

const Features = () => {
  return (
    <section class="Features">
    <div class="bg-opacity-25 " style={{backgroundColor:" #154360",color: "#154360"}}>
      <div class="container py-5 ">
        <div class="row align-items-stretch justify-content-evenly text-justify p-3 p-md-0">
          <div class="col-md-5 col-sm-12 bg-light d-flex flex-column justify-content-between p-3 rounded-3">
            <div class=" text">
            <h3 class="lh-1 fw-bold">HEATLH<br/>BOOK</h3>
            <h5 class="ps-3" style={{borderLeft: "2px solid lightgray"}}> " HealthBook provides treatment for
              psychiatric disorders such as depression, anxiety disorders, obsessive compulsive disorders,
              schizophrenia, bipolar disorder, dementia and psychiatric disorders in children. The medical treatment
              is individualised according to the need of patient and an attempt is made to keep the duration of
              treatment minimal, while ensuring adequacy of treatment. "</h5>
          </div>
          <button class="btn btn-primary w-50 rounded-pill mt-4">BookNow</button>
        </div>
        <div class="col-md-3 col-sm-12 bg-light d-flex flex-column justify-content-between  p-3 pb-4 rounded-3 my-3">
          <div class="text-center">
            <h4 class="fw-bold">DIABATOLOGY</h4>
            <hr/>
            <h5>" Dr Vinesh Bansal, who is a renowned diabetologist takes care of patients with diabetes. "</h5>
          </div>
          <button class="btn btn-primary mt-3 w-50 rounded-pill mx-auto">Learn More</button>
        </div>
        <div class="col-md-3 col-sm-12 bg-light d-flex flex-column justify-content-between p-3 pb-4 rounded-3">
          <div class="text-center">
            <h4 class="fw-semibold">CLINICAL PSYCHOLOGY</h4>
            <hr/>
            <h5>" The clinical psychologists provide psychotherapy sessions, counselling and psychological
              assessments. "</h5>
          </div>
          <button class="btn btn-primary mt-4 w-50 rounded-pill  mx-auto">Learn More</button>
        </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default Features