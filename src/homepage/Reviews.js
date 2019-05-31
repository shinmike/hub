import React from 'react';
import moment from 'moment';

const Reviews = ({ reviews, deleteReview }) => {

  const reviewsList = reviews.length ? (
    reviews
      .filter((review, index) => index < 3)
      .map(review => {

      const momentTimestampConvert = moment(review.timeStamp, "YYYYMMDD").fromNow()

      return (
      <div className="card mb-3" key={review.id} onClick={() => { deleteReview(review.id) }}>
        <div className="row no-gutters">
          <div className="col-4 p-3">
            <img src={review.img} className="card-img" alt="..." />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{review.name}</h5>
              <p className="card-text">{review.content}</p>
              <p className="card-text"><small className="text-muted">Commented {momentTimestampConvert}</small></p>
            </div>
          </div>
        </div>
      </div>        
      )
    })
  ) : (
      <div className="list-group-item">There are no reviews :(</div>
    )
  return (
    <div>
      {reviewsList}

    </div>
  )
}

export default Reviews;

        // <div className="list-group-item" key={review.id}>
        //   <span onClick={() => { deleteReview(review.id) }}>{review.content}</span>
        // </div> 