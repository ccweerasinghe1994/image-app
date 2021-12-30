import {createApi} from "unsplash-js"

export const fetchImages = async () => {


    const unsplash = createApi({
        accessKey: process.env.UNSPLASH_API_KEY
    })



    try {
        const data = await unsplash.photos.getRandom({
            count: 12
        });

        const {response} = await data;

        return response.map(({
                                 width,
                                 height,
                                 color,
                                 description,
                                 id,
                                 urls: {small, regular, full},
                                 likes,
                                 user: {username, profile_image}
                             }) => {
            return {
                id,
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

    } catch (error) {
        console.log("error======================================", error);
    }


}