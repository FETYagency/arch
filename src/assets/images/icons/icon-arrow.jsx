function Arrow(props) {
  const { width = 26, height = 20 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      {...props}
    >
      <path
        d="M15 1l9 9-9 9M0 10h24"
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
}

export default Arrow;
