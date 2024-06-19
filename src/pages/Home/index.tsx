import { useLayoutEffect } from 'react';

export default function Home(): JSX.Element {

    useLayoutEffect(()=>{
        document.title = "Home | Arafet Techworld"
    },[])

    return (
        <main className="min-h-[calc(100vh-4rem)] flex flex-col">
            {/* <section className='h-[calc(100vh-4rem)] w-full xl:w-[1230px] mx-auto border'>

            </section> */}
        </main>
    );
}
