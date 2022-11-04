import styled from "styled-components"

const InputWrapper = ({ children, info }) => {
	return (
		<Wrapper>
			{info ? <InputInfo>{info}</InputInfo> : null}
			{children}
		</Wrapper>
	)
}

export default InputWrapper

const Wrapper = styled.div`
	display: flex;
	margin-bottom: 20px;
`
export const InputInfo = styled.div`
	min-width: 200px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #c5c2c2;
	border-radius: 10px 0 0 10px;
	background-color: lightgray;
	color: #808080;

	@media (max-width: 568px) {
		min-width: 100px;
		height: 50px;
	}
`
