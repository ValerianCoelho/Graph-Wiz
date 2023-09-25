import Theme from '../../Theme.tsx'
import styled from 'styled-components';

const StyledToolbar = styled.div`
  background-color: ${Theme.bgColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
`

const StyledSvg = styled.svg`
  &:hover path {
    stroke: ${Theme.toolHoverColor};
    fill: ${Theme.toolHoverColor};
  }
`

function ToolBar() {
  return (
    <>
      <StyledToolbar>
        <StyledSvg width="35" height="35" viewBox="0 0 40 40" fill={Theme.fgColor} xmlns="http://www.w3.org/2000/svg">
          <path d="M23.3333 8.33333L20 5M20 5L16.6667 8.33333M20 5V35M20 35L23.3333 31.6667M20 35L16.6667 31.6667M31.6667 23.3333L35 20M35 20L31.6667 16.6667M35 20H5M5 20L8.33333 23.3333M5 20L8.33333 16.6667" stroke={Theme.fgColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </StyledSvg>
        <StyledSvg width="35" height="35" viewBox="0 0 40 40" fill={Theme.fgColor} xmlns="http://www.w3.org/2000/svg">
          <path d="M23.75 6.25C23.75 6.58152 23.6183 6.89946 23.3839 7.13388C23.1495 7.3683 22.8315 7.5 22.5 7.5H17.5C17.1685 7.5 16.8505 7.3683 16.6161 7.13388C16.3817 6.89946 16.25 6.58152 16.25 6.25C16.25 5.91848 16.3817 5.60054 16.6161 5.36612C16.8505 5.1317 17.1685 5 17.5 5H22.5C22.8315 5 23.1495 5.1317 23.3839 5.36612C23.6183 5.60054 23.75 5.91848 23.75 6.25ZM22.5 32.5H17.5C17.1685 32.5 16.8505 32.6317 16.6161 32.8661C16.3817 33.1005 16.25 33.4185 16.25 33.75C16.25 34.0815 16.3817 34.3995 16.6161 34.6339C16.8505 34.8683 17.1685 35 17.5 35H22.5C22.8315 35 23.1495 34.8683 23.3839 34.6339C23.6183 34.3995 23.75 34.0815 23.75 33.75C23.75 33.4185 23.6183 33.1005 23.3839 32.8661C23.1495 32.6317 22.8315 32.5 22.5 32.5ZM32.5 7.5V11.25C32.5 11.5815 32.6317 11.8995 32.8661 12.1339C33.1005 12.3683 33.4185 12.5 33.75 12.5C34.0815 12.5 34.3995 12.3683 34.6339 12.1339C34.8683 11.8995 35 11.5815 35 11.25V7.5C35 6.83696 34.7366 6.20107 34.2678 5.73223C33.7989 5.26339 33.163 5 32.5 5H28.75C28.4185 5 28.1005 5.1317 27.8661 5.36612C27.6317 5.60054 27.5 5.91848 27.5 6.25C27.5 6.58152 27.6317 6.89946 27.8661 7.13388C28.1005 7.3683 28.4185 7.5 28.75 7.5H32.5ZM33.75 16.25C33.4185 16.25 33.1005 16.3817 32.8661 16.6161C32.6317 16.8505 32.5 17.1685 32.5 17.5V22.5C32.5 22.8315 32.6317 23.1495 32.8661 23.3839C33.1005 23.6183 33.4185 23.75 33.75 23.75C34.0815 23.75 34.3995 23.6183 34.6339 23.3839C34.8683 23.1495 35 22.8315 35 22.5V17.5C35 17.1685 34.8683 16.8505 34.6339 16.6161C34.3995 16.3817 34.0815 16.25 33.75 16.25ZM6.25 23.75C6.58152 23.75 6.89946 23.6183 7.13388 23.3839C7.3683 23.1495 7.5 22.8315 7.5 22.5V17.5C7.5 17.1685 7.3683 16.8505 7.13388 16.6161C6.89946 16.3817 6.58152 16.25 6.25 16.25C5.91848 16.25 5.60054 16.3817 5.36612 16.6161C5.1317 16.8505 5 17.1685 5 17.5V22.5C5 22.8315 5.1317 23.1495 5.36612 23.3839C5.60054 23.6183 5.91848 23.75 6.25 23.75ZM11.25 32.5H7.5V28.75C7.5 28.4185 7.3683 28.1005 7.13388 27.8661C6.89946 27.6317 6.58152 27.5 6.25 27.5C5.91848 27.5 5.60054 27.6317 5.36612 27.8661C5.1317 28.1005 5 28.4185 5 28.75V32.5C5 33.163 5.26339 33.7989 5.73223 34.2678C6.20107 34.7366 6.83696 35 7.5 35H11.25C11.5815 35 11.8995 34.8683 12.1339 34.6339C12.3683 34.3995 12.5 34.0815 12.5 33.75C12.5 33.4185 12.3683 33.1005 12.1339 32.8661C11.8995 32.6317 11.5815 32.5 11.25 32.5ZM11.25 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V11.25C5 11.5815 5.1317 11.8995 5.36612 12.1339C5.60054 12.3683 5.91848 12.5 6.25 12.5C6.58152 12.5 6.89946 12.3683 7.13388 12.1339C7.3683 11.8995 7.5 11.5815 7.5 11.25V7.5H11.25C11.5815 7.5 11.8995 7.3683 12.1339 7.13388C12.3683 6.89946 12.5 6.58152 12.5 6.25C12.5 5.91848 12.3683 5.60054 12.1339 5.36612C11.8995 5.1317 11.5815 5 11.25 5ZM37.5 32.5H35V30C35 29.6685 34.8683 29.3505 34.6339 29.1161C34.3995 28.8817 34.0815 28.75 33.75 28.75C33.4185 28.75 33.1005 28.8817 32.8661 29.1161C32.6317 29.3505 32.5 29.6685 32.5 30V32.5H30C29.6685 32.5 29.3505 32.6317 29.1161 32.8661C28.8817 33.1005 28.75 33.4185 28.75 33.75C28.75 34.0815 28.8817 34.3995 29.1161 34.6339C29.3505 34.8683 29.6685 35 30 35H32.5V37.5C32.5 37.8315 32.6317 38.1495 32.8661 38.3839C33.1005 38.6183 33.4185 38.75 33.75 38.75C34.0815 38.75 34.3995 38.6183 34.6339 38.3839C34.8683 38.1495 35 37.8315 35 37.5V35H37.5C37.8315 35 38.1495 34.8683 38.3839 34.6339C38.6183 34.3995 38.75 34.0815 38.75 33.75C38.75 33.4185 38.6183 33.1005 38.3839 32.8661C38.1495 32.6317 37.8315 32.5 37.5 32.5Z" fill={Theme.fgColor}/>
        </StyledSvg>
        <StyledSvg width="35" height="35" viewBox="0 0 40 40" fill={Theme.fgColor} xmlns="http://www.w3.org/2000/svg">
          <path d="M37.0984 20.3984C33.725 27.5891 30.7813 30.9375 27.8125 30.9375C24.0891 30.9375 21.6875 25.8188 19.1453 20.3984C17.0719 15.9641 14.7141 10.9375 12.1875 10.9375C10.7531 10.9375 8.28125 12.5781 4.60469 20.3984C4.49615 20.6188 4.30549 20.7877 4.0737 20.8689C3.84191 20.9501 3.58751 20.9371 3.3652 20.8327C3.14289 20.7283 2.97043 20.5408 2.88489 20.3106C2.79936 20.0804 2.80759 19.8258 2.90781 19.6016C6.275 12.4109 9.21875 9.0625 12.1875 9.0625C15.9109 9.0625 18.3125 14.1812 20.8547 19.6016C22.9281 24.0359 25.2859 29.0625 27.8125 29.0625C29.2469 29.0625 31.7266 27.4219 35.3953 19.6016C35.5039 19.3812 35.6945 19.2123 35.9263 19.1311C36.1581 19.0499 36.4125 19.0629 36.6348 19.1673C36.8571 19.2717 37.0296 19.4592 37.1151 19.6894C37.2006 19.9196 37.1924 20.1742 37.0922 20.3984H37.0984Z" fill={Theme.fgColor}/>
        </StyledSvg>
        <StyledSvg width="35" height="35" viewBox="0 0 40 40" fill={Theme.fgColor} xmlns="http://www.w3.org/2000/svg">
          <path d="M20 32.5C26.9036 32.5 32.5 26.9036 32.5 20C32.5 13.0964 26.9036 7.5 20 7.5C13.0964 7.5 7.5 13.0964 7.5 20C7.5 26.9036 13.0964 32.5 20 32.5Z" fill={Theme.fgColor}/>
          <path d="M20 37.5C16.5388 37.5 13.1554 36.4737 10.2775 34.5507C7.39966 32.6278 5.15664 29.8947 3.83211 26.697C2.50757 23.4993 2.16102 19.9806 2.83626 16.5859C3.5115 13.1913 5.17821 10.0731 7.62563 7.62564C10.0731 5.17822 13.1913 3.51151 16.5859 2.83627C19.9806 2.16102 23.4993 2.50758 26.697 3.83212C29.8947 5.15665 32.6278 7.39967 34.5507 10.2775C36.4736 13.1554 37.5 16.5388 37.5 20C37.4947 24.6397 35.6493 29.0878 32.3685 32.3685C29.0878 35.6493 24.6397 37.4947 20 37.5ZM20 5.00001C17.0333 5.00001 14.1332 5.87974 11.6664 7.52796C9.19971 9.17618 7.27712 11.5189 6.14181 14.2598C5.00649 17.0006 4.70944 20.0166 5.28822 22.9264C5.867 25.8361 7.29561 28.5088 9.3934 30.6066C11.4912 32.7044 14.1639 34.133 17.0736 34.7118C19.9834 35.2906 22.9994 34.9935 25.7403 33.8582C28.4811 32.7229 30.8238 30.8003 32.472 28.3336C34.1203 25.8668 35 22.9667 35 20C34.9954 16.0232 33.4135 12.2106 30.6015 9.39852C27.7894 6.58648 23.9768 5.00464 20 5.00001Z" fill={Theme.fgColor}/>
        </StyledSvg>
      </StyledToolbar>
    </>
  )
}
  
export default ToolBar;