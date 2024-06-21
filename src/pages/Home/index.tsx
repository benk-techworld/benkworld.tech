import { useLayoutEffect } from 'react';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { Variants } from 'framer-motion';
import avatar from '@/assets/avatar_v2.jpg'
import { Icon } from '@iconify/react';
import { Button } from '@nextui-org/react';
import {motion, AnimatePresence} from 'framer-motion'

const bounceVariants: Variants = {
  initial: { opacity:0, y: 0 },
  animate: {
    opacity:1,
    y: [0, -40, 0, -30, 0, -20, 0, -10, 0,-5,0], // keyframes for bouncing
    transition: {
      duration: 2,
      ease: 'linear',
      delay: 2
    }
  },
  hover: {
    scale: 1.2, // scale up on hover
    transition: { duration: 0.4 },
  }  
};

export default function Home(): JSX.Element {

    useLayoutEffect(()=>{
        document.title = "Home | Arafet Techworld"
    },[])

    return (
        <div>
            <section className='container flex flex-col items-center justify-center text-center gap-3 mt-12'>
                <AnimatedImage
                    motionvariants={bounceVariants}
                    motionTransition={{duration: 0.4}}
                    src={avatar}
                    alt='Arafet BenKilani'
                    radius='full'
                    className='border-4 border-primary w-[100px] md:w-[130px] xl:w-[170px]'
                />  
                <h2 className='mt-4 font-base text-foreground/80 text-md sm:text-xl md:text-2xl xl:text-3xl'>
                    Hi there! <br/> I'm <span className='text-primary font-semibold'>Arafet BenKilani</span>
                    <Icon icon="noto:waving-hand" className='inline-block ml-1 size-[1.5rem] sm:size-[1.8rem] md:size-[2.1rem] xl:size-[2.5rem]'/>
                </h2>
                <h1 className='uppercase font-bold tracking-lighter leading-[0.9] text-3xl sm:text-5xl md:text-6xl xl:text-8xl'>
                    Cloud <br/> DevSecOps Engineer.
                </h1>
                <p className='max-w-[60ch] font-normal text-foreground/90 text-sm sm:text-md md:text-lg xl:text-xl'>
                    My main focus is on <strong>Cloud, Security, DevOps</strong> and other emerging technical areas. If you want me on your team or need assistance with your project, 
                    please feel free to contact me!
                </p>
                <div className='mt-5 flex items-center gap-3'>
                    <Button variant='bordered' radius='sm' className='text-foreground border-foreground/80 font-semibold'>Download CV</Button>
                    <Button variant='shadow' radius='sm' className='text-background bg-foreground font-semibold'>Reach Out</Button>
                    <AnimatePresence>
                        <motion.div
                            initial={{x: 0}}
                            animate = {{
                                x : [10,-5,10],
                                transition : {
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType : 'mirror',
                                    ease : "easeInOut"
                                }
                            }}
                        >
                            <Icon icon="f7:hand-point-left-fill" className='text-foreground size-[1.5rem]' />
                        </motion.div>
                    </AnimatePresence>
                </div>              
            </section>
        </div>
    );
}
