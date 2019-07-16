import React from 'react'
import { Link } from 'gatsby';
import Title from '../Globals/Title';

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our story"/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                              fringilla at venenatis pellentesque pretium at venenatis ut facilisis dapibus praesent lectus posuere massa varius netus mi vitae mauris sollicitudin nam wisi et velit penatibus gravida pretium et ac tellus velit magna libero massa eu arcu
                        </p>
                        <Link to="/about/">
                        <button className="btn text-uppercase btn-yellow">
                            about page
                        </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}
