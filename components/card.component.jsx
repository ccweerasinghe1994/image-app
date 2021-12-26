import Image from "next/image";

const Card = ()=>(
    <div className="card">
        <div className="card__header">
            <div className="image-wrapper">
                <Image  className="card__header-image" src={"/static/images/test-user.jpg"} width={40} height={40} alt={"profile image"} />
            </div>
            <div className="card__header-name"><a>chamara</a></div>
        </div>
        <div className="card__image">
            <Image  src={"/static/images/baby.jpg"} width={640} height={960}  layout={"responsive"} alt={"card image"}/>
        </div>
        <div className="card__footer">
            <div className="card__footer-likes">
                <Image src={"/static/icons/like.svg"} height={20} width={20} alt={"like icons"}/>
                32 likes</div>
            <p className="card__footer-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat impedit
            </p>
            <div className="card_footer-tags">
                <a href="#">
                    #test#test#test
                </a>
            </div>
        </div>
    </div>

)

export default Card;