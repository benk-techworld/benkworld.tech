import {Spacer} from "@nextui-org/react";

export default function Home(): JSX.Element {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <Spacer y={32}/>
            <section className="flex flex-col items-center w-full" >
                <div className="relative group flex items-center justify-center">
                    <div className="absolute w-44 h-44 rounded-full bg-primary-600 opacity-10 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="absolute w-40 h-40 rounded-full bg-primary-600 opacity-15 group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="border-4 border-primary-600 relative w-36 h-36 rounded-full overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        <img src="avatar.jpg" alt="Adrian Cantrill" className="w-full h-full object-cover" />
                    </div>
                </div>
            </section>                                                                  
        </div>
    )
}