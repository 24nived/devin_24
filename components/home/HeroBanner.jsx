"use client";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { LoginIcon, PlusCircleIcon } from '@heroicons/react/outline';

const HeroBanner = ({ user }) => {
  return (
    <div className="bg-gradient-to-br from-purple-500 via-purple-900 to-purple-900 py-10 px-4 md:px-0 md:py-8">
      <div className="container mx-auto flex justify-between items-center flex-wrap sm:flex-nowrap md:px-12">
        <div className="flex-3 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 xl:w-5/6 2xl:w-3/4">
            {user
              ? 'Share your projects with developers'
              : 'Discover creative websites and developers'}
          </h1>
          <p className="text-sm md:text-md lg:text-lg font-medium text-white mb-6 xl:w-5/6 2xl:w-3/4">
            {user
              ? 'Got a project to showcase? Post it on Devin to get your creative work noticed by hundreds of developers and get promoted on our social handles.'
              : 'Create a free account today to interact with posts from developers across the globe. Open the gates to like, comment, follow, and chat.'}
          </p>
          {/* <p className="text-gray-200 hidden md:block">
            Illustration by{' '}
            <a
              className="underline"
              href="https://icons8.com/illustrations/author/5c07e68d82bcbc0092519bb6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Icons 8
            </a>{' '}
            from{' '}
            <a
              className="underline"
              href="https://icons8.com/illustrations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouch!
            </a>
          </p> */}
        </div>
        <img
          className="hidden md:block mx-auto mb-10 sm:mb-0 md:h-64 lg:h-72 2xl:h-80 3xl:h-96 w-auto flex-2"
          src="/illustrations/3d-illustration-home.png"
          alt="Hero Illustration"
        />
        {user ? (
          <Link
            href="/posts/new"
            className="md:hidden text-lg flex items-center font-semibold bg-white py-2 px-5 text-purple-900 mx-auto rounded-lg shadow"
          >
            <PlusCircleIcon className="h-6 w-6 text-purple-900" />
            <span className="ml-2">New Post</span>
          </Link>
        ) : (
          <Link
            href="/login"
            className="md:hidden text-lg flex items-center font-semibold bg-white py-2 px-5 text-purple-900 mx-auto rounded-lg shadow"
          >
            <LoginIcon className="h-6 w-6 text-purple-900" />
            <span className="ml-2">Log In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
