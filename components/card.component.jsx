import Image from "next/image";

const Card = ({tags="#test#test#test",description=" Lorem ipsum dolor sit, amet consectetur adipisicing elit.\n" +
"                Repellat impedit",likes=32,userName="chamara",imageUrl="https://images.unsplash.com/photo-1640521515233-f1fa3f600e31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"})=>(
    <div className="card">
        <div className="card__header">
            <div className="image-wrapper">
                <Image  className="card__header-image" src={"/static/images/test-user.jpg"} width={40} height={40} alt={"profile image"} />
            </div>
            <div className="card__header-name"><a>{userName}</a></div>
        </div>
        <div className="card__image">
            <Image  src={imageUrl} width={640} height={960}  layout={"responsive"} alt={"card image"}/>
        </div>
        <div className="card__footer">
            <div className="card__footer-likes">
                <div className="card__footer-likes-icon">
                    <Image src={"/static/icons/like.svg"} height={20} width={20} alt={"like icons"}/>
                </div>
                <div className="card__footer-likes-text">
                    {likes} likes
                </div>

               </div>
            <p className="card__footer-text">
                {description}
            </p>
            <div className="card__footer-tags">
                <a href="#">
                    {tags}
                </a>
            </div>
            <div className="card__footer-comments">
                view 12 comments
            </div>
        </div>
    </div>

)

export default Card;