import '../styles/globals.scss'
import NavBar from "../components/nav-bar";

function MyApp({ Component, pageProps }) {
  return <div>
    <NavBar/>
    <Component {...pageProps} />

  </div>
}

export default MyApp
