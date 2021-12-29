import CustomButton from "../button/custom-button.component";



const RemoveFavourite = (props) => {
    const {handleRemove, id} = props;

    return (
        <>
            <CustomButton id={id} handleClick={handleRemove}>Remove favorite</CustomButton>
        </>
    )
}

export default RemoveFavourite;