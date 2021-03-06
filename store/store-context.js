import {createContext,useReducer} from 'react'

export const ACTION_TYPES = {
    ADD_FAVOURITE_IMAGE: `ADD_FAVOURITE_IMAGE`,
    SET_INITIAL_IMAGES: `SET_INITIAL_IMAGES`,
    UPDATE_INITIAL_IMAGES: `UPDATE_INITIAL_IMAGES`,
    UPDATE_INITIAL_IMAGES_LIKES_COUNT: `UPDATE_INITIAL_IMAGES_LIKES_COUNT`,
    GET_FAVOURITE_IMAGES:`GET_FAVOURITE_IMAGES`,
    REMOVE_FAVOURITE_BUTTON_TEXT:`REMOVE_FAVOURITE_BUTTON_TEXT`

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

        case ACTION_TYPES.REMOVE_FAVOURITE_BUTTON_TEXT:
            return {
                ...state,
                remove_button_text:action.payload
            }
        default:
            throw new Error(`Unhandled action type${action.type}`)
    }
}

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
    const initialState = {
        favourites: [],
        initial_images: [],
        updated_images: [],
        remove_button_text:{
            id:"",
            text:"Remove favorite"
        }
    }
    const [state, dispatch] = useReducer(setImageReducer, initialState)
    return (<StoreContext.Provider value={{state, dispatch}}>
        {children}
    </StoreContext.Provider>)
}

