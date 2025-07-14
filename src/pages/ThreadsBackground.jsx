export const Threads = ({ className = "" }) => {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="threads-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 0 10 Q 5 0 10 10" stroke="#ccc" strokeWidth="0.5" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#threads-pattern)" />
    </svg>
  );
};