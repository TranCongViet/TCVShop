import Rating from 'react-rating';
// import profileAvatar from '../assets/profileAvatar.png';
import profileAvatar2 from '../assets/profileAvatar2.png';

import { FaStar } from 'react-icons/fa6';
const ReviewCard = ({ review }) => {
  return (
    <div className="flex space-x-5 border-b border-gray-200 p-5">
      <img
        src={profileAvatar2}
        alt={review.reviewerName}
        className="h-10 w-10 rounded-full"
      />
      <div className="ml-3">
        <h3 className="font-semibold">{review.reviewerName}</h3>
        <Rating
          initialRating={review.rating}
          fractions={10}
          emptySymbol={<FaStar className="text-gray-300" />}
          fullSymbol={<FaStar className="text-yellow-400" />}
          readonly
        />
        <p className="text-sm text-gray-500">{review.date}</p>
        <p>{review.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
