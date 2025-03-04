const PostInput = ({
  Icon,
  label,
  small,
  id,
  placeholder,
  value,
  setValue,
  required,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-md font-medium text-purple-900 mb-2"
      >
        {label} {required && <span className="text-red-400">*</span>}
        {small && (
          <small className="block text-xs text-gray-500 mb-3">{small}</small>
        )}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-purple-900" aria-hidden="true" />
        </div>
        <input
          type="text"
          id={id}
          className="focus:ring-purple-700 focus:border-purple-700 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={required}
        />
      </div>
    </div>
  );
};

export default PostInput;
