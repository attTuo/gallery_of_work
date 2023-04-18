import Image from "next/image";
import ContactComponent from "@/ui/contact";
import Link from "next/link";

export default async function AboutPage(){

    return(

        <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4 ">
            
            <div className="bg-slate-300 rounded-lg">
                <div className="hero-content flex-row">
                    <Image 
                        className="rounded-lg object-cover object-center w-1/2 lg:w-1/3 max-h-96"
                        src="/../public/images/other/profile.jpg" 
                        alt="aboutPicture" 
                        width={400} height={400}
                    />
                    <div>
                        <h1 className="text-xl sm:2xl md:text-4xl font-bold">Elisa Tiikasalo</h1>
                        <h1 className="text-md sm:xl md:text-2xl pb-2">Interior architect and furniture designer</h1>
                        <p>example@gmail.com</p>
                        <p>Lahti, Finland</p>
                        <Link href="https://www.instagram.com/elluza_art/" target="_blank" className="btn btn-primary mt-4">Instagram</Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 py-2 lg:px-32 text-center pt-4 pb-6">
                <p className="text-4xl my-4">About me</p>
                <p className="text-md pb-4">"Color brings smile to life and as a interior architect I want to bring out some of it in my projects. My goal is to create natural glimmers of color in my design plans, because without color life would be bleak!"</p> 
            </div>
            
            <ContactComponent />

        </div>        
    );
}