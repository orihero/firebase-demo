import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const BallIcon = props => (
  <Svg
    width={30}
    height={30}
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 -2 26 26"
    {...props}>
    <Path
      d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm1 3.3 1.35-.95a8.01 8.01 0 0 1 4.38 3.34l-.39 1.34-1.35.46L11 4.7V3.3Zm-3.35-.95L9 3.3v1.4L5.01 7.49l-1.35-.46-.39-1.34a8.103 8.103 0 0 1 4.38-3.34ZM5.08 15.11l-1.14.1A7.938 7.938 0 0 1 2 10c0-.12.01-.23.02-.35l1-.73 1.38.48 1.46 4.34-.78 1.37Zm7.42 2.48c-.79.26-1.63.41-2.5.41-.87 0-1.71-.15-2.5-.41l-.69-1.49.64-1.1h5.11l.64 1.11-.7 1.48ZM12.27 13H7.73L6.38 8.98 10 6.44l3.63 2.54L12.27 13Zm3.79 2.21-1.14-.1-.79-1.37 1.46-4.34 1.39-.47 1 .73c.01.11.02.22.02.34 0 1.99-.73 3.81-1.94 5.21Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const CardIcon = props => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    {...props}>
    <Path
      d="M18 0H2C.89 0 .01.89.01 2L0 14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V2c0-1.11-.89-2-2-2Zm0 14H2V9h16v5Zm0-7H2V2h16v5Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const FireIcon = props => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 -2 26 26"
    {...props}>
    <Path
      d="M9.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C1.21 7.51 0 10.62 0 14c0 4.42 3.58 8 8 8s8-3.58 8-8C16 8.61 13.41 3.8 9.5.67ZM7.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const MenuIcon = props => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 -2 26 26"
    {...props}>
    <Path
      d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 2C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const PlusIcon = props => (
  <Svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1 -1 26 26"
    {...props}>
    <Path
      d="M12.323 5.138v14M5.323 12.138h14"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const SearchIcon = props => (
  <Svg
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.333 12.667A5.333 5.333 0 1 0 7.333 2a5.333 5.333 0 0 0 0 10.667ZM14 14l-2.9-2.9"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronRightIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0  0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-right"
    {...props}>
    <Path d="m9 18 6-6-6-6" />
  </Svg>
);

const BasketballIcon = props => (
  <Svg
    width={30}
    height={30}
    viewBox="-1 -1 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M14.242 9.167h4.05A8.293 8.293 0 0 0 17.008 5.5a4.99 4.99 0 0 0-2.766 3.667ZM5.758 9.167A4.989 4.989 0 0 0 2.992 5.5a8.293 8.293 0 0 0-1.284 3.667h4.05ZM12.558 9.167a6.662 6.662 0 0 1 3.384-5 8.308 8.308 0 0 0-5.109-2.459v7.459h1.725ZM7.442 9.167h1.725V1.708a8.286 8.286 0 0 0-5.109 2.459 6.662 6.662 0 0 1 3.384 5ZM12.558 10.833h-1.725v7.459a8.286 8.286 0 0 0 5.109-2.459 6.661 6.661 0 0 1-3.384-5ZM2.992 14.5a5.024 5.024 0 0 0 2.766-3.667h-4.05A8.293 8.293 0 0 0 2.992 14.5ZM14.242 10.833a4.99 4.99 0 0 0 2.766 3.667 8.293 8.293 0 0 0 1.284-3.667h-4.05ZM7.442 10.833a6.661 6.661 0 0 1-3.384 5 8.307 8.307 0 0 0 5.109 2.459v-7.459H7.442Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const VolleyballIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="-1 -1 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4 2.342C1.983 3.867.667 6.275.667 9c0 1.217.266 2.375.741 3.425L4 10.925V2.342ZM8.167 8.517V.708a8.32 8.32 0 0 0-2.5.659v8.6l2.5-1.45ZM9 9.958l-6.758 3.9a8.244 8.244 0 0 0 1.816 1.834l7.442-4.284L9 9.958ZM9.833 5.633v2.884l6.759 3.9c.35-.775.583-1.609.683-2.484l-7.442-4.3ZM5.725 16.667A8.392 8.392 0 0 0 9 17.333c2.783 0 5.242-1.375 6.758-3.466l-2.591-1.5-7.442 4.3ZM17.267 8.008c-.459-3.858-3.55-6.916-7.434-7.3v3l7.434 4.3Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const TennisIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="-1 -1 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.175 4.233A8.25 8.25 0 0 0 .667 9a8.25 8.25 0 0 0 1.508 4.767A5.014 5.014 0 0 0 5.667 9a5.014 5.014 0 0 0-3.492-4.767ZM15.825 4.233A5.014 5.014 0 0 0 12.333 9a5.014 5.014 0 0 0 3.492 4.767A8.25 8.25 0 0 0 17.333 9a8.25 8.25 0 0 0-1.508-4.767Z"
      fill={props.fill}
      stroke={props.stroke}
    />
    <Path
      d="M10.667 9a6.668 6.668 0 0 1 3.991-6.108A8.293 8.293 0 0 0 9 .667c-2.192 0-4.175.85-5.658 2.225a6.668 6.668 0 0 1 0 12.216A8.293 8.293 0 0 0 9 17.333c2.192 0 4.175-.85 5.658-2.225A6.668 6.668 0 0 1 10.667 9Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const BaseballIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="-3 -3 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.517 11.017c-.067 2.016.266 3.616.558 3.908.292.292 1.9.633 3.908.558L.517 11.017ZM8.9.733c-1.942.35-3.992 1.117-5.517 2.65C1.858 4.917 1.083 6.958.733 8.9l6.359 6.358c1.95-.341 3.991-1.116 5.516-2.65 1.525-1.533 2.3-3.575 2.65-5.516L8.9.733ZM6.25 10.917 5.083 9.75 9.75 5.083l1.167 1.167-4.667 4.667ZM15.483 4.983c.067-2.016-.266-3.616-.558-3.908-.292-.292-1.9-.633-3.908-.558l4.466 4.466Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const CricketIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="-3 -3 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M11.542 9.675 4.467 2.6a.83.83 0 0 0-1.175 0L.933 4.958a.83.83 0 0 0 0 1.175l7.075 7.075a.83.83 0 0 0 1.175 0l2.359-2.358a.83.83 0 0 0 0-1.175ZM12.13 12.618l-1.179 1.179 3.535 3.535 1.179-1.178-3.535-3.536ZM14.417 6.5a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z"
      fill={props.fill}
      stroke={props.stroke}
    />
  </Svg>
);

const BorderIcon = (props) => (
  <Svg
    width={8}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={4} cy={4} r={4} fill="#FF4B00" />
  </Svg>
);

const SettingsIcon = (props) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.55 11.25a1.238 1.238 0 0 0 .247 1.365l.045.045a1.5 1.5 0 0 1-1.06 2.562 1.5 1.5 0 0 1-1.062-.44l-.045-.044a1.238 1.238 0 0 0-1.365-.248 1.238 1.238 0 0 0-.75 1.133v.127a1.5 1.5 0 1 1-3 0v-.068a1.238 1.238 0 0 0-.81-1.132 1.238 1.238 0 0 0-1.365.247l-.045.045a1.5 1.5 0 1 1-2.123-2.122l.046-.045a1.238 1.238 0 0 0 .247-1.365 1.238 1.238 0 0 0-1.132-.75H2.25a1.5 1.5 0 1 1 0-3h.067a1.237 1.237 0 0 0 1.133-.81 1.237 1.237 0 0 0-.248-1.365l-.044-.045A1.5 1.5 0 1 1 5.28 3.217l.045.046a1.237 1.237 0 0 0 1.365.247h.06a1.237 1.237 0 0 0 .75-1.132V2.25a1.5 1.5 0 0 1 3 0v.067a1.238 1.238 0 0 0 .75 1.133 1.237 1.237 0 0 0 1.365-.248l.045-.044a1.5 1.5 0 1 1 2.123 2.122l-.045.045a1.237 1.237 0 0 0-.248 1.365v.06a1.237 1.237 0 0 0 1.133.75h.127a1.5 1.5 0 0 1 0 3h-.068a1.238 1.238 0 0 0-1.132.75Z"
      fill="#929393"
    />
    <Path
      d="M9 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
      fill="#F3F4F5"
    />
  </Svg>
);

const PlayIcon = (props) => (
  <Svg
    width={14}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.333.662A.667.667 0 0 1 .995 0h12.01c.366 0 .662.297.662.662v10.676a.667.667 0 0 1-.662.662H.995a.662.662 0 0 1-.662-.662V.662Zm1.334.671v9.334h10.666V1.333H1.667ZM6.08 3.61l3.253 2.168a.267.267 0 0 1 0 .444L6.081 8.39a.267.267 0 0 1-.414-.221V3.83a.267.267 0 0 1 .414-.221Z"
      fill="#929393"
    />
  </Svg>
)



export {
  BallIcon,
  CardIcon,
  FireIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
  ChevronRightIcon,
  BasketballIcon,
  VolleyballIcon,
  TennisIcon,
  BaseballIcon,
  CricketIcon,
  BorderIcon,
  SettingsIcon,
  PlayIcon
};
