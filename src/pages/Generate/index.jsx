import * as S from "./styles"

const Generate = () => {
	return (
		<S.Container>
			<h1>QR Code Image Generator</h1>
			<S.Form>
				<S.Wrapper>
					<S.InputInfo>Name</S.InputInfo>
					<input type="text" placeholder="Enter text here" />
				</S.Wrapper>
				<S.Wrapper>
					<S.InputInfo>Name</S.InputInfo>
					<input type="text" placeholder="Enter text here" />
				</S.Wrapper>
				<S.Wrapper>
					<S.InputInfo>Name</S.InputInfo>
					<input type="text" placeholder="Enter text here" />
				</S.Wrapper>
				<button>Generate Image</button>
			</S.Form>
		</S.Container>
	)
}

export default Generate
