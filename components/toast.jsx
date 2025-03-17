// import { Fragment, useState } from 'react';
// import { Transition } from '@headlessui/react';

// export default function Toast({ show, message, type = 'success' }) {
//   return (
//     <div aria-live="assertive" className="fixed top-5 right-5 z-50">
//       <Transition
//         show={show}
//         as={Fragment}
//         enter="transform ease-out duration-300 transition"
//         enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
//         enterTo="translate-y-0 opacity-100 sm:translate-x-0"
//         leave="transition ease-in duration-100"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//       >
//         <div
//           className={`max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden ${
//             type === 'error' ? 'border-l-4 border-red-500' : 'border-l-4 border-green-500'
//           }`}
//         >
//           <div className="p-4">
//             <p className="text-sm font-medium text-gray-900">{message}</p>
//           </div>
//         </div>
//       </Transition>
//     </div>
//   );
// }
import { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/solid';

export default function Toast({ show, message, type = 'success' }) {
  return (
    <div aria-live="assertive" className="fixed top-5 right-5 z-50">
      <Transition
        show={show}
        as={Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div
          className={`max-w-sm w-full shadow-xl rounded-xl pointer-events-auto ring-1 ring-black ring-opacity-10 overflow-hidden bg-gradient-to-br ${
            type === 'error'
              ? 'from-red-500 to-red-600 border border-red-700'
              : 'from-green-500 to-green-600 border border-green-700'
          }`}
        >
          <div className="p-4 flex items-center space-x-3">
            <div className="flex-shrink-0">
              {type === 'error' ? (
                <ExclamationCircleIcon className="h-8 w-8 text-white" />
              ) : (
                <CheckCircleIcon className="h-8 w-8 text-white" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-base font-semibold text-white">{message}</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}
