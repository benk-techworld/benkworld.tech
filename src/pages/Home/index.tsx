import { useLayoutEffect } from 'react';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { Variants } from 'framer-motion';
import avatar from '@/assets/avatar_v2.jpg'
import { Icon } from '@iconify/react';
import { Button, Spacer } from '@nextui-org/react';
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
        <div className='flex flex-col md:flex-row sm:items-center justify-evenly'>
            <section>
                <div className='flex flex-col gap-4 text-left px-6 py-8 xl:py-24'>
                    <h3 className='text-md sm:text-lg xl:text-xl 2xl:text-2xl text-foreground/70 font-semibold'>
                        Hello there!
                        <Icon icon="noto:waving-hand" className='inline-block ml-1 size-[1.3rem] xl:size-[2rem]'/>
                    </h3>
                    <div>
                        <h1 className='text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl'>
                            I'm <span className='font-bold text-focus'>Arafet BenKilani</span>
                        </h1>
                        <h2 className='uppercase text-xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-semibold'>Cloud DevSecOps Engineer</h2>
                    </div>
                    <p className='max-w-[60ch] text-sm sm:text-md xl:text-lg text-foreground/70 font-base'>
                        <span className='font-semibold text-md sm:text-lg xl:text-xl text-foreground-500'>
                            From Tunisia
                            <Icon icon="twemoji:flag-tunisia" className='inline-block size-[1.3rem] xl:size-[1.8rem] ml-2' />
                        </span>
                        <Spacer y={2}/>
                        My main focus is on <strong className='text-foreground/85'>Cloud, Security, DevOps</strong> and <strong className='text-foreground/85'>Software</strong> development. 
                        If you want me on your team or need assistance with a project of yours, 
                        please feel free to contact me!
                    </p>
                    <div className='mt-2 flex items-center gap-3'>
                        <Button 
                            size='md' 
                            variant='shadow' 
                            radius='sm' 
                            color='primary'
                            className='uppercase font-semibold'
                            startContent={<Icon icon="mingcute:download-3-fill" className='size-[0.9rem]' />}
                        >
                            Download CV
                        </Button>
                        <Button 
                            size='md' 
                            variant='ghost' 
                            radius='sm' 
                            className='uppercase font-semibold border-foreground'
                            startContent={<Icon icon="simple-icons:whatsapp" className='size-[0.9rem]' />}
                        >
                            Get In Touch
                        </Button>
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
                </div>
            </section>
            <section className='flex justify-center items-center mt-6'>
                <AnimatedImage
                    motionvariants={bounceVariants}
                    motionTransition={{duration: 0.4}}
                    src={avatar}
                    alt='Arafet BenKilani'
                    radius='full'
                    className='border-4 border-primary w-[200px] xl:w-[300px] 2xl:w-[340px]'
                />  
            </section>            
        </div>
    );
}
