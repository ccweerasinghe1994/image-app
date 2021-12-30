import '../styles/globals.scss'
import NavBar from "../components/nav-bar/nav-bar";
import {StoreProvider} from "../store/store-context";






function MyApp({Component, pageProps}) {
    return <StoreProvider>
        <NavBar/>
        <Component {...pageProps} />

    </StoreProvider>
}

export default MyApp
