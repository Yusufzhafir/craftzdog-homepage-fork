const abstract = () => (
  <svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    
    <defs>
      
      <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        
        <stop
          id="stop1"
          stop-color="rgba(255, 81.917, 0, 1)"
          offset="0%"
        ></stop>
        <stop
          id="stop2"
          stop-color="rgba(255, 158.795, 0, 1)"
          offset="100%"
        ></stop>
      </linearGradient>
    </defs>
    <path
      fill="currentColor"
      d="M8.1,-7.2C11.8,-4.4,16.9,-2.2,20.8,4C24.8,10.1,27.6,20.3,24,20.6C20.3,20.9,10.1,11.4,4,7.4C-2.1,3.4,-4.2,4.9,-9,4.5C-13.7,4.2,-21,2.1,-25,-3.9C-28.9,-10,-29.5,-20,-24.7,-22.8C-20,-25.6,-10,-21.2,-3.9,-17.3C2.2,-13.4,4.4,-10,8.1,-7.2Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      stroke-width="0"
      // style="transition: all 0.3s ease 0s;"
      stroke="url(#sw-gradient)"
    ></path>
  </svg>
)

export default abstract
