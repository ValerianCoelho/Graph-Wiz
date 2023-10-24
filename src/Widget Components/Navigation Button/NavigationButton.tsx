import './NavigatoinButton.css'

function NavigationButton(props:any) {
  return (
    <>
      <div className='navigation-btn'>
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.0984 20.3984C33.725 27.5891 30.7812 30.9375 27.8125 30.9375C24.089 30.9375 21.6875 25.8188 19.1453 20.3984C17.0718 15.9641 14.714 10.9375 12.1875 10.9375C10.7531 10.9375 8.28122 12.5781 4.60465 20.3984C4.49611 20.6188 4.30545 20.7877 4.07366 20.8689C3.84187 20.9501 3.58747 20.9371 3.36516 20.8327C3.14286 20.7283 2.97039 20.5408 2.88486 20.3106C2.79933 20.0804 2.80756 19.8258 2.90778 19.6016C6.27497 12.4109 9.21872 9.0625 12.1875 9.0625C15.9109 9.0625 18.3125 14.1812 20.8547 19.6016C22.9281 24.0359 25.2859 29.0625 27.8125 29.0625C29.2468 29.0625 31.7265 27.4219 35.3953 19.6016C35.5038 19.3812 35.6945 19.2123 35.9263 19.1311C36.1581 19.0499 36.4125 19.0629 36.6348 19.1673C36.8571 19.2717 37.0295 19.4592 37.1151 19.6894C37.2006 19.9196 37.1924 20.1742 37.0922 20.3984H37.0984Z" fill={props.color}/>
        </svg>
      </div>
    </>
  )
}

export default NavigationButton;