import { Link } from "react-router-dom";

import CgsLogo from "../../../assets/images/logo/Cgs_Logo.png";
function HeaderLogo() {
	return (
		<div className="brand-logo">
			  <Link to="/">
                <img src={CgsLogo} alt="Logo" className="light-version-logo"  />
            </Link>
		</div>
	);
}

export default HeaderLogo;
