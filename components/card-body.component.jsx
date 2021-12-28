import Image from "next/image";

const CardBody = (props) => {
    const {small, handleLike} = props;
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
                    <button onClick={() => handleLike({...props, handleLike: null})}>
                        <Image src={'/static/icons/like.svg'} width={32} height={32} alt={"like button"}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardBody;