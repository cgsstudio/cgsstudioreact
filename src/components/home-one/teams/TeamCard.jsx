import { Link } from "react-router-dom";

function TeamCard({ team: { name, designation, img, linkedin } }) {
	return (
		<div className="col-xl-6 col-md-6">
			<div className="aximo-team-wrap">
				<div className="aximo-team-thumb">
					<img src={img} alt={name} />
				</div>
				<div className="aximo-team-data">
					<Link to={`/${name.toLowerCase().replace(/\s+/g, '-')}`}>
						<h3>{name}</h3>
					</Link>
					<p>{designation}</p>
					
					{/* Bio and LinkedIn Links */}
					<div className="flex gap-4 mt-2 border-t pt-0 text-sm text-gray-600">
						<Link 
							to={`/${name.toLowerCase().replace(/\s+/g, '-')}`} 
							className="hover:underline"
						>
							Bio
						</Link>
						<span>|</span>
						<a 
							href={linkedin} 
							target="_blank" 
							rel="noopener noreferrer" 
							className="hover:underline"
						>
							LinkedIn
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TeamCard;
