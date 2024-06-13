import { FaGithub,FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import {Link,LinkProps} from '@nextui-org/react'

type Social = {
    icon: React.ReactNode
    path: string
}

const socials: Social[] = [
    {
        icon: <FaGithub size={21}/>,
        path: "https://github.com/benk-techworld"
    },
    {
        icon: <FaFacebookSquare size={21}/>,
        path: "https://www.facebook.com/fsociety.fu"
    },
    {
        icon: <FaLinkedin size={21}/>,
        path: "https://www.linkedin.com/in/arafet-ben-kilani/"
    },        
]


interface SocialProps extends LinkProps {
    containerStyles: string
}

export default function Social({containerStyles,...rest} : SocialProps) {

    return (
        <div className={containerStyles}>
            {socials.map((social,index)=>{
                return (
                    <Link key={index} href={social.path} isExternal {...rest} >
                        {social.icon}
                    </Link>
                )
            })}
        </div>
    )
}