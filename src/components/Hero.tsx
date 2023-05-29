""
import React from 'react'
import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { SOCIAL_MEDIA_URLS } from '../constants/socialMediaUrls'


export default function Hero() {
    return (
        <div className="gap-10 sm:flex flex-col lg:flex-row">
            <div className="relative flex flex-col items-start gap-5 flex-1 w-70">
                <p className="text-3xl text-slate-400">I'm</p>
                <h2 className="text-7xl">Prafful Indirala</h2>
                <div className="bg-[#f4b424] h-2 w-52">

                </div>
                <p className="text-1xl text-slate-400 w-80">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="mb-32 flex flex-col flex-1 w-30 gap-10">
                <p className="text-xl text-slate-400">Services</p>
                <p className="text-1xl text-slate-400">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <h2 className={`mb-3 text-xl font-semibold text-[#f4b424]`}>
                    Show more{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <div className='flex gap-5'>
                    <div className="bg-[#4b4955] p-2 rounded-full">
                        <Link href={SOCIAL_MEDIA_URLS.twitter} target='_blank' >
                            <FaTwitter color="#f4b424" />
                        </Link>
                    </div>
                    <div className="bg-[#4b4955] p-2 rounded-full">
                        <Link href={SOCIAL_MEDIA_URLS.linkedin} target='_blank'>
                            <FaLinkedin color="#f4b424" />
                        </Link>
                    </div>
                    <div className="bg-[#4b4955] p-2 rounded-full">
                        <Link href={SOCIAL_MEDIA_URLS.instagram} target='_blank'>
                            <FaInstagram color="#f4b424" />
                        </Link>
                    </div>
                    <div className="bg-[#4b4955] p-2 rounded-full">
                        <Link href={SOCIAL_MEDIA_URLS.github} target='_blank'>
                            <FaGithub color="#f4b424" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
