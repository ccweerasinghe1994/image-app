const CustomButton = ({children, handleClick,id}) => (
    <button className={"btn-text"} onClick={()=>handleClick(id)} >{children}</button>
)

export default CustomButton;