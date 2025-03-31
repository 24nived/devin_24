// import axios from 'axios';
// import Link from 'next/link';
// import Image from 'next/image';
// import cookie from 'js-cookie';
// import { useState, useEffect } from 'react';
// import { useMutation, useQueryClient } from 'react-query';
// import {
//   UserAddIcon,
//   CogIcon,
//   LoginIcon,
//   CheckCircleIcon,
// } from '@heroicons/react/outline';

// import FollowModal from '../../components/FollowModal';

// import baseURL from '../../utils/baseURL';

// const ProfileHeader = ({ profile, followers, following, user }) => {
//   const isFollowing =
//     user &&
//     followers.filter((follower) => follower.user === user._id).length > 0;

//   const queryClient = useQueryClient();

//   const mutation = useMutation(
//     async () => {
//       const { data } = await axios.post(
//         `${baseURL}/api/profile/follow/${profile.user._id}`,
//         {},
//         { headers: { Authorization: cookie.get('token') } }
//       );
//       return data;
//     },
//     {
//       onSuccess: (data) => {
//         const old = queryClient.getQueryData([
//           'profiles',
//           profile.user.username,
//         ]);
//         queryClient.setQueryData(['profiles', profile.user.username], {
//           ...old,
//           followers: data,
//         });
//       },
//     }
//   );

//   const [modalOpen, setModalOpen] = useState(false);
//   const [statsToShow, setStatsToShow] = useState('followers');

//   useEffect(() => {
//     document.title = `${profile.user.name}'s Profile on Devin`;
//   }, [profile]);

//   return (
//     <>
//       <div className="flex justify-center px-8 py-8 md:py-12">
//         <div>
//           <Image
//             className="rounded-full object-cover"
//             src={profile.user.profilePicUrl}
//             height={100}
//             width={100}
//           />
//         </div>
//         <div className="ml-5">
//           <h1 className="text-2xl mb-1 text-gray-800 font-bold">
//             {profile.user.name}
//           </h1>
//           <h3 className="mb-2">
//             <span
//               onClick={() => {
//                 setStatsToShow('followers');
//                 setModalOpen(true);
//               }}
//               className="hover:text-purple-900 cursor-pointer"
//             >
//               {followers.length} Followers
//             </span>{' '}
//             |{' '}
//             <span
//               onClick={() => {
//                 setStatsToShow('following');
//                 setModalOpen(true);
//               }}
//               className="hover:text-purple-900 cursor-pointer"
//             >
//               {following.length} Following
//             </span>
//           </h3>
//           {user && user._id === profile.user._id ? (
//             <Link href="/settings">
//               <button className="bg-gray-100 flex items-center font-semibold rounded-md px-3 py-2">
//                 <CogIcon className="h-5 w-5 mr-2" /> Update
//               </button>
//             </Link>
//           ) : user ? (
//             isFollowing ? (
//               <button
//                 onClick={() => mutation.mutate()}
//                 className="bg-purple-100 text-purple-600 text flex items-center font-semibold rounded-md px-3 py-2"
//               >
//                 <CheckCircleIcon className="h-5 w-5 mr-2" /> Following
//               </button>
//             ) : (
//               <button
//                 onClick={() => mutation.mutate()}
//                 className="bg-gray-100 flex items-center font-semibold rounded-md px-3 py-2"
//               >
//                 <UserAddIcon className="h-5 w-5 mr-2" /> Follow
//               </button>
//             )
//           ) : (
//             <Link href="/login">
//               <button className="bg-gray-100 flex items-center font-semibold rounded-md px-3 py-2">
//                 <LoginIcon className="h-5 w-5 mr-2" /> Log In
//               </button>
//             </Link>
//           )}
//         </div>
//       </div>
//       <FollowModal
//         username={profile.user.username}
//         open={modalOpen}
//         setOpen={setModalOpen}
//         statsToShow={statsToShow}
//       />
//     </>
//   );
// };

// export default ProfileHeader;

import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import cookie from 'js-cookie';
import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import {
  UserAddIcon,
  CogIcon,
  LoginIcon,
  CheckCircleIcon,
} from '@heroicons/react/outline';
import FollowModal from '../../components/FollowModal';
import baseURL from '../../utils/baseURL';

const ProfileHeader = ({ profile, followers, following, user }) => {
  const isFollowing =
    user &&
    followers.filter((follower) => follower.user === user._id).length > 0;

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async () => {
      if (!profile?.user?._id) {
        throw new Error('No user ID found');
      }

      const { data } = await axios.post(
        `${baseURL}/api/profile/follow/${profile.user._id}`,
        {},
        { 
          headers: { 
            Authorization: cookie.get('token') || '' 
          } 
        }
      );
      return data;
    },
    {
      onSuccess: (data) => {
        queryClient.setQueryData(['profiles', profile.user.username], (old) => ({
          ...old,
          followers: data.followers,
          followingCount: data.followingCount
        }));
      },
      onError: (error) => {
        console.error('Follow error:', error);
        // Add toast notification here if needed
      }
    }
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [statsToShow, setStatsToShow] = useState('followers');

  return (
    <>
      <div className="flex justify-center px-8 py-8 md:py-12">
        <div>
          <Image
            className="rounded-full object-cover"
            src={profile.user.profilePicUrl}
            height={100}
            width={100}
            alt="Profile"
          />
        </div>
        <div className="ml-5">
          <h1 className="text-2xl mb-1 text-gray-800 font-bold">
            {profile.user.name}
          </h1>
          <h3 className="mb-2">
            <span
              onClick={() => {
                setStatsToShow('followers');
                setModalOpen(true);
              }}
              className="hover:text-purple-900 cursor-pointer"
            >
              {followers.length} Followers
            </span>{' '}
            |{' '}
            <span
              onClick={() => {
                setStatsToShow('following');
                setModalOpen(true);
              }}
              className="hover:text-purple-900 cursor-pointer"
            >
              {following.length} Following
            </span>
          </h3>
          {user && user._id === profile.user._id ? (
            <Link href="/settings">
              <button className="bg-gray-100 flex items-center font-semibold rounded-md px-3 py-2">
                <CogIcon className="h-5 w-5 mr-2" /> Update
              </button>
            </Link>
          ) : user ? (
            <button
              onClick={() => mutation.mutate()}
              disabled={mutation.isLoading}
              className={`flex items-center font-semibold rounded-md px-3 py-2 ${
                isFollowing
                  ? 'bg-purple-100 text-purple-600'
                  : 'bg-gray-100'
              } ${mutation.isLoading ? 'opacity-50' : ''}`}
            >
              {mutation.isLoading ? (
                'Processing...'
              ) : isFollowing ? (
                <>
                  <CheckCircleIcon className="h-5 w-5 mr-2" /> Following
                </>
              ) : (
                <>
                  <UserAddIcon className="h-5 w-5 mr-2" /> Follow
                </>
              )}
            </button>
          ) : (
            <Link href="/login">
              <button className="bg-gray-100 flex items-center font-semibold rounded-md px-3 py-2">
                <LoginIcon className="h-5 w-5 mr-2" /> Log In
              </button>
            </Link>
          )}
        </div>
      </div>
      <FollowModal
        username={profile.user.username}
        open={modalOpen}
        setOpen={setModalOpen}
        statsToShow={statsToShow}
      />
    </>
  );
};

export default ProfileHeader;