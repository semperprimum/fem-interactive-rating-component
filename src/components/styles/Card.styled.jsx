import { styled } from "styled-components";

export const Card = styled.div`
	background: var(--gradient);
	padding: 1.5rem 1.5rem 2rem;
	border-radius: 0.9375rem;
	button {
		width: 100%;
	}
	text-align: ${({ $textCenter }) => $textCenter && "center"};
	@media only screen and (min-width: 28.125em) {
		max-width: 25.75rem;
		padding: 2rem 2.44rem 2rem 2rem;
		border-radius: 1.875rem;
		transform: translateY(3px); /* For design comparison */
	}
`;

export const Heading = styled.h1`
	font-size: var(--fs-500);
	color: var(--clr-neutral-100);
	font-weight: 700;
	@media only screen and (min-width: 28.125em) {
		line-height: normal;
	}
`;

export const IconWrapper = styled.div`
	display: grid;
	place-content: center;
	border-radius: 100vmax;
	width: 2.5rem;
	height: 2.5rem;
	background-color: var(--clr-neutral-800);
	margin-bottom: 1rem;
	@media only screen and (min-width: 28.125em) {
		margin-bottom: 2rem;
		width: 3rem;
		height: 3rem;
	}
`;

export const Body = styled.p`
	margin-top: 0.63rem;
	font-size: var(--fs-300);
	line-height: 1.57143;
	font-weight: 400;
	@media only screen and (min-width: 28.125em) {
		margin-top: 0.5rem;
		line-height: 1.6;
	}
`;

export const Form = styled.form`
	margin-top: 1.5rem;
	@media only screen and (min-width: 28.125em) {
		margin-top: 1.75rem;
	}
`;

export const Fieldset = styled.fieldset`
	display: flex;
	justify-content: space-between;
	border: none;
	margin: 0;
	padding: 0;
	margin-bottom: 1.5rem;
	@media only screen and (min-width: 28.125em) {
		margin-bottom: 2rem;
	}
`;

export const Checkbox = styled.input`
	appearance: none;
	width: 2.625rem;
	height: 2.625rem;
	background: var(--clr-neutral-800);
	border-radius: 100vmax;
	margin: 0;
	display: grid;
	place-items: center;
	color: var(--clr-neutral-500);

	&::before {
		counter-increment: checkboxNumbers;
		content: counter(checkboxNumbers);
		font-size: var(--fs-400);
		font-weight: 700;
		transform: translateY(0.1rem);
		color: currentColor;
	}

	&:checked {
		background: var(--clr-primary-400);
		color: var(--clr-neutral-100);
	}
	@media only screen and (min-width: 28.125em) {
		transition: color 150ms ease, background 150ms ease;
		cursor: pointer;
		width: 3.1875rem;
		height: 3.1875rem;
		&:not(&:checked) {
			&:hover,
			&:focus-visible {
				background: var(--clr-neutral-500);
				color: var(--clr-neutral-100);
			}
		}
	}
`;

export const CheckboxGroup = styled.div``;

export const Illustration = styled.img`
	margin-inline: auto;
	margin-bottom: 1.5rem;
`;
