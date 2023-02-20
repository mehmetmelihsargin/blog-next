'use client';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import {usePathname, useRouter} from 'next/navigation';
import React from 'react';
import {useSelector} from 'react-redux';

function Post() {
  const data = useSelector(state => state.posts.data);
  const route = usePathname().split('/')[2];
  return (
    <main>
      <Navbar />
      {data.map(item =>
        item.id === route ? (
          <div
            key={item.id}
            className="w-full pb-8 bg-white tails-selected-element"
          >
            <div className="w-full h-full mt-2">
              <div className="mx-auto max-w-7xl lg:px-10">
                <div className="flex items-start justify-center py-12 bg-gray-100 lg:rounded-xl px-14 md:py-20 xl:px-20 xl:py-20">
                  <div className="flex flex-col items-start justify-center w-full space-y-10 text-left  sm:text-center md:text-left sm:items-center md:items-start">
                    <div className="relative">
                      <h1 className="font-serif text-3xl leading-tight text-gray-900 xl:text-6xl">
                        {item.title}
                      </h1>
                    </div>
                    <div>
                      <img
                        src={item.textImage}
                        className="float-right h-80"
                        alt="textImage"
                      />
                      <p className=" text-2xl text-gray-600 ">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null,
      )}
    </main>
  );
}

export default Post;
