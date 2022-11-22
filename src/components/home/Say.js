import React from 'react'

function Say() {
  return (
    <div>
        
 

<section id="say">
<div className="container">
<div className="row py-5 justify-content-center">
    <div className="col-md-8 col-xl-6">
        <div className="owl-carousel say">
            <div>
                <div className="item text-center">
                    <div className="img d-flex justify-content-center">
                        <img src={require('../../img/testimonial-img-1.png')} alt=""/>
                    </div>
                    <div className="text text-muted pt-3 pb-5">
                        <i>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus
                            lingua. </i>
                    </div>
                    <div className="author">
                        <h6>Anna Barnes</h6>
                        <p className="text-black-50">Florist</p>
                    </div>
                </div>
            </div>
            {/* <div>
                <div className="item text-center">
                    <div className="img d-flex justify-content-center">
                        <img src={require('../../img/testimonial-img-2.png')} alt=""/>
                    </div>
                    <div className="text text-muted pt-3 pb-5">
                        <i>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget. </i>
                    </div>
                    <div className="author">
                        <h6>Jasmine White</h6>
                        <p className="text-black-50">Florist</p>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>
</div>
</section>


    </div>
  )
}

export default Say