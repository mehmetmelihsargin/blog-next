import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

function Post() {
  return (
    <main>
      <Navbar />
      <div className="w-full pb-8 bg-white tails-selected-element">
        <div className="w-full h-full mt-2">
          <div className="mx-auto max-w-7xl lg:px-10">
            <div className="flex items-start justify-center py-12 bg-gray-100 lg:rounded-xl px-14 md:py-20 xl:px-20 xl:py-20">
              <div className="flex flex-col items-start justify-center w-full space-y-10 text-left  sm:text-center md:text-left sm:items-center md:items-start">
                <div className="relative">
                  <h1 className="font-serif text-3xl leading-tight text-gray-900 xl:text-6xl">
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
                <div>
                  <img
                    src="https://cdn.devdojo.com/images/october2021/ghost-design.png"
                    className="float-right h-80"
                  />
                  <p className=" text-2xl text-gray-600 ">
                    Next.js and React are popular and powerful tools in the
                    front-end web development world. These two technologies are
                    used to create modern and efficient web applications.
                    Next.js is an open-source framework built using React. This
                    framework is designed to create dynamic web pages and
                    support server-side rendering (SSR). Next.js offers fast
                    loading and SEO-friendly pages to enhance the user
                    experience. It also includes features such as pre-rendering,
                    customizable URLs, APIs, or serving static files. React, on
                    the other hand, is a JavaScript library developed by
                    Facebook. It is used to create dynamic and interactive web
                    applications. React offers performance and efficiency during
                    data exchange and allows for quick and easy implementation
                    of changes in user interfaces. React enables code reuse and
                    assists in the development of large and complex
                    applications. While both technologies have similar features,
                    Next.js complements React`s many weaknesses. Next.js makes
                    using React even easier and speeds up the application
                    development process. Next.js complements React with advanced
                    server-side rendering support, API endpoints, and
                    customizable URLs. In conclusion, Next.js and React are
                    ideal for creating efficient and modern web applications.
                    Although both technologies have their own unique advantages,
                    they provide the best results when used together because
                    they complement each others shortcomings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Post;
