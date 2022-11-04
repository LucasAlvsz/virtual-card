import { CardProvider } from "./CardContext"

const AppProvider = ({ children }) => {
	return <CardProvider>{children}</CardProvider>
}

export default AppProvider
