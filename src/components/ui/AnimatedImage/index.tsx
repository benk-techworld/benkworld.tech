import { Image,ImageProps as NextImageProps } from "@nextui-org/react"
import { motion,Variants,Transition } from 'framer-motion';

interface AnimatedImageProps extends NextImageProps {
    motionvariants : Variants
    motionTransition?: Transition
    motionStyles?: string
}

const AnimatedImage : React.FC<AnimatedImageProps> = ({motionvariants,motionTransition,motionStyles,...rest}) => {

    return (

        <motion.div
            variants={motionvariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            whileFocus="focus"
            whileInView="view"
            transition={motionTransition}
            className={motionStyles}       
        >
            <Image {...rest}/>
        </motion.div>
    )

}

export default AnimatedImage;