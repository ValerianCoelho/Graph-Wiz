import { connect } from "react-redux";
import { addNode } from '../../Redux/index.tsx';
import styled from 'styled-components';
import Theme from '../../Theme.tsx'
import DropdownSelect from '../../Widget Components/Dropdown Select/DropdownSelect.tsx';
import TextField from '../../Widget Components/Text Field/TextField.tsx';
import InputField from '../../Widget Components/Input Field/InputField.tsx';
import Button from '../../Widget Components/Button/Button.tsx';
import './Editor.css'
import { useState } from "react";


const StyledSvg = styled.svg`
  &:hover path {
    stroke: ${Theme.toolHoverColor};
    fill: ${Theme.toolHoverColor};
  }
`

function Editor(props: any) {
  const [nodeLabel, setNodeLabel] = useState('');

  const handleAddNode = ()=> {
    const input = nodeLabel;
    if(input?.trim()) {
      props.addNode(crypto.randomUUID(), {label: input, coord: [0, 0]})
      setNodeLabel('');
    }
  }

  return (
    <div className="editor">
      
      <div className="graph-type panel">
        <TextField text="Graph Type"/>
        <DropdownSelect optionList={["Undirected", "Directed"]}/>
        <DropdownSelect optionList={["Non Weighted", "Weighted"]}/>
      </div>
      <div className="add-node panel">

        <div className="add-node-line">
          <StyledSvg onClick={handleAddNode} width="35" height="35" viewBox="0 0 40 40" fill={Theme.fgColor} xmlns="http://www.w3.org/2000/svg">
            <path d="M20 32.5C26.9036 32.5 32.5 26.9036 32.5 20C32.5 13.0964 26.9036 7.5 20 7.5C13.0964 7.5 7.5 13.0964 7.5 20C7.5 26.9036 13.0964 32.5 20 32.5Z" fill={Theme.fgColor}/>
            <path d="M20 37.5C16.5388 37.5 13.1554 36.4737 10.2775 34.5507C7.39966 32.6278 5.15664 29.8947 3.83211 26.697C2.50757 23.4993 2.16102 19.9806 2.83626 16.5859C3.5115 13.1913 5.17821 10.0731 7.62563 7.62564C10.0731 5.17822 13.1913 3.51151 16.5859 2.83627C19.9806 2.16102 23.4993 2.50758 26.697 3.83212C29.8947 5.15665 32.6278 7.39967 34.5507 10.2775C36.4736 13.1554 37.5 16.5388 37.5 20C37.4947 24.6397 35.6493 29.0878 32.3685 32.3685C29.0878 35.6493 24.6397 37.4947 20 37.5ZM20 5.00001C17.0333 5.00001 14.1332 5.87974 11.6664 7.52796C9.19971 9.17618 7.27712 11.5189 6.14181 14.2598C5.00649 17.0006 4.70944 20.0166 5.28822 22.9264C5.867 25.8361 7.29561 28.5088 9.3934 30.6066C11.4912 32.7044 14.1639 34.133 17.0736 34.7118C19.9834 35.2906 22.9994 34.9935 25.7403 33.8582C28.4811 32.7229 30.8238 30.8003 32.472 28.3336C34.1203 25.8668 35 22.9667 35 20C34.9954 16.0232 33.4135 12.2106 30.6015 9.39852C27.7894 6.58648 23.9768 5.00464 20 5.00001Z" fill={Theme.fgColor}/>
          </StyledSvg>
          <TextField text="Node Label"/>
        </div>
        <div className="add-node-line-2">
          <InputField onChange={setNodeLabel} value={nodeLabel} placeholderText="Node Label"/>
          <Button text="ADD" handleClick={handleAddNode}/>
        </div>
        <DropdownSelect optionList={["Alphabetical", "Numerical", "Roman Numeral"]}/>
      </div>
      <div className="link-type panel">
        <TextField text="Link Type"/>
        <InputField placeholderText="Weight"/>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNode: (nodeID:string, data: object) => {
      dispatch(addNode(nodeID, data))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Editor);