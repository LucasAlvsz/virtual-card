import styled from "styled-components"

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	h1 {
		margin-bottom: 20px;
	}
`

export const Form = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	input {
		width: 100%;
		height: 50px;
		border: 1.5px solid #c5c2c2;
		border-left: 0;
		border-radius: 0 10px 10px 0;
		padding-left: 20px;
		font-size: 16px;
		font-weight: 500;
		background-color: ${({ Loading }) => (Loading ? "#ebe6e6;" : "#fff;")};
		cursor: ${({ Loading }) => (Loading ? "wait" : "text")};
	}
`

export const Button = styled.button`
	max-width: 500px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #000;
	border-radius: 10px;
	font-size: 20px;
	font-weight: 700;
	background-color: ${({ Loading }) => (Loading ? "#ebe6e6;" : "#fff;")};
	border-color: ${({ Loading }) => (Loading ? "#ebe6e6;" : "#000;")};
	cursor: ${({ Loading }) => (Loading ? "wait;" : "pointer;")};
`
