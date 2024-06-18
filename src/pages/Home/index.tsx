import AnimatedImage from '@/components/ui/AnimatedImage';
import { Button } from '@nextui-org/react';
import avatar from '@/assets/avatar_v2.jpg'
import { Variants } from 'framer-motion';
// import Social from '@/components/ui/Social';
import {motion} from 'framer-motion';
import { IoMdDownload } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useLayoutEffect } from 'react';
// import Stats from '@/components/ui/Stats';

// const fadeInScaleVariant: Variants = {
//   initial: { opacity: 0, scale: 0.8 },
//   animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 2, ease: "linear" } }
// };

const slideInLeftVariant: Variants = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "linear"} },
  hover: { rotate: 360, transition: {duration: 1, ease: "easeInOut"} },
  tap: {rotate: 360, transition: {duration: 1, ease: "easeInOut"}}
};


const shakeAnimation : Variants = {
    initial: { y: 0 },
    shake: {
        y: [0, -10, 10,-10 ,10, 0],
        transition: {
            delay: 2.4,
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};


export default function Home(): JSX.Element {

    useLayoutEffect(()=>{
        document.title = "Home | Arafet Techworld"
    },[])

    return (
        <main className="h-[calc(100vh-4rem)]">
            <section className="container h-full mx-auto">
                <div className="border w-full h-[42rem] flex flex-col xl:flex-row items-center justify-evenly py-24">
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <p className='font-light text-lg sm:text-2xl mb-2'>Hi there!</p>
                        <h1 className="font-light text-3xl sm:text-5xl leading-[1.3] sm:leading-[1.1] xl:text-[60px] mb-4">
                            I'm <span className="text-foreground font-bold"> Arafet BenKilani </span> <br/> 
                            a Cloud DevSecOps Engineer.
                        </h1>
                        <p className='font-light text-sm sm:text-lg max-w-[650px] text-foreground/90'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit dolores sapiente nam reiciendis dolorem eligendi, 
                            laboriosam asperiores blanditiis, accusamus, dicta nobis et sed numquam.
                        </p>
                        <motion.div 
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration: 0.4, delay: 2.4, ease : "easeInOut"}}}
                        >
                            <motion.div
                                initial="initial"
                                animate="shake"
                                variants={shakeAnimation}
                                className='flex gap-3 justify-center xl:justify-start'
                            >
                                <Button 
                                    size='md'
                                    className='bg-red-500 dark:bg-red-700 text-white font-bold'
                                    radius='sm'
                                    endContent={<IoMdDownload size={15}/>}
                    
                                >
                                    Download CV
                                </Button>
                                <Button 
                                    size='md'
                                    className='bg-foreground text-background font-bold'
                                    radius='sm'
                                    endContent={<FaArrowRight size={15}/>}
                                >
                                    Hire Me
                                </Button>                                
                            </motion.div>
                        </motion.div>                        
                    </div>
                    <div>
                        <AnimatedImage
                            motionvariants={slideInLeftVariant}
                            motionTransition={{duration: 1}}
                            src={avatar}
                            alt='Arafet BenKilani'
                            radius='full'
                            isBlurred
                            className='xl:order-none w-[120px] xl:w-[270px] mb-5 xl:mb-0'
                        />                       
                    </div>
                </div>
                {/* <Stats/> */}
            </section>
        </main>
    );
}
