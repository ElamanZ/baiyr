type Props = {
  size?: number;
};
const InstagramIcon = ({ size = 24 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_164_3972)">
        <path
          d="M51 65.3438C58.9218 65.3438 65.3438 58.9218 65.3438 51C65.3438 43.0782 58.9218 36.6562 51 36.6562C43.0782 36.6562 36.6562 43.0782 36.6562 51C36.6562 58.9218 43.0782 65.3438 51 65.3438Z"
          stroke="white"
          strokeWidth="9.5625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70.125 12.75H31.875C21.3126 12.75 12.75 21.3126 12.75 31.875V70.125C12.75 80.6874 21.3126 89.25 31.875 89.25H70.125C80.6874 89.25 89.25 80.6874 89.25 70.125V31.875C89.25 21.3126 80.6874 12.75 70.125 12.75Z"
          stroke="white"
          strokeWidth="9.5625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M71.7188 36.6562C75.2396 36.6562 78.0938 33.8021 78.0938 30.2812C78.0938 26.7604 75.2396 23.9062 71.7188 23.9062C68.1979 23.9062 65.3438 26.7604 65.3438 30.2812C65.3438 33.8021 68.1979 36.6562 71.7188 36.6562Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_164_3972">
          <rect width="102" height="102" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InstagramIcon;
