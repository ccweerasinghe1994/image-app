const RemoveFavourite = (props)=>{
    const {handleRemove,id}  = props;

    return(
        <>
        <button onClick={()=>handleRemove(id)} >Remove favorite</button>
        </>
    )
}

export default RemoveFavourite;