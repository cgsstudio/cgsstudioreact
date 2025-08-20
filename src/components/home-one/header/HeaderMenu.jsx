import { Link } from "react-router-dom";
function HeaderMenu() {
	return (
		<div className="menu-block-wrapper">
			<div className="menu-overlay"></div>
			<nav className="menu-block" id="append-menu-header">
				<div className="mobile-menu-head ">
					<div className="go-back">
						<i className="fa fa-angle-left"></i>
					</div>
					<div className="current-menu-title"></div>
					<div className="mobile-menu-close">&times;</div>
				</div>
				<ul className="site-menu-main">
					<li className="nav-item nav-item-has-children">
						<Link href="/" className="nav-link-item drop-trigger">
							Home 
						</Link>
				
					</li>
					<li className="nav-item nav-item-has-children">
						<Link to="#" className="nav-link-item drop-trigger">
							Company <i className="fas fa-angle-down"></i>
						</Link>
						<ul className="sub-menu" id="submenu-1">
							<li className="sub-menu--item">
								<Link to="/about-us">
									<span className="menu-item-text">About Us</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="#">
									<span className="menu-item-text">Industries We Serve</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="#">
									<span className="menu-item-text">Career</span>
								</Link>
							</li>
							
						</ul>
					</li>

					<li className="nav-item nav-item-has-children mega-menu">
  <a href="#" className="nav-link-item drop-trigger">
    Services <i className="fas fa-angle-down"></i>
  </a>
  <div className="mega-menu-content">
    <div className="row">
      {/* Tab Navigation */}
      <div className="col-md-4">
        <ul className="nav flex-column nav-tabs" id="servicesTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="graphics-tab"
              data-bs-toggle="tab"
              data-bs-target="#graphics"
              type="button"
              role="tab"
              aria-controls="graphics"
              aria-selected="true"
            >
              Graphic Design
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="webdev-tab"
              data-bs-toggle="tab"
              data-bs-target="#webdev"
              type="button"
              role="tab"
              aria-controls="webdev"
              aria-selected="false"
            >
              Website Development
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="marketing-tab"
              data-bs-toggle="tab"
              data-bs-target="#marketing"
              type="button"
              role="tab"
              aria-controls="marketing"
              aria-selected="false"
            >
              Digital Marketing
            </button>
          </li>
        </ul>
      </div>
      {/* Tab Content */}
      <div className="col-md-8">
        <div className="tab-content" id="servicesTabsContent">
          {/* Tab Pane: Graphic Design */}
          <div
            className="tab-pane fade show active"
            id="graphics"
            role="tabpanel"
            aria-labelledby="graphics-tab"
          >
            <ul>
              <li>
                <Link to="/blog">Our Blog</Link>
              </li>
              <li>
                <Link to="/blog-grid">Blog Grid</Link>
              </li>
              <li>
                <Link to="/single-blog">Blog Details</Link>
              </li>
            </ul>
          </div>
          {/* Tab Pane: Website Development */}
          <div
            className="tab-pane fade"
            id="webdev"
            role="tabpanel"
            aria-labelledby="webdev-tab"
          >
            <ul>
              <li>
                <Link to="/web-design">Web Design</Link>
              </li>
              <li>
                <Link to="/web-development">Web Development</Link>
              </li>
            </ul>
          </div>
          {/* Tab Pane: Digital Marketing */}
          <div
            className="tab-pane fade"
            id="marketing"
            role="tabpanel"
            aria-labelledby="marketing-tab"
          >
            <ul>
              <li>
                <Link to="/seo">SEO</Link>
              </li>
              <li>
                <Link to="/social-media">Social Media</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</li>


					
					<li className="nav-item nav-item-has-children">
						<a href="#" className="nav-link-item drop-trigger">
							Services <i className="fas fa-angle-down"></i>
						</a>
						<ul className="sub-menu" id="submenu-2">
							<li className="sub-menu--item">
								<Link to="/about-us">
									<span className="menu-item-text">About Us</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/pricing">
									<span className="menu-item-text">Pricing</span>
								</Link>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
								Graphic Design <i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-3">
									<li className="sub-menu--item">
										<Link to="/blog">
											<span className="menu-item-text">Our Blog</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/blog-grid">
											<span className="menu-item-text">Blog grid</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/single-blog">
											<span className="menu-item-text">blog details</span>
										</Link>
									</li>
								</ul>
							</li>
							 
							 
							
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Service<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-4">
									<li className="sub-menu--item">
										<Link to="/service">
											<span className="menu-item-text">service</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/single-service">
											<span className="menu-item-text">service details</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Team<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-5">
									<li className="sub-menu--item">
										<Link to="/team">
											<span className="menu-item-text">team</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/single-team">
											<span className="menu-item-text">team details</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Portfolio<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-6">
									<li className="sub-menu--item">
										<Link to="/portfolio-one">
											<span className="menu-item-text">Portfolio One Column</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/portfolio-two">
											<span className="menu-item-text">Portfolio Two Column</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/single-portfolio">
											<span className="menu-item-text">Single Portfolio</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Utility<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-7">
									<li className="sub-menu--item">
										<Link to="/faq">
											<span className="menu-item-text">faq</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/errors-404">
											<span className="menu-item-text">Error 404</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/testimonial">
											<span className="menu-item-text">testimonial</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/coming-soon">
											<span className="menu-item-text">Coming Soon</span>
										</Link>
									</li>
								</ul>
							</li>
							<li className="sub-menu--item nav-item-has-children">
								<a href="#" data-menu-get="h3" className="drop-trigger">
									Account<i className="fas fa-angle-down"></i>
								</a>
								<ul className="sub-menu shape-none" id="submenu-8">
									<li className="sub-menu--item">
										<Link to="/sign-up">
											<span className="menu-item-text">sign up</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/sign-in">
											<span className="menu-item-text">sign in</span>
										</Link>
									</li>
									<li className="sub-menu--item">
										<Link to="/reset-password">
											<span className="menu-item-text">reset password</span>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li className="nav-item nav-item-has-children">
						<a href="#" className="nav-link-item drop-trigger">
							Blog <i className="fas fa-angle-down"></i>
						</a>
						<ul className="sub-menu" id="submenu-9">
							<li className="sub-menu--item">
								<Link to="/blog">
									<span className="menu-item-text">blog</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/blog-grid">
									<span className="menu-item-text">Blog grid</span>
								</Link>
							</li>
							<li className="sub-menu--item">
								<Link to="/single-blog">
									<span className="menu-item-text">blog Details</span>
								</Link>
							</li>
						</ul>
					</li>
					<li className="nav-item">
						<Link to="/contact-us" className="nav-link-item">
							Contact Us
						</Link>
					</li>
					
				</ul>
			</nav>
		</div>
	);
}

export default HeaderMenu;
