import Image from 'next/image';

const Loader = () =>{
    return(
        <div className={'loader'}>
            <Image src={'/static/icons/loader.svg'} alt={"loading"} width={100} height={100}/>
        </div>
    )
}

export default Loader