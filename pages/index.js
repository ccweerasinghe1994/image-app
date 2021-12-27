import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import Card from "../components/card.component";
import NavBar from "../components/nav-bar";
import {fetchImages} from "../lib/get-images";


export async function getStaticProps() {
    const data = await fetchImages();
    return {
        props: {
            photos: data
        }
    }
}

export default function Home({photos}) {


    const handleLikeButton =  async (data)=>{
        const profile_image = data.profile_image.small;

        try {
            const response = await fetch("/api/get-favourites",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    ...data,
                    profile_image
                }),
            });
            console.log(response.json());
        }catch (error){
            console.log("error",error)
        }
        console.log("liked",data)
    }
    console.log(photos)
    return (
        <div>
            <Head>
                <title>Image App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="main">
                <div className="card-layout">
                    {
                        photos.map((props) => <Card handleLike={handleLikeButton} key={props.id} {...props}   />)
                    }

                </div>

            </main>
        </div>
    );
}
