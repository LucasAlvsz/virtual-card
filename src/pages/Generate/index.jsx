import InputWrapper from "../../components/InputWrapper"
import * as S from "./styles"

const Generate = () => {
	return (
		<S.Container>
			<h1>QR Code Image Generator</h1>
			<S.Form>
				<InputWrapper info="Name">
					<input type="text" placeholder="Enter text here" />
				</InputWrapper>
				<InputWrapper info="Linkedin URL">
					<input type="text" placeholder="Enter text here" />
				</InputWrapper>
				<InputWrapper info="GitHub URL">
					<input type="text" placeholder="Enter text here" />
				</InputWrapper>
				<button>Generate Image</button>
			</S.Form>
		</S.Container>
	)
}

export default Generate
