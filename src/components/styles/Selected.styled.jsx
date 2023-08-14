import { styled } from "styled-components";
import { useRating } from "../../context/RatingContext";

const SelectedText = styled.p`
	font-size: var(--fs-300);
	font-weight: 400;
	line-height: 1.57143;
	color: var(--clr-primary-400);
	background: var(--clr-neutral-800);
	display: inline-block;
	padding: .31rem .75rem;
	border-radius: 100vmax;
	margin-bottom: 1.5rem;
`;

export const Selected = () => {
	const rating = useRating();
	return (
		<SelectedText>
			You selected <span>{rating}</span> out of 5
		</SelectedText>
	);
};
