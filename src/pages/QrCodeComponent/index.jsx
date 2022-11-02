import { useRef } from "react"
import QRCode from "react-qr-code"
import styled from "styled-components"

const QrCodeComponent = ({ name }) => {
	const ref = useRef()
	return (
		<Container ref={ref}>
			<h1>{name}</h1>
			<h1>Scan Me</h1>
			<QRCode style={{ margin: "40px" }} value="hey" />
		</Container>
	)
}

export default QrCodeComponent

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: 30px;
		margin-top: 70px;
		&:nth-child(2) {
			margin-top: 150px;
		}
	}
`
