import Image from "next/image";
import ContactComponent from "@/ui/contact";

export default async function AboutPage(){

    return(

        <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4 ">
            
            <div className="bg-slate-300 rounded-lg">
                <div className="hero-content flex-row">
                    <Image 
                        className="rounded-lg object-cover object-center w-1/2 max-h-96"
                        src="/../public/images/bunny2.jpg" 
                        alt="aboutPicture" 
                        width={1000} height={1000}
                    />
                    <div>
                        <h1 className="text-xl sm:2xl md:text-4xl font-bold">FirstnameLastname</h1>
                        <h1 className="text-md sm:xl md:text-2xl pb-2">Interior architect and furniture designer</h1>
                        <p>email@email.com</p>
                        <p>City, Country</p>
                        <button className="btn bg-blue-400 mt-4">Instagram</button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-5 py-2 lg:px-32 text-center pt-4 pb-6">
                <p className="text-4xl my-4">About me</p>
                <p className="text-md pb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p> 
            </div>
            
            <ContactComponent />

        </div>        
    );
}