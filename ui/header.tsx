import Link from "next/link";
import Image from "next/image";

export default function HeaderComponent(){

    return(
        <div className="navbar text-primary-content rounded-lg bg-yellow-200">
            <div className="flex-1">
                <Image 
                    className="hidden sm:block w-16 h-12"
                    src="/images/other/bunnyLogoSmall.png"
                    alt="logo"
                    width={100} height={100}
                />                
                <Link href="/" className="btn btn-ghost normal-case text-sm sm:text-xl">Design By Tiikasalo</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <a>
                            Works
                            <svg className="fill-current" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                        <li>
                            <Link
                                href="/cups"
                            >Ceramic cups</Link>
                        </li>
                        <li>
                            <Link
                                href="/jewelry"
                            >Jewelry</Link>
                        </li>
                        <li>
                            <Link
                                href="/artwork"
                            >Artwork</Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                            >Interior Design</Link>
                        </li>
                        <li>
                            <Link
                                href="/other"
                            >Other</Link>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <Link
                            href="/about"
                        >About</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}