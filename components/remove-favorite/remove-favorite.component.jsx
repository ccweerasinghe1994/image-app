import CustomButton from "../button/custom-button.component";
import {useContext} from "react";
import {StoreContext} from "../../store/store-context";



const RemoveFavorite = (props) => {
    const {state} = useContext(StoreContext);
    const {remove_button_text} = state
    const {handleRemove, id} = props;

    return (
        <>
            <CustomButton id={id} handleClick={handleRemove}>{remove_button_text.id===id?remove_button_text.text:"Remove Favourites"}</CustomButton>
        </>
    )
}

export default RemoveFavorite;