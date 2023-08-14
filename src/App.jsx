import { useState } from "react";
import { Rating, ThankYou } from "./components";
import { RatingProvider } from "./context/RatingContext";

export default function App() {
	const [submitted, setSubmitted] = useState(false);
	const checkboxes = [
		{ id: 1, value: "1", label: "One star" },
		{ id: 2, value: "2", label: "Two stars" },
		{ id: 3, value: "3", label: "Three stars" },
		{ id: 4, value: "4", label: "Four stars" },
		{ id: 5, value: "5", label: "Five stars" },
	];
	return (
		<RatingProvider>
			<main>
				{submitted ? (
					<ThankYou />
				) : (
					<Rating setSubmitted={setSubmitted} checkboxes={checkboxes} />
				)}
			</main>
		</RatingProvider>
	);
}
