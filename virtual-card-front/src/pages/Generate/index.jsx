import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useForm } from "../../hooks"
import cardApi from "../../services/cardApi"
import { CardContext } from "../../contexts/CardContext"

import * as S from "./styles"
import InputWrapper from "../../components/InputWrapper"
import BubbleLoading from "../../components/BubbleLoading"

const Generate = () => {
	const navigate = useNavigate()
	const [form, handleForm] = useForm()
	const [loading, setLoading] = useState(false)
	const { setNewCardData } = useContext(CardContext)

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
		cardApi
			.createCard(form)
			.then(({ data }) => {
				setLoading(false)
				setNewCardData({ cardId: data.cardId, ...form })
				navigate("card/new")
			})
			.catch(err => {
				setLoading(false)
				console.error(err)
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

				<S.Button Loading={loading}>
					{loading ? <BubbleLoading /> : "Generate Image"}
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
