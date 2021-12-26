import '../styles/globals.scss'
import NavBar from "../components/nav-bar";

function MyApp({ Component, pageProps }) {
  return <div>
    <Component {...pageProps} />
    <NavBar/>
  </div>
}

export default MyApp
