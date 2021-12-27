import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import Card from "../../components/card.component";

const Favourites = () => {
    const [images, setImages] = useState([]);
    const router = useRouter();
    useEffect(async () => {

        const images_response = await fetch("/api/get-favourite-images");
        const images = await images_response.json();
        setImages(images);

    }, []);



    return (
        <div className={"favourites-container"} >
            <div className="card-layout">
                {images.length > 0 && images.map(data => (<Card key={data.id} {...data} />))}
            </div>
        </div>
    )
}

export default Favourites;