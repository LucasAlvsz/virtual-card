import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Card from "../pages/Card"
import Generate from "../pages/Generate"
import QrCodeComponent from "../pages/QrCodeComponent"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/generate" />} />
				<Route path="/generate" element={<Generate />} />
				<Route path="generate/card/new" element={<QrCodeComponent />} />
				<Route path="/card/:id" element={<Card />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
