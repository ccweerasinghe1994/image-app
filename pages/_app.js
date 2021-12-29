import '../styles/globals.scss'
import NavBar from "../components/nav-bar";
import {createContext, useReducer} from "react";


export const ACTION_TYPES = {
    ADD_FAVOURITE_IMAGE: `ADD_FAVOURITE_IMAGE`,
    SET_INITIAL_IMAGES: `SET_INITIAL_IMAGES`,
    UPDATE_INITIAL_IMAGES: `UPDATE_INITIAL_IMAGES`,
    UPDATE_INITIAL_IMAGES_LIKES_COUNT: `UPDATE_INITIAL_IMAGES_LIKES_COUNT`,
    GET_FAVOURITE_IMAGES:`GET_FAVOURITE_IMAGES`

}

const setImageReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.SET_INITIAL_IMAGES:
            return {
                ...state,
                initial_images: action.payload.map(data => ({...data, user_liked_image: false}))
            }
        case ACTION_TYPES.ADD_FAVOURITE_IMAGE:
            return {
                ...state,
                favourites: [...state.favourites, action.payload],

            }
        case ACTION_TYPES.UPDATE_INITIAL_IMAGES:
            return {
                ...state,
                initial_images: state.initial_images.map(image => {
                    if (action.payload === image.id && !image.user_liked_image) {
                        console.log("this is tru:action.payload === image.id && !image.user_liked_image")
                        return {
                            ...image,
                            user_liked_image: !image.user_liked_image,
                            likes: image.likes + 1

                        }
                    }
                    return image;
                })
            }

        case ACTION_TYPES.GET_FAVOURITE_IMAGES:

            return {

                ...state,
                favourites: [...state.favourites,]

            }
        default:
            throw new Error(`Unhandled action type${action.type}`)
    }
}

export const StoreContext = createContext();
const StoreProvider = ({children}) => {
    const initialState = {
        favourites: [],
        initial_images: [],
        updated_images: []
    }
    const [state, dispatch] = useReducer(setImageReducer, initialState)
    return (<StoreContext.Provider value={{state, dispatch}}>
        {children}
    </StoreContext.Provider>)
}


function MyApp({Component, pageProps}) {
    return <StoreProvider>
        <NavBar/>
        <Component {...pageProps} />

    </StoreProvider>
}

export default MyApp
