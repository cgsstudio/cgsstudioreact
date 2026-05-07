import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-flex align-items-center">
			<Link 
				className="d-none d-lg-inline-flex" 
				to="/contact-us"
				style={{
					backgroundColor: "#FF0000",
					color: "#fdfde1",
					padding: "10px 24px",
					borderRadius: "50px",
					textDecoration: "none",
					fontWeight: "600",
					fontSize: "15px",
					transition: "all 0.3s ease",
					border: "2px solid #FF0000"
				}}
				onMouseEnter={(e) => {
					e.currentTarget.style.backgroundColor = "transparent";
					e.currentTarget.style.color = "#FF0000";
				}}
				onMouseLeave={(e) => {
					e.currentTarget.style.backgroundColor = "#FF0000";
					e.currentTarget.style.color = "#fdfde1";
				}}
			>
				Get A Free Consultation
			</Link>
		</div>
	);
}

export default HeaderButton;
