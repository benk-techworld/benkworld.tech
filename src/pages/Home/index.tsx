import {Spacer} from "@nextui-org/react";

export default function Home(): JSX.Element {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Spacer y={20}/>
            <section className="flex flex-col items-center w-full" >
                <div className="relative group flex items-center justify-center">
                    <div className="absolute w-44 h-44 rounded-full bg-primary-600 opacity-10 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute w-40 h-40 rounded-full bg-primary-600 opacity-15 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="border-4 border-primary-600 relative w-36 h-36 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        <img src="avatar.jpg" alt="Adrian Cantrill" className="w-full h-full object-cover" />
                    </div>
                </div> 
                <div className="mt-8 px-4 flex flex-col items-center text-center">
                    <h1 className="text-3xl md:text-4xl">Hi there!</h1>
                    <p className="sm:w-3/4 sm:5/6 md:w-3/4 lg:w-1/2 mt-4 text-foreground text-sm md:text-md lg:text-lg font-roboto font-normal">
                        My name is Arafet Ben Kilani, a recent DevSecOps engineering graduate from Tunisia. 
                        I specialize in Cloud, Security, DevOps, and other emerging technologies. If I can assist you in any way, please don't hesitate to contact me.
                    </p>
                </div>
            </section>                                                                  
        </div>
    )
}