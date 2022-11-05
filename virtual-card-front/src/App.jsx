import AppProvider from "./contexts"
import GlobalStyles from "./GlobalStyles"
import Router from "./Router"

const App = () => {
	return (
		<AppProvider>
			<GlobalStyles />
			<Router />
		</AppProvider>
	)
}

export default App
