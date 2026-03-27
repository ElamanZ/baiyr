type Props = {
  size?: number;
};
const ArrowLeftIcon = ({ size = 24 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 5L1 5M1 5L5 9M1 5L5 0.999999"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
