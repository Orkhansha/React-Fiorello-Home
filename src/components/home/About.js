import React from 'react'

function About() {
  return (
    <div>
        

<section id="about">
<div className="container py-5">
<div className="row py-5">
    <div className="col-lg-6">
        <div className="img">
            <img src={require('../../img/h3-video-img.jpg')} className="img-fluid" alt=""/>
            <div
                className="player position-absolute rounded-circle d-flex align-items-center justify-content-center">
                <i className="fas fa-play fa-lg"></i>
            </div>
        </div>
    </div>
    <div className="col-lg-6">
        <div className="about-text mt-5 mt-lg-0 px-lg-5">
            <h1>Suprise Your <span>Valentine!</span> Let us arrange a smile.</h1>
            <p className="py-3">Where flowers are our inspiration to create lasting memories. Whatever the
                occasion...</p>
            <ul className="list-unstyled">
                <li className="mt-3"><img src={require('../../img/h1-custom-icon.png')} className="mr-2" alt=""/> Unique flower
                    arrangements</li>
                <li className="mt-3"><img src={require('../../img/h1-custom-icon.png')} className="mr-2" alt=""/> Best way to say
                    you care.</li>
            </ul>
        </div>
    </div>
</div>
</div>
</section> 

    </div>
  )
}

export default About