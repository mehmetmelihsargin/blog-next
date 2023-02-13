import React from 'react';
import Link from 'next/link';

function Heros() {
  return (
    <div class="w-full pb-8 bg-white tails-selected-element">
      <div class="w-full h-full mt-2">
        <div class="mx-auto max-w-7xl lg:px-10">
          <div class="flex flex-col items-start justify-center py-12 bg-gray-100 lg:rounded-xl px-14 md:py-20 xl:px-20 xl:py-20 md:flex-row tails-hover tails-relative">
            <div class="flex flex-col items-start justify-center w-full space-y-10 text-left md:w-1/2 sm:text-center md:text-left sm:items-center md:items-start">
              <div class="relative">
                <h1 class="font-serif text-3xl leading-tight text-gray-900 xl:text-6xl">
                  Learn{' '}
                  <Link
                    className="underline font-semibold"
                    href="https://reactjs.org/"
                  >
                    React
                  </Link>{' '}
                  and{' '}
                  <Link
                    className="underline font-semibold"
                    href="https://nextjs.org/"
                  >
                    Next js
                  </Link>{' '}
                  from blog posts
                </h1>
              </div>
              <p class="max-w-lg text-gray-600 md:max-w-none">
                Next.js and React are popular and powerful tools in the
                front-end web development world. These two technologies are used
                to create modern and efficient web applications.
              </p>
              <Link
                href="/posts/1"
                class="w-full px-12 py-5 text-sm font-medium text-center text-white uppercase bg-gray-900 rounded-full sm:w-auto"
              >
                Read post
              </Link>
            </div>
            <div class="relative flex justify-end md:w-1/2">
              <img
                src="https://cdn.devdojo.com/images/october2021/ghost-design.png"
                class="top-0 w-1/2 mx-auto mt-16 transform -translate-x-8 md:absolute md:mt-0 md:translate-x-0 md:w-5/6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros;
