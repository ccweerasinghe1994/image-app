import Image from "next/image";
import CardHeader from "./card-header.component";
import CardFooter from "./card-footer.component";
import CardBody from "./card-body.component";

const Card = (props) => {
    const {
        handleLike,
        profile_image,
        tags = "#test#test#test",
        description,
        likes = 32,
        username,
    } = props
    return (
        <div className="card">
            <CardHeader profile_image={profile_image} username={username}/>
            <CardBody handleLike={handleLike} {...props} />
            <CardFooter description={description} likes={likes} tags={tags}/>

        </div>
    )
}


export default Card;