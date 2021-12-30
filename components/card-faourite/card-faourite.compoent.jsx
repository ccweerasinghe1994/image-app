import CardHeader from "../card-header/card-header.component";
import CardFooter from "../card-footer/card-footer.component";
import RemoveFavorite from "../remove-favorite/remove-favorite.component";
import FavoriteCardBody from "../fav-card-body/favoutite-card-body.component";

const FavoriteCard = (props)=>{
    const {
        handleLike,
        profile_image,
        tags = "#test#test#test",
        description,
        likes = 32,
        username,
        handleRemove,
        id
    } = props;

    return(
        <div className={"card"} >
            <CardHeader profile_image={profile_image} username={username}/>
            <FavoriteCardBody {...props}/>
            <RemoveFavorite handleRemove={handleRemove} id={id}/>
            <CardFooter description={description} likes={likes} tags={tags}/>
        </div>
    )
}

export default FavoriteCard;