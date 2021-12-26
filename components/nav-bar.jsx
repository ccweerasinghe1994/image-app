import Link from "next/link";
import Image from "next/image";

const NavBar = ()=>(
    <nav className="navbar">
        <div className="navbar-nav">
            <div className="navbar-nav__link">
                <Link href="/">
                    <a>
                        <div className="navbar-nav__link-wrapper">
                            <Image src={"/static/icons/home.svg"} height={32} width={32} alt={"home icon"}/>
                            <div className="navbar-nav__link-text">Home</div>
                        </div>

                    </a>
                </Link>
            </div>
            <div className="navbar-nav__link">
                <Link href="/favourites">
                    <a>
                        <div className="navbar-nav__link-wrapper">

                                <Image className={"navbar-nav__link-image"} src={"/static/icons/like.svg"} height={32} width={32} alt={"favourites icon"}/>


                        <div className="navbar-nav__link-text">Favourites</div>
                        </div>

                    </a>
                </Link>
            </div>
        </div>


    </nav>
)

export default NavBar;