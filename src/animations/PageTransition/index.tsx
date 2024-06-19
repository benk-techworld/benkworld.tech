import {AnimatePresence,motion} from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({children}:{children:React.ReactNode}) => {

    const {pathname} = useLocation()

    return (
        <AnimatePresence initial={false}>
            <motion.div key={pathname}> 
                <motion.div
                    initial={{opacity: 1}}
                    animate={{ opacity: 0, transition: {delay: 1, duration: 0.4, ease: "easeInOut"} }}
                    className="h-screen w-screen fixed top-0 pointer-events-none bg-light-gradient dark:bg-dark-gradient z-20"
                />                    
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition