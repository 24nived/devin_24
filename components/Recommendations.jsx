// import axios from 'axios';
// import Link from 'next/link';
// import Image from 'next/image';
// import cookie from 'js-cookie';
// import { useQuery } from 'react-query';
// import { AiOutlineLoading3Quarters } from 'react-icons/ai';

// import PostCard from './PostCard';

// import baseURL from '../utils/baseURL';

// const Recommendations = ({ user }) => {
//   const { data, isLoading, isError } = useQuery(
//     'recommendations',
//     async () => {
//       const { data } = await axios.get(`${baseURL}/api/recommendations`, {
//         headers: {
//           Authorization: cookie.get('token'),
//         },
//       });
//       return data;
//     },
//     { staleTime: Infinity }
//   );

//   return (
//     <>
//       {isLoading ? (
//         <div className="min-h-screen flex justify-center items-center -my-8">
//           <AiOutlineLoading3Quarters className="text-4xl text-purple-900 animate-spin text-center" />
//         </div>
//       ) : isError ? (
//         <p className="text-red-600 text-center">
//           An Error Occured :( Please let us know on Discord or Twitter if you
//           see this.
//         </p>
//       ) : (
//         <>
//           <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
//             <div>
//               <h1 className="text-purple-900 text-xl font-semibold mb-2">
//                 Popular Developers
//               </h1>
//               <ul className="divide-y divide-gray-200">
//                 {data.popular.map((developer) => (
//                   <li key={developer.user._id} className="py-1.5">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <Image
//                           height={32}
//                           width={32}
//                           className="object-cover rounded-full"
//                          // src={developer.user.profilePicUrl}
//                          src={developer.user?.profilePicUrl || "/default-profile.png"}
//                          // alt={developer.user.name}
//                          alt={developer.user?.name || "Unknown Developer"}
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-900 truncate">
//                           {/* {developer.user.name} */}
//                           {developer.user?.name || "Unknown Developer"}
//                         </p>
//                         <p className="text-sm text-gray-500 truncate">
//                           {/* {'@' + developer.user.username} */}
//                           {developer.user?.username ? `@${developer.user.username}` : "No username available"}
//                         </p>
//                       </div>
//                       {/* <Link href={`/${developer.user.username}`} */}
//                       <Link href={developer.user?.username ? `/${developer.user.username}` : "#"}
//                          className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-purple-900 hover:text-white transition">
//                           View
                        
//                       </Link>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h1 className="text-purple-900 text-xl font-semibold mb-2">
//                 Devs With Similar Tech Stack
//               </h1>
//               <ul className="divide-y divide-gray-200 md:pr-8">
//                 {data.similar.map((developer) => (
//                   <li key={developer.user._id} className="py-1.5">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <Image
//                           height={32}
//                           width={32}
//                           className="object-cover rounded-full"
//                           src={developer.user.profilePicUrl}
//                           alt={developer.user.name}
//                         />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-900 truncate">
//                           {developer.user.name}
//                         </p>
//                         <p className="text-sm text-gray-500 truncate">
//                           {'@' + developer.user.username}
//                         </p>
//                       </div>
//                       <Link href={`/${developer.user.username}`}
//                          className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-purple-900 hover:text-white transition">
//                           View
                        
//                       </Link>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <h1 className="text-purple-900 text-xl font-semibold mb-4">
//             Built With Similar Tech Stack
//           </h1>
//           <div className="container mx-auto grid gap-x-5 gap-y-7 place-items-center grid-cols-auto-fill">
//             {data.posts.map((post) => (
//               <PostCard key={post._id} post={post} user={user} />
//             ))}
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Recommendations;
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import cookie from "js-cookie";
import { useQuery } from "react-query";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import PostCard from "./PostCard";
import baseURL from "../utils/baseURL";

const Recommendations = ({ user }) => {
  const { data, isLoading, isError } = useQuery(
    "recommendations",
    async () => {
      const { data } = await axios.get(`${baseURL}/api/recommendations`, {
        headers: { Authorization: cookie.get("token") },
      });

      return data;
    },
    { staleTime: Infinity }
  );

  return (
    <>
      {isLoading ? (
        <div className="min-h-screen flex justify-center items-center -my-8">
          <AiOutlineLoading3Quarters className="text-4xl text-purple-900 animate-spin text-center" />
        </div>
      ) : isError ? (
        <p className="text-red-600 text-center">
          An error occurred. Please report this on Discord or Twitter if you
          see this.
        </p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
            {/* Popular Developers */}
            <div>
              <h1 className="text-purple-900 text-xl font-semibold mb-2">
                Popular Developers
              </h1>
              <ul className="divide-y divide-gray-200">
                {data.popular?.map((developer, index) => {
                  if (!developer?.user) return null; // Skip null users
                  return (
                    <li key={developer.user._id || index} className="py-1.5">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Image
                            height={32}
                            width={32}
                            className="object-cover rounded-full"
                            src={developer.user.profilePicUrl || "/default-profile.png"}
                            alt={developer.user.name || "Unknown Developer"}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {developer.user.name || "Unknown Developer"}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {developer.user.username ? `@${developer.user.username}` : "No username available"}
                          </p>
                        </div>
                        <Link
                          href={developer.user.username ? `/${developer.user.username}` : "#"}
                          className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-purple-900 hover:text-white transition"
                        >
                          View
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Developers with Similar Tech Stack */}
            <div>
              <h1 className="text-purple-900 text-xl font-semibold mb-2">
                Devs With Similar Tech Stack
              </h1>
              <ul className="divide-y divide-gray-200 md:pr-8">
                {data.similar?.map((developer, index) => {
                  if (!developer?.user) return null; // Skip null users
                  return (
                    <li key={developer.user._id || index} className="py-1.5">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Image
                            height={32}
                            width={32}
                            className="object-cover rounded-full"
                            src={developer.user.profilePicUrl || "/default-profile.png"}
                            alt={developer.user.name || "Unknown Developer"}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {developer.user.name || "Unknown Developer"}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            {developer.user.username ? `@${developer.user.username}` : "No username available"}
                          </p>
                        </div>
                        <Link
                          href={developer.user.username ? `/${developer.user.username}` : "#"}
                          className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-purple-900 hover:text-white transition"
                        >
                          View
                        </Link>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Posts Built With Similar Tech Stack */}
          <h1 className="text-purple-900 text-xl font-semibold mb-4">
            Built With Similar Tech Stack
          </h1>
          <div className="container mx-auto grid gap-x-5 gap-y-7 place-items-center grid-cols-auto-fill">
            {data.posts?.map((post) => (
              <PostCard key={post._id} post={post} user={user} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Recommendations;
