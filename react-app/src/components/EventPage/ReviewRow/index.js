import React from 'react';
import styles from './styles.module.css';
import ReactStarsRating from 'react-awesome-stars-rating';
// className={styles.}
const ReviewRow = ({ review }) => {
	console.log(review);
	let reviewRating = review.rating;
	let reviewComment = review.comment;
	let reviewDate = review.created_at;
	let date = new Date(reviewDate)
	let reviewUserName = review.user_name;
	console.log(date)
	return (
        <div className={styles.row}>
			<div className={styles.reviewComment}>{reviewComment}</div>
			<div className={styles.reviewInfo}>
				<ReactStarsRating value={reviewRating} isEdit={false} />
				<div>{reviewUserName}</div>
				<div>{date.getDate()}-{date.getMonth()}-{date.getFullYear()}</div>
			</div>
		</div>
	);
};

export default ReviewRow;
