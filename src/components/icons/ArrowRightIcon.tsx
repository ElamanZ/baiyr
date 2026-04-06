type Props = {
  size?: number;
};
const ArrowRightIcon = ({ size = 24 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5H11M11 5L7 1M11 5L7 9"
        stroke="#223C3B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
