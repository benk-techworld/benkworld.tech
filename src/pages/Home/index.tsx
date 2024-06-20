import { useLayoutEffect } from 'react';
import AnimatedImage from '@/components/ui/AnimatedImage';
import { Variants } from 'framer-motion';
import avatar from '@/assets/avatar_v2.jpg'


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
        <main className="h-cscreen min-h-cscreen">
            <section className='container h-2/3 min-h-2/3 '>
                <div className='h-full flex flex-col xl:flex-row items-center justify-evenly'>
                    <div className='text-center xl:text-left order-2 xl:order-none'>
                        <span className='text-lg md:text-3xl xl:text-4xl font-normal'>Hi there!</span>
                        <h1 className='text-xl md:text-4xl xl:text-5xl mt-4'>
                            <span className='font-light'>I'm </span>
                            <span className='font-bold text-foreground'>Arafet BenKilani</span>
                        </h1>
                        <h2 className='text-2xl md:text-5xl xl:text-6xl font-light'>a Cloud DevSecOps Engineer</h2>
                        <p className='text-sm sm:text-lg max-w-[650px] mx-auto xl:mx-0 text-foreground/80 mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ad repellat molestias rem impedit animi voluptas quas qui, 
                            veritatis similique.
                        </p>
                    </div>
                    <div className='order-1 xl:order-none'>
                        <AnimatedImage
                            motionvariants={bounceVariants}
                            motionTransition={{duration: 0.4}}
                            src={avatar}
                            alt='Arafet BenKilani'
                            radius='full'
                            isBlurred
                            className='w-[120px] md:w-[150px] xl:w-[300px]'
                        /> 
                    </div>                    
                </div>
            </section>
        </main>
    );
}
