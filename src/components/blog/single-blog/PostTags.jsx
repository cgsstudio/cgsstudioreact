import React, { useState, useEffect } from "react";
import LikeIcon from "../../../assets/images/icon/like.svg";
import CommentIcon from "../../../assets/images/icon/comment.svg";

function PostTags() {
	// Initialize likes from local storage or use default value of 175
	const [likes, setLikes] = useState(() => {
		const storedLikes = localStorage.getItem("likes");
		return storedLikes ? parseInt(storedLikes, 10) : 175;
	});

	// Function to handle like button click
	const handleLike = () => {
		setLikes((prevLikes) => prevLikes + 1); // Update likes state
	};

	// Update local storage whenever likes changes
	useEffect(() => {
		localStorage.setItem("likes", likes);
	}, [likes]);

	return (
		<div className="post-tag-wrap">
			<div className="post-tag">
				<h3>Tags:</h3>
				<div className="wp-block-tag-cloud">
					<a href="#">Business</a>
					<a href="#">Solutions</a>
				</div>
			</div>
			<div className="post-like-comment">
				<ul className="post-like">
					<li>
						<button onClick={handleLike} className="like-button">
							<img src={LikeIcon} alt="like icon" />
							{likes}
						</button>
					</li>
				
				</ul>
			</div>
		</div>
	);
}

export default PostTags;
