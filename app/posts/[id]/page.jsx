import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

function Post({params}) {
  return (
    <main>
      <Navbar />
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
                <p class="max-w-lg text-2xl text-gray-600 md:max-w-none">
                  Next.js and React are popular and powerful tools in the
                  front-end web development world. These two technologies are
                  used to create modern and efficient web applications. Next.js
                  is an open-source framework built using React. This framework
                  is designed to create dynamic web pages and support
                  server-side rendering (SSR). Next.js offers fast loading and
                  SEO-friendly pages to enhance the user experience. It also
                  includes features such as pre-rendering, customizable URLs,
                  APIs, or serving static files. React, on the other hand, is a
                  JavaScript library developed by Facebook. It is used to create
                  dynamic and interactive web applications. React offers
                  performance and efficiency during data exchange and allows for
                  quick and easy implementation of changes in user interfaces.
                  React enables code reuse and assists in the development of
                  large and complex applications. While both technologies have
                  similar features, Next.js complements React`s many weaknesses.
                  Next.js makes using React even easier and speeds up the
                  application development process. Next.js complements React
                  with advanced server-side rendering support, API endpoints,
                  and customizable URLs. In conclusion, Next.js and React are
                  ideal for creating efficient and modern web applications.
                  Although both technologies have their own unique advantages,
                  they provide the best results when used together because they
                  complement each others shortcomings.
                </p>
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
    </main>
  );
}

export default Post;
