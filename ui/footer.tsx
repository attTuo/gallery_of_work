import Image from "next/image";

export default function FooterComponent(){

    return(
        <div>
            <footer className="footer footer-center p-1 bg-yellow-200 text-base-content flex-row rounded-lg">
                <div className="flex">
                    <Image 
                        className="block w-12 h-10 rounded-lg flex"
                        src="/../public/images/other/bunnyLogoSmall2.png"
                        alt="logo"
                        width={100} height={100}
                    />
                    <p className="flex">Copyright © 2023 - Design by Tiikasalo</p>
                </div>
            </footer>
        </div>
    );
}