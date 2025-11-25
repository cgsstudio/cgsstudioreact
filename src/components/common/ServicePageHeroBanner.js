import React from "react";
import { Link } from "react-router-dom";

const ServicePageHeroBanner = () => {
	return (
		<div className="inner-banner">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="banner-content text-center">
							<h1>Service Page</h1>
							<span>
								<Link to="/">Home</Link> &gt; <Link to="/service">Service</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicePageHeroBanner;