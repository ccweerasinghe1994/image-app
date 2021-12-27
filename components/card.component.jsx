import Image from "next/image";

const Card = (props) => {
    const {
        handleLike,
        profile_image,
        small,
        tags = "#test#test#test",
        description,
        likes = 32,
        username,
        imageUrl = "https://images.unsplash.com/photo-1640521515233-f1fa3f600e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    } = props
    return (
        <div className="card">
            <div className="card__header">
                <div className="image-wrapper">
                    <Image className="card__header-image" src={profile_image.medium || null} width={40} height={40}
                           alt={"profile image"}/>
                </div>
                <div className="card__header-name"><a>{username || null}</a></div>
            </div>
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
                        <button onClick={() => handleLike({...props,handleLike:null})}>
                            <Image src={'/static/icons/like.svg'} width={32} height={32} alt={"like button"}/>
                        </button>
                    </div>
                </div>
            </div>

            <div className="card__footer">
                <div className="card__footer-likes">
                    <div className="card__footer-likes-icon">
                        <Image className={"card__footer-likes-icon-heart"} src={"/static/icons/like.svg"} height={20}
                               width={20} alt={"like icons"}/>

                    </div>
                    <div className="card__footer-likes-text">
                        {likes || null} likes
                    </div>

                </div>
                <p className="card__footer-text">
                    {description || " Lorem ipsum dolor sit, amet consectetur adipisicing "}
                </p>
                <div className="card__footer-tags">
                    <a href="#">
                        {tags || null}
                    </a>
                </div>
                <div className="card__footer-comments">
                    view 12 comments
                </div>
            </div>
        </div>
    )
}



export default Card;