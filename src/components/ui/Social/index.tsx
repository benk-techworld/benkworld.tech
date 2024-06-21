import {Link,LinkProps} from '@nextui-org/react'
import { Icon } from "@iconify/react";

type Social = {
    icon: React.ReactNode
    path: string
}

const socials: Social[] = [
    {
        icon: <Icon icon="uil:github" width={26} />,
        path: "https://github.com/benk-techworld"
    },
    {
        icon: <Icon icon="entypo-social:linkedin-with-circle" width={24} />,
        path: "https://www.linkedin.com/in/arafet-ben-kilani/"
    },        
]


interface SocialProps extends LinkProps {
    containerStyles: string
}

const Social: React.FC<SocialProps> = ({containerStyles,...rest}) => {

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

export default Social;