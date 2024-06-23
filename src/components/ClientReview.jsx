import React from "react";

const ClientReviews = ({ reviews }) => {
  // Render up to 5 reviews
  const reviewsToShow = reviews.slice(0, 5);

  return (
    <div className="client-reviews-container">
      <h2>Client Reviews</h2>
      {reviewsToShow.length > 0 ? (
        <div className="client-reviews">
          {reviewsToShow.map(review => (
            <div key={review.id} className="review">
              <div className="author">{review.author}</div>
              <div className="text">{review.text}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default ClientReviews;
