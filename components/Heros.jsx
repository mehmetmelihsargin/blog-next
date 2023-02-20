import React from 'react';
import Link from 'next/link';

function Heros({data}) {
  return (
    <div>
      {data.map(post => (
        <div
          key={post.id}
          className="w-full pb-8 bg-white tails-selected-element"
        >
          <div className="w-full h-full mt-2">
            <div className="mx-auto max-w-7xl lg:px-10">
              <div className="flex flex-col items-start justify-center py-12 bg-gray-100 lg:rounded-xl px-14 md:py-20 xl:px-20 xl:py-20 md:flex-row tails-hover tails-relative">
                <div className="flex flex-col items-start justify-center w-full space-y-10 text-left md:w-1/2 sm:text-center md:text-left sm:items-center md:items-start">
                  <div className="relative">
                    <h1 className="font-serif text-3xl leading-tight text-gray-900 xl:text-6xl">
                      {post.title}
                    </h1>
                  </div>
                  <p className="max-w-lg text-gray-600 md:max-w-none">
                    {post.herosContent}
                  </p>
                  <Link
                    href={`posts/${post.id}`}
                    className="w-full px-12 py-5 text-sm font-medium text-center text-white uppercase bg-gray-900 rounded-full sm:w-auto"
                  >
                    Read post
                  </Link>
                </div>
                <div className="relative flex justify-end md:w-1/2">
                  <img
                    alt="melih"
                    src={post.textImage}
                    className="top-0 w-1/2 mx-auto mt-16 transform -translate-x-8 md:absolute md:mt-0 md:translate-x-0 md:w-5/6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Heros;
