export default function AppBackground() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-[-1]"
      style={{ filter: 'blur(100px)' }}
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        fill="none"
      >
        <path className="hidden" fill="#fbbf24" fillRule="evenodd" d="M-217.58 475.75c91.82-72.02 225.52-29.38 341.2-44.74C240 415.56 372.33 315.14 466.77 384.9c102.9 76.02 44.74 246.76 90.31 366.31 29.83 78.24 90.48 136.14 129.48 210.23 57.92 109.99 169.67 208.23 155.9 331.77-13.52 121.26-103.42 264.33-224.23 281.37-141.96 20.03-232.72-220.96-374.06-196.99-151.7 25.73-172.68 330.24-325.85 315.72-128.6-12.2-110.9-230.73-128.15-358.76-12.16-90.14 65.87-176.25 44.1-264.57-26.42-107.2-167.12-163.46-176.72-273.45-10.15-116.29 33.01-248.75 124.87-320.79Z" clipRule="evenodd" style={{ opacity: ".2" }} />
        <path className="hidden" fill="#2563eb" fillRule="evenodd" d="M1103.43 115.43c146.42-19.45 275.33-155.84 413.5-103.59 188.09 71.13 409 212.64 407.06 413.88-1.94 201.25-259.28 278.6-414.96 405.96-130 106.35-240.24 294.39-405.6 265.3-163.7-28.8-161.93-274.12-284.34-386.66-134.95-124.06-436-101.46-445.82-284.6-9.68-180.38 247.41-246.3 413.54-316.9 101.01-42.93 207.83 21.06 316.62 6.61Z" clipRule="evenodd" style={{ opacity: ".15" }} />

        <circle cx="720" cy="520" r="120" fill="transparent" id="circle">
          <animate attributeName="cx" values="100;100%;80%;20%;100" dur="2s" repeatCount="indefinite" begin="0s" />
          <animate attributeName="cy" values="20%;80%;40%;80%;20%" dur="2s" repeatCount="indefinite" begin="0s" />
        </circle>
      </svg>
    </div>
  )
}