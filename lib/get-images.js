import {createApi} from "unsplash-js"

export const fetchImages = async () => {


    const unsplash = createApi({
        accessKey: process.env.UNSPLASH_API_KEY
    })

    const {response} = await unsplash.photos.getRandom({
        count: 100
    });
    console.log("---------------------------------------------------------")

    return response.map(({width,height,color,description,id,urls:{small,regular,full},likes,user:{username,profile_image}})=>{
        return{
            id,
            width,
            height,
            color,
            description,
            likes,
            small,
            regular,
            full,
            username,
            profile_image

        }
    });


}