import {AnimatePresence,motion} from 'framer-motion';
import { useLocation } from 'react-router';

import Stairs from '@/components/ui/Stairs';

const StairTransition = () => {

    const {pathname} = useLocation()

    return (
        <AnimatePresence mode='wait'>
            <motion.div key={pathname}> 
                <div className='h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex'>
                    <Stairs/>
                </div>
                <motion.div
                    className='h-screen w-screen fixed bg-background top-0 pointer-events-none z-40'
                    initial={{opacity: 1}}
                    animate={{
                        opacity:0,
                        transition: {delay: 1, duration: 0.4, ease: "easeInOut"}
                    }}

                />
            </motion.div>
        </AnimatePresence>
    )
}

export default StairTransition