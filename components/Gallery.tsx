"use client";
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";

import Image from 'next/image';

export const Gallery = () => {
  const callouts = [
    {
      name: 'Desk and Office',
      description: 'Work from home accessories',
      imageSrc: 'https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/384989326_122120435162031337_1477327784974440547_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=GgChyRskMawAX8Nmr0r&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&oh=00_AfCQYQY9OTZj2hfXjPkLkJGqd00MVRoXkMDBX2_W1aDm9A&oe=652180BA',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '',
    },
    {
      name: 'Self-Improvement',
      description: 'Journals and note-taking',
      imageSrc: 'https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/384996553_122120423186031337_4162787377204629679_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=enPPZzgJSacAX9UQMUM&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&oh=00_AfCGdIVSJF1-vrPDHqrfCd5iMbObyq2m0P3Jsn29pK3qiw&oe=651FE406',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://scontent.fcmb3-2.fna.fbcdn.net/v/t39.30808-6/384989326_122120435162031337_1477327784974440547_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=GgChyRskMawAX8Nmr0r&_nc_zt=23&_nc_ht=scontent.fcmb3-2.fna&oh=00_AfCQYQY9OTZj2hfXjPkLkJGqd00MVRoXkMDBX2_W1aDm9A&oe=652180BA',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  return (
    <motion.div >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <motion.div     
              initial={'hidden'}
               whileInView={"show"}
               viewport={{ once: false, amount: 0.7 }} 
               className="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64 my-4">
             <Link href={callout.href}>
              <img
                 width={200}
                 height={200}
                  src={callout.imageSrc}
                  alt={callout.imageAlt}
                  className=" h-full w-full object-cover object-center"
                />
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  )
}
