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
                <div className="flex flex-col items-center px-2 mt-14 text-center animate-slidein">
                    <h1 className="text-3xl md:text-4xl font-normal">Hi there!</h1>
                    <p className="w-full md:w-2/3 lg:w-1/2 text-foreground-700 text-base lg:text-lg mt-6 font-roboto font-light typing">
                        My name is Arafet Ben Kilani, a recent DevSecOps engineering graduate from Tunisia. 
                        I specialize in Cloud, Security, DevOps, and other emerging technologies. 
                    </p>
                </div>
            </section>                                                                  
        </div>
    )
}