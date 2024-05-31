import { LuConstruction } from "react-icons/lu";

export default function Construction() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2 p-11">
                <LuConstruction className="text-[70px] sm:text-[100px] text-[rgb(185,184,184)]"/>
                <h1 className="text-2xl font-bold text-pink whitespace-nowrap sm:text-4xl">COMING SOON</h1>
                <h2 className="text-xl sm:text-2xl font-light text-[rgb(185,184,184)] whitespace-nowrap">My website is under construction</h2>
            </div>
        </div>
    );
}
