import AnimatedImage from '@/components/ui/AnimatedImage';
import { Button, Spacer } from '@nextui-org/react';
import avatar from '@/assets/avatar_v2.jpg'
import { Variants } from 'framer-motion';
import Social from '@/components/ui/Social';
import {motion} from "framer-motion";
import { IoMdDownload } from "react-icons/io";

// const fadeInScaleVariant: Variants = {
//   initial: { opacity: 0, scale: 0.8 },
//   animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 2, ease: "linear" } }
// };

const slideInLeftVariant: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "linear"} },
  hover: { rotate: 360, transition: {duration: 1, ease: "easeInOut"} },
  tap: {rotate: 360, transition: {duration: 1, ease: "easeInOut"}}
};


export default function Home(): JSX.Element {
    return (
        <div className="h-[calc(100vh-4rem)]">
            <Spacer y={20}/>
            <section className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-evenly gap-4 xl:gap-0 xl:pt-24 xl:pb-24">
                    <div className="text-center xl:text-left mt-1 xl:mt-0 order-2 xl:order-none">
                        <h1 className="text-[28px] sm:text-[48px] leading-[1.1] xl:text-[80px] font-semibold mb-6">
                            Hi there! <br/> <Spacer y={2} /> I'm <span className="text-primary"> Arafet BenKilani </span>
                        </h1>
                        <p className="text-sm sm:text-lg max-w-[650px] text-secondary/80">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem vitae necessitatibus nostrum quis, 
                            magnam praesentium nam modi vel nemo nobis at dolorem maxime quae reprehenderit harum, commodi sapiente ut porro!
                        </p>
                        <Spacer y={8}/>
                        <motion.div 
                            className='flex flex-col xl:flex-row items-center gap-8'
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration: 0.4, delay: 1, ease : "easeInOut"}}}
                        >
                            <Button 
                                variant='bordered' 
                                color='secondary' 
                                className='font-semibold'
                                endContent={<IoMdDownload size={15}/>}
                            >
                                Download CV
                            </Button>
                            <div className='flex sm:hidden'>
                                <Social containerStyles='flex gap-4' color='secondary'/>
                            </div>
                        </motion.div>                        
                    </div>
                    <AnimatedImage
                        imagevariants={slideInLeftVariant}
                        src={avatar}
                        alt='Arafet BenKilani'
                        radius='full'
                        isBlurred
                        className='order-1 xl:order-none border-4 border-primary w-[120px] xl:w-[270px] mb-2 xl:mb-0'
                    />
                </div>
            </section>
        </div>
    );
}
