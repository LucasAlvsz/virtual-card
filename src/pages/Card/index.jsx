import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"

import cardApi from "../../services/cardApi"

import styled from "styled-components"
import { Container, Button } from "../Generate/styles"

const Card = () => {
	const { id: cardId } = useParams()
	const [card, setCard] = useState({})

	useEffect(() => {
		cardApi
			.getCard(cardId)
			.then(res => setCard(res.data))
			.catch(err => toast.error("Something went wrong, please try again later"))
	}, [])

	return (
		<StyledContainer>
			<h2>Hello, My name is {card.name}</h2>
			<h1>My History</h1>
			<h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, eaque?</h2>
			<span>
				<StyledButton onClick={() => window.open(card.githubUrl, "_blank")}>
					GitHub
				</StyledButton>
				<StyledButton onClick={() => window.open(card.linkedinUrl, "_blank")}>
					Linkedin
				</StyledButton>
			</span>
			<ToastContainer />
		</StyledContainer>
	)
}

export default Card

const StyledContainer = styled(Container)`
	align-items: start;
	padding: 40px;
	h1 {
		font-size: 45px;
		font-weight: 700;
		margin: 50px 0 30px 0;
	}
	h2 {
		font-size: 19px;
	}
	span {
		display: flex;
		gap: 15px;
	}
`

const StyledButton = styled(Button)`
	min-width: 130px;
	margin-top: 30px;
	@media (max-width: 568px) {
		min-width: 90px;
	}
`
