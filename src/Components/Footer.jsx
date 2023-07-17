import React from "react";
import footerLogo from "../assets/footerLogo.png";

const Footer = () => {
  return (
    <footer className="py-12 w-full">
      <div className="container">
        <div className="w-full gap-16 p-10 grid bg-gradient-to-r from-amber-400 to-yellow-400 rounded-[26px] grid-cols-1 lg:grid-cols-2 justify-between">
          <article className="">
            <img src={footerLogo} alt="" className="mx-0" />
            <div className=" text-stone-950 text-2xl font-spicyRice tracking-wide">
              We're here to assist you and will be happy to provide any
              information or clarification you need
            </div>
          </article>
          <article className="flex flex-col gap-9">
            <div className="text-black text-4xl md:text-6xl font-spicyRice ">
              JOIN OUR
              <br />
              COMMUNITY
            </div>
            <div className="flex items-center gap-6">
              <a href="" target="_blank" className="">
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1269_426)">
                    <path
                      d="M24.2765 48.5374C37.5417 48.5374 48.2952 37.7839 48.2952 24.5187C48.2952 11.2535 37.5417 0.5 24.2765 0.5C11.0114 0.5 0.257812 11.2535 0.257812 24.5187C0.257812 37.7839 11.0114 48.5374 24.2765 48.5374Z"
                      fill="url(#paint0_linear_1269_426)"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.1078 24.2568C18.1039 21.189 22.7804 19.2062 25.1374 18.2334C31.7968 15.4649 33.181 14.9786 34.0789 14.9412C34.266 14.9412 34.7149 14.9786 35.0142 15.203C35.2387 15.3901 35.3135 15.652 35.351 15.8391C35.3884 16.0261 35.4258 16.4377 35.3884 16.7744C35.0142 20.553 33.4803 29.7938 32.6573 34.0214C32.3206 35.8172 31.6471 36.4158 31.0111 36.4907C29.6269 36.6029 28.5419 35.5553 27.1951 34.6949C25.1 33.3106 23.9028 32.4501 21.8451 31.1033C19.4881 29.532 21.022 28.6715 22.3689 27.2872C22.7056 26.9131 28.8786 21.3387 28.9909 20.8149C28.9909 20.7401 29.0283 20.5156 28.8786 20.4034C28.729 20.2911 28.5419 20.3285 28.3923 20.3659C28.1678 20.4034 24.8007 22.6481 18.2535 27.0628C17.2808 27.7362 16.4203 28.0355 15.6347 28.0355C14.7742 28.0355 13.128 27.5491 11.8934 27.1376C10.3969 26.6512 9.19975 26.3893 9.31198 25.5663C9.38681 25.1547 9.98541 24.7058 11.1078 24.2568Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1269_426"
                      x1="0.257812"
                      y1="24.5013"
                      x2="48.2605"
                      y2="24.5013"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#2AABEE" />
                      <stop offset="1" stop-color="#229ED9" />
                    </linearGradient>
                    <clipPath id="clip0_1269_426">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(0.257812 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="" target="_blank" className="">
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1269_451)">
                    <path
                      d="M24.2578 48.5C37.5126 48.5 48.2578 37.7548 48.2578 24.5C48.2578 11.2452 37.5126 0.5 24.2578 0.5C11.003 0.5 0.257812 11.2452 0.257812 24.5C0.257812 37.7548 11.003 48.5 24.2578 48.5Z"
                      fill="#1B9DF0"
                    />
                    <path
                      d="M19.8674 37.16C30.5114 37.16 36.3314 28.34 36.3314 20.696C36.3314 20.444 36.3314 20.192 36.3194 19.952C37.4474 19.136 38.4314 18.116 39.2114 16.952C38.1794 17.408 37.0634 17.72 35.8874 17.864C37.0874 17.144 37.9994 16.016 38.4314 14.66C37.3154 15.32 36.0794 15.8 34.7594 16.064C33.7034 14.936 32.2034 14.24 30.5354 14.24C27.3434 14.24 24.7514 16.832 24.7514 20.024C24.7514 20.48 24.7994 20.924 24.9074 21.344C20.0954 21.104 15.8354 18.8 12.9794 15.296C12.4874 16.148 12.1994 17.144 12.1994 18.2C12.1994 20.204 13.2194 21.98 14.7794 23.012C13.8314 22.988 12.9434 22.724 12.1634 22.292C12.1634 22.316 12.1634 22.34 12.1634 22.364C12.1634 25.172 14.1554 27.5 16.8074 28.04C16.3274 28.172 15.8114 28.244 15.2834 28.244C14.9114 28.244 14.5514 28.208 14.1914 28.136C14.9234 30.44 17.0594 32.108 19.5914 32.156C17.6114 33.704 15.1154 34.628 12.4034 34.628C11.9354 34.628 11.4794 34.604 11.0234 34.544C13.5554 36.2 16.6034 37.16 19.8674 37.16Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1269_451">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(0.257812 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="" className="">
                <svg
                  width="49"
                  height="49"
                  viewBox="0 0 49 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1269_436)">
                    <path
                      d="M10.2502 23.3268C10.2502 22.219 11.1603 21.3089 12.2662 21.3089H15.6665C16.7744 21.3089 17.7229 22.219 17.7229 23.3671V36.1908C18.1184 36.0718 18.5926 35.9527 19.1475 35.8337C19.8982 35.6359 20.4531 34.9639 20.4531 34.171V18.2599C20.4531 17.1521 21.3632 16.2017 22.5094 16.2017H25.9097C27.0176 16.2017 27.9661 17.1118 27.9661 18.2599V33.0247C27.9661 33.0247 28.7974 32.6676 29.6269 32.3124C30.2605 32.0359 30.656 31.4427 30.656 30.7284V13.1163C30.656 12.0084 31.5661 11.058 32.6739 11.058H36.0742C37.1821 11.058 38.0921 11.9681 38.0921 13.1163V27.643C41.0182 25.506 44.0249 22.9332 46.3981 19.8459C47.1104 18.9358 47.3081 17.7473 46.9126 16.6395C42.5619 4.13258 28.88 -2.51829 16.3827 1.83627C3.88543 6.19083 -2.75777 19.8843 1.59103 32.3931C2.06527 33.8177 2.69887 35.1636 3.44959 36.4692C4.04287 37.4983 5.15071 38.0916 6.33727 37.9726C6.97087 37.9323 7.76191 37.8535 8.74879 37.7345C9.61855 37.6558 10.2521 36.9031 10.2521 36.0315L10.2502 23.3268Z"
                      fill="#21325B"
                    />
                    <path
                      d="M10.1719 43.9092C20.8893 51.7064 35.8788 49.3313 43.6682 38.6062C46.6346 34.4897 48.2551 29.5419 48.2551 24.4769C48.2551 23.9221 48.2148 23.3691 48.1764 22.8142C39.4384 35.9144 23.2624 42.0488 10.1719 43.9092Z"
                      fill="#979695"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1269_436">
                      <rect
                        width="48"
                        height="48"
                        fill="white"
                        transform="translate(0.257812 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="" className="">
                <svg
                  width="42"
                  height="49"
                  viewBox="0 0 42 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1269_442)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.7642 3.23937C12.9079 4.72727 10.5711 5.98633 10.5716 6.03754C10.5729 6.16971 17.4268 9.6408 17.67 9.63234C17.7807 9.62863 18.5835 9.25911 19.4539 8.81127L21.0367 7.99717L22.7653 8.88571L24.4938 9.77441L27.3246 8.50241C31.5901 6.5857 32.0331 6.37566 31.9636 6.30509C31.8715 6.21147 30.3416 5.38957 26.1908 3.20431C24.1847 2.14815 22.2377 1.11262 21.8639 0.903082C21.4902 0.693543 21.1334 0.524982 21.0711 0.528245C21.0087 0.531508 18.6206 1.75153 15.7642 3.23937ZM3.23655 9.72663L0.263177 11.2625V18.003C0.263177 21.7104 0.30222 24.7435 0.350112 24.7435C0.397837 24.7435 1.86074 24.1094 3.60093 23.3343L6.76492 21.9251V14.8201L8.31106 15.6625C9.50249 16.311 10.6946 16.9582 11.8875 17.6041L13.9177 18.7033L14.8212 18.2948C15.3877 18.0382 15.9532 17.7791 16.5175 17.5175C16.9535 17.3144 18.024 16.8323 18.8961 16.4459C19.7683 16.0593 20.5757 15.6706 20.6901 15.582C20.8422 15.4643 18.9878 14.4396 13.8313 11.7916C9.9444 9.79559 6.6395 8.16883 6.48709 8.17662C6.33467 8.18442 4.87194 8.88184 3.23655 9.72663ZM32.4995 10.1579C30.4744 11.0721 28.8162 11.8566 28.8143 11.9014C28.8125 11.9461 29.9162 12.6023 31.2671 13.3595C32.618 14.1169 33.7232 14.777 33.7232 14.8267C33.7232 14.8764 32.5279 15.4555 31.0671 16.1141C29.606 16.7724 25.9132 18.4401 22.8606 19.8201L12.6323 24.4434C10.0594 25.6065 7.74018 26.6549 7.47854 26.7734C2.22319 29.1525 0.778702 29.8126 0.580334 29.9259C0.380859 30.04 0.335678 30.7028 0.300174 34.0294L0.257812 37.997L2.91673 39.3518L5.5756 40.7065L9.26253 39.0426C11.2904 38.1275 12.9495 37.3308 12.9495 37.2721C12.9495 37.2136 12.5747 36.9695 12.1169 36.7293C11.6589 36.4892 10.7135 35.9576 10.0157 35.5479C9.31805 35.138 8.62235 34.762 8.46961 34.7121C8.31692 34.6624 8.1942 34.5754 8.19669 34.5187C8.19924 34.4621 9.82279 33.6909 11.8044 32.8048C15.6532 31.084 18.5987 29.7577 24.9221 26.8981C27.7498 25.6196 30.5777 24.342 33.4061 23.0651C35.8918 21.9431 38.7819 20.6327 39.8285 20.1532L41.7315 19.2812L41.7738 15.2684L41.8163 11.2558L39.1195 9.87163C37.6362 9.1104 36.3683 8.48941 36.3018 8.49168C36.2354 8.49378 34.5244 9.24351 32.4995 10.1579ZM41.0089 24.6344C40.6115 24.8286 39.8266 25.192 39.2646 25.442C38.7026 25.692 37.6362 26.1732 36.8948 26.5115L35.5469 27.1263L35.5161 30.6492C35.4991 32.5867 35.4278 34.1633 35.3576 34.1531C35.198 34.1294 32.6717 32.8337 30.1322 31.473C28.2994 30.491 28.1842 30.4519 27.7535 30.6652C27.5046 30.7886 26.0163 31.4561 24.4464 32.1487C22.8764 32.8413 21.5408 33.4531 21.478 33.5085C21.4153 33.5638 24.575 35.2764 28.4997 37.3144L35.6352 41.0198L38.6834 39.4429C40.3597 38.5758 41.7852 37.7848 41.8508 37.6853C41.9986 37.4616 41.986 24.2508 41.838 24.2687C41.7795 24.2757 41.4063 24.4403 41.0089 24.6344ZM24.1293 40.1406C23.6005 40.368 23.0719 40.5956 22.5435 40.8236C20.9477 41.514 21.2604 41.5368 19.3619 40.5917C18.0974 39.9623 17.5524 39.7681 17.3158 39.8624C17.1383 39.933 15.611 40.6202 13.9216 41.3892C12.2322 42.1583 10.7914 42.7876 10.7197 42.7876C10.0109 42.7876 11.1893 43.4916 15.7364 45.7853L21.069 48.475L23.3127 47.3673C24.5468 46.7581 27.0358 45.5381 28.8441 44.6562C30.6522 43.7741 32.1092 43.0296 32.082 43.0015C32.0545 42.9735 30.5394 42.1955 28.715 41.2727L25.3979 39.5949L24.1293 40.1406Z"
                      fill="#05A3C9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1269_442">
                      <rect
                        width="41.7408"
                        height="48"
                        fill="white"
                        transform="translate(0.257812 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </article>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
