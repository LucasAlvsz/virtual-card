import InputWrapper from "../../components/InputWrapper"
import useForm from "../../hooks/useForm"
import * as S from "./styles"

const Generate = () => {
	const [form, handleForm] = useForm()
	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<S.Container>
			<h1>QR Code Image Generator</h1>
			<S.Form onSubmit={handleSubmit}>
				<InputWrapper info="Name">
					<input
						name="name"
						onChange={handleForm}
						type="text"
						placeholder="Enter text here"
					/>
				</InputWrapper>
				<InputWrapper info="Linkedin URL">
					<input
						name="linkedinUrl"
						onChange={handleForm}
						type="text"
						placeholder="Enter text here"
					/>
				</InputWrapper>
				<InputWrapper info="GitHub URL">
					<input
						name="githubUrl"
						onChange={handleForm}
						type="text"
						placeholder="Enter text here"
					/>
				</InputWrapper>
				<button>Generate Image</button>
			</S.Form>
		</S.Container>
	)
}

export default Generate
