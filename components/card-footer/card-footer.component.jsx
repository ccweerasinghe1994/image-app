import Image from "next/image";

const CardFooter = ({likes,description,tags}) => (
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
);

export default CardFooter;