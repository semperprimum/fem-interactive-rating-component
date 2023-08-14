import React, { useContext, useState } from "react";

const RatingContext = React.createContext();
const RatingUpdateContext = React.createContext();

export const useRating = () => {
	return useContext(RatingContext);
};

export const useRatingUpdate = () => {
	return useContext(RatingUpdateContext);
};

export const RatingProvider = ({ children }) => {
	const [rating, setRating] = useState(null);
	const updateRating = (newRating) => {
		newRating !== rating && setRating(newRating);
	};
	return (
		<RatingContext.Provider value={rating}>
			<RatingUpdateContext.Provider value={updateRating}>
				{children}
			</RatingUpdateContext.Provider>
		</RatingContext.Provider>
	);
};
