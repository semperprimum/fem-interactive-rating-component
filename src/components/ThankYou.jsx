import { Card, Heading, Illustration, Body } from "./styles/Card.styled";
import { Selected } from "./styles/Selected.styled";
import illustration from "../assets/images/illustration-thank-you.svg";

export const ThankYou = () => {
	return (
		<Card $textCenter>
			<Illustration src={illustration} alt="" />
			<Selected />
			<Heading>Thank you!</Heading>
			<Body>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don’t hesitate to get in touch!
			</Body>
		</Card>
	);
};
