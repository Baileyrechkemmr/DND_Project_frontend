import '../styles/globals.css'
import Context from '../context/context'
import Layout from '../components/layout'
// Wrap our function in the Context Provider which will share state between pages
function MyApp({ Component, pageProps }) {
	return (
		<Context>
			<Layout {...pageProps} />
			<Component {...pageProps} />
		</Context>
	)
}

export default MyApp
