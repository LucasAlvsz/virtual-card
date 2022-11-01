import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Generate from "../pages/Generate"

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/generate" />} />
				<Route path="/generate" element={<Generate />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
