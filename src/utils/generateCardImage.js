import { toPng } from "html-to-image"
import { toast } from "react-toastify"

const generateCardImage = HTMLElement => {
	console.log(HTMLElement)
	toPng(HTMLElement, { cacheBust: true })
		.then(dataUrl => {
			console.log(dataUrl)
			const link = document.createElement("a")
			link.download = "my-image-name.png"
			link.href = dataUrl
			link.click()
		})
		.catch(err => {
			console.log(err)
			toast.error("Something went wrong, please try again later")
		})
}

export default generateCardImage
