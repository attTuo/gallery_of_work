import Image from "next/image";

export default async function AboutPage(){

    return(
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4 ">
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:py-4 bg-slate-300 rounded-lg text-center">
                <Image 
                    className="rounded-lg object-cover object-center w-64 mx-auto"
                    src="/../public/images/bunny2.jpg" 
                    alt="aboutPicture" 
                    width={1000} height={1000}
                />
                <p className="text-4xl my-4">About me</p>
                <p className="text-md">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p className="text-4xl my-4">Contact</p>
                <p>contact froms here...</p>
            </div>
        </div>        
    );
}