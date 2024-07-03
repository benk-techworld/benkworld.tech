import React, { useLayoutEffect } from 'react';
import {Image, Button} from '@nextui-org/react'

import avatar from '@/assets/avatar2.jpg'
import { Icon } from '@iconify/react';
import Particles from '@/components/ui/Particles';

export default function Home(): JSX.Element {

    useLayoutEffect(()=>{
        document.title = "Home | Arafet BenKilani"
    },[])

    return (
        <React.Fragment>
            <section className='relative py-16 border-b-small border-foreground/5 overflow-hidden'>
                <Particles/>
                <div className='container text-center flex flex-col items-center gap-y-7'>
                    <Image
                        src={avatar}
                        alt='Arafet BenKilani'
                        radius='full'
                        width={125}
                        className='border-4 border-primary'
                    />

                    <h2 className='flex items-center gap-1 font-poppins font-[600] text-3xl sm:text-4xl text-foreground/90'>
                        Hi there! 
                        <Icon icon="noto:waving-hand" className='size-[1.8rem]'/> 
                    </h2>
                    <p className='max-w-[720px] text-sm sm:text-lg text-foreground-600/70 px-2'>
                        I'm <strong className='text-foreground'>Arafet BenKilani</strong>, a Cloud DevSecOps Engineer from Tunisia <Icon icon="twemoji:flag-tunisia" className='inline-block size-[1.2rem] mb-1'/>.
                        My main focus is on <strong>Cloud, Security, DevOps and Software development.</strong> If you want me on your team or you need my assistance on a project, 
                        please feel free to contact me!
                    </p>

                    <div>
                        <Button 
                            size='sm' 
                            variant='shadow' 
                            radius='sm' 
                            color='primary'
                            className='uppercase font-semibold'
                            startContent={<Icon icon="mingcute:download-3-fill" className='size-[1frem]' />}
                            type='submit'
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}
