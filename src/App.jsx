import { useState } from "react";
import { Rating, ThankYou } from "./components";
import { RatingProvider } from "./context/RatingContext";

export default function App() {
	const [submitted, setSubmitted] = useState(false);
	const checkboxes = [
		{ id: 1, value: "1", label: "Rating: one" },
		{ id: 2, value: "2", label: "Rating: two" },
		{ id: 3, value: "3", label: "Rating: three" },
		{ id: 4, value: "4", label: "Rating: four" },
		{ id: 5, value: "5", label: "Rating: five" },
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
