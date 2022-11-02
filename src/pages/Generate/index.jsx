import { useState } from "react"
import ReactLoading from "react-loading"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useForm } from "../../hooks"
import cardApi from "../../services/cardApi"

import InputWrapper from "../../components/InputWrapper"
import * as S from "./styles"

const Generate = () => {
	const [form, handleForm] = useForm()
	const [loading, setLoading] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		cardApi
			.createCard(form)
			.then(res => {
				setLoading(false)
			})
			.catch(err => {
				setLoading(false)
				toast.error("Something went wrong, please try again later")
			})
	}

	return (
		<S.Container>
			<h1>QR Code Image Generator</h1>
			<S.Form onSubmit={handleSubmit} Loading={loading}>
				<InputWrapper info="Name">
					<input
						name="name"
						onChange={handleForm}
						required
						type="text"
						placeholder="Enter text here"
					/>
				</InputWrapper>
				<InputWrapper info="Linkedin URL">
					<input
						name="linkedinUrl"
						onChange={handleForm}
						pattern="\w+:(\/?\/?)[^\s]+"
						required
						type="text"
						placeholder="Enter text here"
					/>
				</InputWrapper>
				<InputWrapper info="GitHub URL">
					<input
						name="githubUrl"
						onChange={handleForm}
						pattern="\w+:(\/?\/?)[^\s]+"
						required
						type="text"
						placeholder="Enter text here"
					/>
				</InputWrapper>
				<S.Button>
					{loading ? <ReactLoading type="bubbles" color="#000" /> : "Generate Image"}
				</S.Button>
			</S.Form>
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
		</S.Container>
	)
}

export default Generate
