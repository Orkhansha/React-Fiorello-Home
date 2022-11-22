import React from 'react'

function Subscribe() {
    return (
        <div>
            <section id="subscribe">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-12">
                            <div className="content text-center py-5">
                                <h3>Join The Colorful Bunch!</h3>
                                <div className="form-group d-flex justify-content-center flex-wrap mt-5">
                                    <input placeholder="Email Address" className="form-control-lg rounded-0" />
                                    <button className="btn btn-danger btn-lg rounded-0 px-5 mt-3 mt-sm-0">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subscribe