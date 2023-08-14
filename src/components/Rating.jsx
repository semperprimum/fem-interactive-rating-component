import {
	Body,
	Card,
	Checkbox,
	CheckboxGroup,
	Fieldset,
	Form,
	Heading,
	IconWrapper,
} from "./styles/Card.styled";
import { ReactComponent as IconStar } from "../assets/images/icon-star.svg";
import { Button } from "./styles/Button.styled";
import { useRating, useRatingUpdate } from "../context/RatingContext";

export const Rating = ({ checkboxes, setSubmitted }) => {
	const rating = useRating();
	const ratingUpdate = useRatingUpdate();

	const handleRatingChange = (element) => {
		ratingUpdate((prev) =>
			element.target.value === prev ? null : element.target.value
		);
		console.log({ value: element.target.value, rating: rating });
	};
	const handleFormSubmit = () => {
		setSubmitted(true);
	};
	return (
		<Card>
			<IconWrapper>
				<IconStar />
			</IconWrapper>
			<Heading>How did we do?</Heading>
			<Body>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</Body>
			<Form>
				<Fieldset>
					{checkboxes.map((checkbox) => (
						<CheckboxGroup key={checkbox.id}>
							<Checkbox
								id={`c${checkbox.id}`}
								aria-label={checkbox.label}
								value={checkbox.value}
								type="checkbox"
								checked={checkbox.value === rating}
								onChange={(e) => handleRatingChange(e)}
							/>
						</CheckboxGroup>
					))}
				</Fieldset>
				<Button disabled={rating === null} onClick={() => handleFormSubmit()}>
					Submit
				</Button>
			</Form>
		</Card>
	);
};
