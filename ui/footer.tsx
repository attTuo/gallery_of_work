import Image from "next/image";

export default function FooterComponent(){

    return(
        <div>
            <footer className="footer footer-center p-1 bg-base-300 text-base-content flex-row rounded-lg">
                <div className="flex">
                    <Image 
                        className="block w-12 h-10 rounded-lg flex"
                        src="/../public/images/bunnyLogoSmall2.png"
                        alt="logo"
                        width={100} height={100}
                    />
                    <p className="flex">Copyright © 2023 - Design by Tiikasalo</p>
                </div>
            </footer>
        </div>
    );
}