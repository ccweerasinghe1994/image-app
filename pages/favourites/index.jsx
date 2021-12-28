import {useRouter} from 'next/router'
import {useEffect, useState} from "react";
import Card from "../../components/card-home-page.component";
import FavouriteCard from "../../components/card-faourite/card-faourite.compoent";

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
                {images.length > 0 && images.map(data => (<FavouriteCard key={data.id} {...data} />))}
                {/*{images.length > 0 && images.map(data => (<Card key={data.id} {...data} />))}*/}
            </div>
        </div>
    )
}

export default Favourites;