import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

export default function Toast({ show, message, type = 'success' }) {
  return (
    <div aria-live="assertive" className="fixed top-5 right-5 z-50">
      <Transition
        show={show}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden ${
            type === 'error' ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'
          }`}
        >
          <div className="p-4">
            <p className="text-sm font-medium text-gray-900">{message}</p>
          </div>
        </div>
      </Transition>
    </div>
  );
}
