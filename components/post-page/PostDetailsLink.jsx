// const PostDetailsLink = ({ Icon, detail }) => {
//   return (
//     <div className="flex flex-wrap items-center border-b py-1">
//       <div className="w-5 mr-2">
//         <Icon className="h-5 w-5 text-purple-900" />
//       </div>
//       <a
//         href={detail + '?ref=Devin'}
//         target="_blank"
//         rel="noopener"
//         className="hover:text-purple-900 flex-1 transition break-all"
//       >
//         {detail}
//       </a>
//     </div>
//   );
// };

// export default PostDetailsLink;

import { motion } from "framer-motion";

const PostDetailsLink = ({ Icon, detail }) => {
  return (
    <motion.div 
      className="flex flex-wrap items-center border-b py-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-5 mr-2">
        <Icon className="h-5 w-5 text-purple-900" />
      </div>
      <a
        href={`${detail}?ref=Devin`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-purple-900 flex-1 transition break-all"
      >
        {detail}
      </a>
    </motion.div>
  );
};

export default PostDetailsLink;
