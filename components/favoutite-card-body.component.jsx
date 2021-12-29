import Image from "next/image";

const FavouriteCardBody = (props) => {
    const {small, user_liked_image} = props;
    console.log("user_liked_image", user_liked_image)
    return (
        <div className={"card__image-and-text-container"}>
            <div className="card__image">
                <Image src={small || null} width={640} height={960} layout={"responsive"} alt={"card image"}/>
            </div>

            <div className="card-image-text-wrapper">
                <div className="card-image-text">
                    <div className="card-image-text-description">some description</div>
                    <div className="card-image-text-price">$34</div>
                </div>
                <div className="card-image-text-like-button">
                    <button>
                        <Image src={"/static/icons/like.svg"} width={32} height={32} alt={"like button"}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FavouriteCardBody;