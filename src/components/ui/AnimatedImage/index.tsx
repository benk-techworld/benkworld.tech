import { Image,ImageProps as NextImageProps } from "@nextui-org/react"
import { motion,Variants } from 'framer-motion';

interface AnimatedImageProps extends NextImageProps {
    imagevariants : Variants
}

const AnimatedImage : React.FC<AnimatedImageProps> = ({imagevariants,...rest} : AnimatedImageProps) => {

    return (

        <motion.div
            variants={imagevariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            whileFocus="focus"
            whileInView="view"
            transition={{duration: 1}}       
        >
            <Image {...rest}/>
        </motion.div>
    )

}

export default AnimatedImage;