import { createContext, useState } from "react"

export const CardContext = createContext()

export const CardProvider = ({ children }) => {
	const [newCardData, setNewCardData] = useState(null)
	return (
		<CardContext.Provider value={{ newCardData, setNewCardData }}>
			{children}
		</CardContext.Provider>
	)
}
