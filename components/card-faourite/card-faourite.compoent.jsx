import CardHeader from "../card-header.component";
import CardFooter from "../card-footer.component";
import CardBody from "../card-body.component";
import RemoveFavourite from "../remove-favourite/remove-favourite.component";

const FavouriteCard = (props)=>{
    const {
        handleLike,
        profile_image,
        tags = "#test#test#test",
        description,
        likes = 32,
        username,
    } = props
    return(
        <div className={"card"} >
            <CardHeader profile_image={profile_image} username={username}/>
            <CardBody {...props}/>
            <RemoveFavourite/>
            <CardFooter description={description} likes={likes} tags={tags}/>
        </div>
    )
}

export default FavouriteCard;