import { toPng } from "html-to-image"

const generateCardImage = HTMLElement => {
	return toPng(HTMLElement, { cacheBust: true })
}

export default generateCardImage
