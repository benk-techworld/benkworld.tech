import {AnimatePresence,motion} from 'framer-motion';
import { useLocation } from 'react-router';

const PageTransition = ({children}:{children:React.ReactNode}) => {

    const {pathname} = useLocation()

    return (
        <AnimatePresence>
            <motion.div key={pathname}> 
                <motion.div
                    initial={{opacity: 1}}
                    animate={{ opacity: 0, transition: {delay: 2, duration: 1, ease: "easeInOut"} }}
                    className="h-screen w-screen fixed bg-background top-0 pointer-events-none"
                />                    
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default PageTransition