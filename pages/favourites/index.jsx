import {useRouter} from 'next/router'
import {useContext, useEffect, useState} from "react";
import Card from "../../components/card-home-page.component";
import FavouriteCard from "../../components/card-faourite/card-faourite.compoent";
import Loader from "../../components/loader.component";
import {ACTION_TYPES, StoreContext} from "../_app";

const Favourites = () => {
    const [images, setImages] = useState([]);
    const [lording, setLording] = useState(true);
    const {dispatch} = useContext(StoreContext);

    useEffect(() => {
        const getImages = async () => {
            const images_response = await fetch("/api/get-favourite-images");
            const images = await images_response.json();
            setImages(images);
            setLording(false)
        }
        getImages();


    }, []);

    const deleteFavourite = async (id) => {
        try {
            dispatch({
                type:ACTION_TYPES.REMOVE_FAVOURITE_BUTTON_TEXT,
                payload:{
                    id,
                    text:"deleting ..."
                }
            })
            const response = await fetch("/api/delete-favourite", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id
                }),
            });
            const data = await response.json();
            if (data) {
                const newImages = images.filter(image => image.id !== id);
                setImages(newImages)
                console.log(data.id)
            }


        } catch (error) {
            console.log(error)
        }
    }

    return (

        <div className={"favourites-container"}>
            {

                lording ? <Loader/> : (

                    <div className="card-layout">
                        {images.length > 0 ? images.map(data => (
                            <FavouriteCard handleRemove={deleteFavourite} key={data.id} {...data} />)):(<h1 className={"favourite-empty-message"} >Your Favourites are empty add some favourites</h1>)

                        }

                    </div>
                )
            }


        </div>
    )
}

export default Favourites;