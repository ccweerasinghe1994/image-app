import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import Card from "../../components/card-home-page.component";
import FavouriteCard from "../../components/card-faourite/card-faourite.compoent";
import Loader from "../../components/loader.component";

const Favourites = () => {
    const [images, setImages] = useState([]);
    const [lording, setLording] = useState(true);

    const router = useRouter();
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
        console.log("favourite deleted:", id);
        try {
            const response = await fetch("/api/delete-favourite", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id
                }),
            });
            const {message} = await response.json();
            const newImages = images.filter(image=>image.id!==id);
            setImages(newImages);
            console.log("response.json()",newImages)
        } catch (error) {
            console.log(error)
        }
    }
    console.log("lording", lording)
    return (

        <div className={"favourites-container"}>
            {
                lording ? <Loader/> : (

                    <div className="card-layout">
                        {images.length > 0 && images.map(data => (
                            <FavouriteCard handleRemove={deleteFavourite} key={data.id} {...data} />))}
                        {/*{images.length > 0 && images.map(data => (<Card key={data.id} {...data} />))}*/}
                    </div>
                )
            }


        </div>
    )
}

export default Favourites;