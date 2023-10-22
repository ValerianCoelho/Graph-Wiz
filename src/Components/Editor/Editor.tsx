import styled from 'styled-components';
import Theme from '../../Theme.tsx'
import { connect } from "react-redux";
import { addNode } from '../../Redux/index.tsx';
import './Editor.css'

// const StyledToolbar = styled.div`
//   background-color: ${Theme.bgColor};
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
//   padding-top: 10px;
// `

// const StyledSvg = styled.svg`
//   &:hover path {
//     stroke: ${Theme.toolHoverColor};
//     fill: ${Theme.toolHoverColor};
//   }
// `

function Editor(props: any) {
  // const handleAddNode = ()=> {
  //   const input = window.prompt('Enter Node Name');
  //   if(input?.trim()) {
  //     props.addNode({label: input, coord: [0, 0]})
  //   }
  // }

  return (
    <div className="editor">
      {/* <StyledToolbar>
        <StyledSvg width="35" height="35" viewBox="0 0 40 40" fill={Theme.fgColor} xmlns="http://www.w3.org/2000/svg">
          <path d="M37.0984 20.3984C33.725 27.5891 30.7813 30.9375 27.8125 30.9375C24.0891 30.9375 21.6875 25.8188 19.1453 20.3984C17.0719 15.9641 14.7141 10.9375 12.1875 10.9375C10.7531 10.9375 8.28125 12.5781 4.60469 20.3984C4.49615 20.6188 4.30549 20.7877 4.0737 20.8689C3.84191 20.9501 3.58751 20.9371 3.3652 20.8327C3.14289 20.7283 2.97043 20.5408 2.88489 20.3106C2.79936 20.0804 2.80759 19.8258 2.90781 19.6016C6.275 12.4109 9.21875 9.0625 12.1875 9.0625C15.9109 9.0625 18.3125 14.1812 20.8547 19.6016C22.9281 24.0359 25.2859 29.0625 27.8125 29.0625C29.2469 29.0625 31.7266 27.4219 35.3953 19.6016C35.5039 19.3812 35.6945 19.2123 35.9263 19.1311C36.1581 19.0499 36.4125 19.0629 36.6348 19.1673C36.8571 19.2717 37.0296 19.4592 37.1151 19.6894C37.2006 19.9196 37.1924 20.1742 37.0922 20.3984H37.0984Z" fill={Theme.fgColor}/>
        </StyledSvg>
        <StyledSvg onClick={handleAddNode} width="35" height="35" viewBox="0 0 40 40" fill={Theme.fgColor} xmlns="http://www.w3.org/2000/svg">
          <path d="M20 32.5C26.9036 32.5 32.5 26.9036 32.5 20C32.5 13.0964 26.9036 7.5 20 7.5C13.0964 7.5 7.5 13.0964 7.5 20C7.5 26.9036 13.0964 32.5 20 32.5Z" fill={Theme.fgColor}/>
          <path d="M20 37.5C16.5388 37.5 13.1554 36.4737 10.2775 34.5507C7.39966 32.6278 5.15664 29.8947 3.83211 26.697C2.50757 23.4993 2.16102 19.9806 2.83626 16.5859C3.5115 13.1913 5.17821 10.0731 7.62563 7.62564C10.0731 5.17822 13.1913 3.51151 16.5859 2.83627C19.9806 2.16102 23.4993 2.50758 26.697 3.83212C29.8947 5.15665 32.6278 7.39967 34.5507 10.2775C36.4736 13.1554 37.5 16.5388 37.5 20C37.4947 24.6397 35.6493 29.0878 32.3685 32.3685C29.0878 35.6493 24.6397 37.4947 20 37.5ZM20 5.00001C17.0333 5.00001 14.1332 5.87974 11.6664 7.52796C9.19971 9.17618 7.27712 11.5189 6.14181 14.2598C5.00649 17.0006 4.70944 20.0166 5.28822 22.9264C5.867 25.8361 7.29561 28.5088 9.3934 30.6066C11.4912 32.7044 14.1639 34.133 17.0736 34.7118C19.9834 35.2906 22.9994 34.9935 25.7403 33.8582C28.4811 32.7229 30.8238 30.8003 32.472 28.3336C34.1203 25.8668 35 22.9667 35 20C34.9954 16.0232 33.4135 12.2106 30.6015 9.39852C27.7894 6.58648 23.9768 5.00464 20 5.00001Z" fill={Theme.fgColor}/>
        </StyledSvg>
      </StyledToolbar> */}
    </div>
  )
}

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     addNode: (data: object) => {
//       dispatch(addNode(data))
//     }
//   }
// }

// export default connect(
//   null,
//   mapDispatchToProps
// )(Editor);

export default Editor;