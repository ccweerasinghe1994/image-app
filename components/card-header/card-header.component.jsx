import Image from "next/image";

const CardHeader = ({profile_image,username})=>(
    <div className="card__header">
        <div className="image-wrapper">
            <Image className="card__header-image" src={profile_image.medium || profile_image} width={40} height={40}
                   alt={"profile image"}/>
        </div>
        <div className="card__header-name"><a>{username || null}</a></div>
    </div>
)

export default CardHeader;