import '../styles/main.css'
import { Layout } from '../components/index'

export default function MyApp({ Component, pageProps }) {
	return <Layout><Component {...pageProps} /></Layout>
}
