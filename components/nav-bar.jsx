import Link from "next/link";
import Image from "next/image";

const NavBar = ()=>(
    <nav className="navbar">
        <div className="navbar-nav">
            <div className="navbar-nav__link">
                <Link href="/">
                    <a>
                        <Image src={"/static/icons/home.svg"} height={32} width={32} alt={"home icon"}/>
                    </a>
                </Link>
            </div>
            <div className="navbar-nav__link">
                <Link href="/favourites">
                    <a>
                        <Image src={"/static/icons/like.svg"} height={32} width={32} alt={"favourites icon"}/>
                    </a>
                </Link>
            </div>
        </div>


    </nav>
)

export default NavBar;