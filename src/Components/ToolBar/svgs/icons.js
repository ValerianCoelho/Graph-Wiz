
//each Svgelement returns a react jsx element 
//with each svg element , it takes a prop "focus" which has a string to test whether it is being focussed or not


export const SvgSelect =({focus}) =>{
    

    return <>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 34 34"
    >
      <path
        fill={focus==="select"?"#F8F8F8":"#6A6A9F"}
        d="M18.75 1.25A1.25 1.25 0 0117.5 2.5h-5a1.25 1.25 0 010-2.5h5a1.25 1.25 0 011.25 1.25zM17.5 27.5h-5a1.25 1.25 0 000 2.5h5a1.25 1.25 0 000-2.5zm10-25v3.75a1.25 1.25 0 002.5 0V2.5A2.5 2.5 0 0027.5 0h-3.75a1.25 1.25 0 100 2.5h3.75zm1.25 8.75a1.25 1.25 0 00-1.25 1.25v5a1.25 1.25 0 002.5 0v-5a1.25 1.25 0 00-1.25-1.25zm-27.5 7.5A1.25 1.25 0 002.5 17.5v-5a1.25 1.25 0 00-2.5 0v5a1.25 1.25 0 001.25 1.25zm5 8.75H2.5v-3.75a1.25 1.25 0 00-2.5 0v3.75A2.5 2.5 0 002.5 30h3.75a1.25 1.25 0 000-2.5zm0-27.5H2.5A2.5 2.5 0 000 2.5v3.75a1.25 1.25 0 102.5 0V2.5h3.75a1.25 1.25 0 000-2.5zM32.5 27.5H30V25a1.25 1.25 0 00-2.5 0v2.5H25a1.25 1.25 0 000 2.5h2.5v2.5a1.25 1.25 0 002.5 0V30h2.5a1.25 1.25 0 000-2.5z"
      ></path>
    </svg>
  
    </>
}
export const SvgMove =({focus}) =>{
    
    return <>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        stroke={focus==="move"?"#F8F8F8":"#6A6A9F"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19.333 4.333L16 1m0 0l-3.333 3.333M16 1v30m0 0l3.333-3.333M16 31l-3.333-3.333m15-8.334L31 16m0 0l-3.333-3.333M31 16H1m0 0l3.333 3.333M1 16l3.333-3.333"
      ></path>
    </svg>
  
    </>
}

export const SvgPencil =({focus}) =>{
    
    return <>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 31 31"
    >
      <path
        fill={focus==="pencil"?"#F8F8F8":"#6A6A9F"}
        d="M30.297 7.684L23.314.702a2.188 2.188 0 00-3.094 0L.953 19.97a2.177 2.177 0 00-.64 1.547V28.5A2.187 2.187 0 002.5 30.688h6.983a2.18 2.18 0 001.547-.641l19.267-19.269a2.187 2.187 0 000-3.094zM2.577 21L16.25 7.325l3.048 3.05L5.625 24.048 2.577 21zm-.39 7.5v-5.238l5.549 5.55H2.5a.312.312 0 01-.313-.312zM10 28.423l-3.048-3.048L20.625 11.7l3.048 3.05L10 28.423zm18.97-18.97L25 13.423 17.577 6l3.97-3.972a.313.313 0 01.442 0l6.981 6.983a.311.311 0 010 .442z"
      ></path>
    </svg>
  
    </>
}

export const SvgWave =({focus}) =>{
    
    return <>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 36 22"
    >
      <path
        fill={focus==="wave"?"#F8F8F8":"#6A6A9F"}
        d="M35.098 11.398c-3.373 7.191-6.317 10.54-9.285 10.54-3.724 0-6.125-5.12-8.668-10.54-2.073-4.434-4.43-9.46-6.957-9.46-1.435 0-3.907 1.64-7.583 9.46a.937.937 0 01-1.697-.796C4.275 3.41 7.218.062 10.188.062c3.723 0 6.124 5.12 8.667 10.54 2.073 4.434 4.43 9.46 6.957 9.46 1.435 0 3.915-1.64 7.583-9.46a.937.937 0 011.697.796h.006z"
      ></path>
    </svg>
  
    </>
}

export const SvgNode =({focus}) =>{
    
    return <>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path
        fill={focus==="node"?"#F8F8F8":"#6A6A9F"}
        d="M20 32.5c6.904 0 12.5-5.596 12.5-12.5S26.904 7.5 20 7.5 7.5 13.096 7.5 20 13.096 32.5 20 32.5z"
      ></path>
      <path
        fill={focus==="node"?"#F8F8F8":"#6A6A9F"}
        d="M20 37.5A17.5 17.5 0 1137.5 20 17.52 17.52 0 0120 37.5zM20 5a15 15 0 1015 15A15.018 15.018 0 0020 5z"
      ></path>
    </svg>
  
    </>
}