import QRCode from "react-qr-code"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef } from "react"
import { ToastContainer, toast } from "react-toastify"

import { CardContext } from "../../contexts/CardContext"
import generateCardImage from "../../utils/generateCardImage"
import BubbleLoading from "../../components/BubbleLoading"

const QrCodeComponent = () => {
	const ref = useRef()
	const navigate = useNavigate()
	const { newCardData } = useContext(CardContext)

	const handleError = () => {
		toast.error("Something went wrong, please try again later, redirecting ...")
		setTimeout(() => {
			navigate("/generate")
		}, 3000)
	}

	useEffect(() => {
		if (newCardData) {
			generateCardImage(ref.current)
				.then(dataUrl => {
					const link = document.createElement("a")
					link.download = "my-image-name.png"
					link.href = dataUrl
					link.click()
					navigate("/generate")
				})
				.catch(err => handleError())
		} else handleError()
	}, [ref])

	return (
		<>
			<Wrapper>
				<h1>Generating Virtual Card</h1>
				<BubbleLoading type="bubbles" color="#000" />
			</Wrapper>
			<Container ref={ref}>
				<h1>{newCardData?.name}</h1>
				<h1>Scan Me</h1>
				<QRCode
					style={{ margin: "40px" }}
					value={import.meta.env.VITE_BASE_URL + "/card/" + newCardData?.cardId}
				/>
			</Container>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</>
	)
}

export default QrCodeComponent

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	h1 {
		font-size: 30px;
		margin-top: 70px;
		&:nth-child(2) {
			margin-top: 150px;
		}
	}
`

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
`
