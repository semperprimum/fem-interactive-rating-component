import { styled } from "styled-components";

export const Button = styled.button`
	display: inline-block;
	border: none;
	background: var(--clr-primary-400);
	font-size: var(--fs-400);
	color: var(--clr-neutral-100);
	border-radius: 100vmax;
	line-height: normal;
	padding: 0.75rem 2rem;
	letter-spacing: 0.11669rem;
	text-transform: uppercase;
	font-weight: 700;

	@media only screen and (min-width: 28.125em) {
		letter-spacing: 0.125rem;
		line-height: normal;
		transition: color 170ms ease, background 170ms ease;
		&:not(&:disabled) {
			cursor: pointer;
			&:hover,
			&:focus-visible {
				background: var(--clr-neutral-100);
				color: var(--clr-primary-400);
			}
		}
		&:disabled {
			cursor: not-allowed;
		}
	}
`;
