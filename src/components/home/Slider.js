import React from 'react'

function Slider() {
  return (
    <div>
        

<section id="slider">
<div className="owl-carousel slider">
<div> <img src={require('../../img/h3-slider.jpg')} alt=""/> </div>
{/* <div> <img src={require('../../img/h3-slider2.jpg')} alt=""/> </div>
<div> <img src={require('../../img/h3-slider3.jpg')} alt=""/> </div> */}
</div>
<div className="container context pl-lg-5 ml-lg-3">
<div className="row">
    <div className="col-lg-5">
        <div className="text">
            <h1>Send <span>flowers</span> like</h1>
            <h1>you mean it</h1>
            <p className="text-black-50 d-none d-sm-block">Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will
                make it special cursus a sit amet mauris. </p>
        </div>
        <div className="img">
            <img src={require('../../img/h2-sign-img.png')} alt=""/>
        </div>
    </div>
</div>
</div>
</section> 

    </div>
  )
}

export default Slider