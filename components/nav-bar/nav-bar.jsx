import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import {useState} from "react";

const NavBar = () => {
    const [routeLocation, setRouteLocation] = useState("home")
    const handleClick = (path) => {
        setRouteLocation(path)
        console.log("im clicked", path)
    }

    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <div className="navbar-nav__link">
                    <Link href="/">
                        <a onClick={() => handleClick("home")}>
                            <div className="navbar-nav__link-wrapper">
                                <Image
                                    src={routeLocation === "home" ? `/static/icons/home-visited.svg` : `/static/icons/home.svg`}
                                    height={32} width={32} alt={"home icon"}/>
                                <div className="navbar-nav__link-text">Home</div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="navbar-nav__link">
                    <Link href="/favourites">
                        <a onClick={() => handleClick("favourites")}>
                            <div className="navbar-nav__link-wrapper">

                                <Image className={"navbar-nav__link-image"}
                                       src={routeLocation === "favourites" ? `/static/icons/nav-like-visited.svg`:`/static/icons/nav-like.svg`}
                                       height={32} width={32} alt={"favourites icon"}/>


                                <div className="navbar-nav__link-text">Favourites</div>
                            </div>

                        </a>
                    </Link>
                </div>
            </div>


        </nav>
    )

}
export default NavBar;