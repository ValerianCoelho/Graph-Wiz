import { connect } from "react-redux";
import { addNode } from '../../Redux/index.tsx';
import styled from 'styled-components';
import Theme from '../../Theme.tsx'
import DropdownSelect from '../../Widget Components/Dropdown Select/DropdownSelect.tsx';
import TextField from '../../Widget Components/Text Field/TextField.tsx';
import InputField from '../../Widget Components/Input Field/InputField.tsx';
import Button from '../../Widget Components/Button/Button.tsx';
import './Editor.css'
import { useEffect, useState } from "react";
import { setWeightOption } from "../../Redux/index.tsx";
import { setDirectedOption } from "../../Redux/index.tsx";
import { updateWeight } from "../../Redux/index.tsx";

const StyledAddNodeSvgBtn = styled.svg`
  &:hover path {
    stroke: ${Theme.toolHoverColor};
    fill: ${Theme.toolHoverColor};
  }
`

const StyledLeftDirectedEdgeBtn = styled.svg`
  color: ${Theme.fgColor};
  background-color: ${Theme.bgColor};
  box-sizing: content-box;
  padding: 5px;
  border: 1px solid ${Theme.nodeBorderColor};
  border-radius: 5px;
  &:hover {
    background-color: #272753;
  }
`
const StyledRightDirectedEdgeBtn = styled.svg`
  color: ${Theme.fgColor};
  background-color: ${Theme.bgColor};
  box-sizing: content-box;
  padding: 5px;
  border: 1px solid ${Theme.nodeBorderColor};
  border-radius: 5px;
  &:hover {
    background-color: #272753;
  }
`

function weightInput(selectedComponentID: string, path: any, weightOption: string, updateWeight: any) {
  const isPathSelected = path[selectedComponentID]?.componentType === 'path' ? true : false;
  return (
    <>
      { weightOption === 'Weighted' && 
        <InputField 
          value={isPathSelected ? path[selectedComponentID].weight : ''}
          placeholderText={isPathSelected ? "Enter Weight" : "Select an Edge" }
          isDisabled={isPathSelected ? false : true}

          handleInput={(weightValue: string)=> {
            const weight = parseInt(weightValue);
            updateWeight(selectedComponentID, weight);
          }}
        />}
    </>
  )
}


function Editor(props: any) {
  const [nodeLabel, setNodeLabel] = useState('');

  const handleAddNode = ()=> {
    const input = nodeLabel;
    if(input?.trim()) {
      props.addNode(crypto.randomUUID(), {label: input, coord: [0, 0]})
      setNodeLabel('');
    }
    let newChar=String.fromCharCode(nodeLabel.charCodeAt(0)+1);
    setNodeLabel(newChar);
  }

  return (
    <div className="editor">
      
      <div className="graph-type panel">
        <TextField text="Graph Type"/>
        <DropdownSelect optionList={["Undirected", "Directed"]} handleSelect={props.setDirectedOption}/>
        <DropdownSelect optionList={["Non Weighted", "Weighted"]} handleSelect={props.setWeightOption}/>
      </div>
      <div className="add-node panel">

        <div className="horizontal">
          <StyledAddNodeSvgBtn onClick={handleAddNode} width="35" height="35" viewBox="0 0 40 40" fill={Theme.fgColor} xmlns="http://www.w3.org/2000/svg">
            <path d="M20 32.5C26.9036 32.5 32.5 26.9036 32.5 20C32.5 13.0964 26.9036 7.5 20 7.5C13.0964 7.5 7.5 13.0964 7.5 20C7.5 26.9036 13.0964 32.5 20 32.5Z" fill={Theme.fgColor}/>
            <path d="M20 37.5C16.5388 37.5 13.1554 36.4737 10.2775 34.5507C7.39966 32.6278 5.15664 29.8947 3.83211 26.697C2.50757 23.4993 2.16102 19.9806 2.83626 16.5859C3.5115 13.1913 5.17821 10.0731 7.62563 7.62564C10.0731 5.17822 13.1913 3.51151 16.5859 2.83627C19.9806 2.16102 23.4993 2.50758 26.697 3.83212C29.8947 5.15665 32.6278 7.39967 34.5507 10.2775C36.4736 13.1554 37.5 16.5388 37.5 20C37.4947 24.6397 35.6493 29.0878 32.3685 32.3685C29.0878 35.6493 24.6397 37.4947 20 37.5ZM20 5.00001C17.0333 5.00001 14.1332 5.87974 11.6664 7.52796C9.19971 9.17618 7.27712 11.5189 6.14181 14.2598C5.00649 17.0006 4.70944 20.0166 5.28822 22.9264C5.867 25.8361 7.29561 28.5088 9.3934 30.6066C11.4912 32.7044 14.1639 34.133 17.0736 34.7118C19.9834 35.2906 22.9994 34.9935 25.7403 33.8582C28.4811 32.7229 30.8238 30.8003 32.472 28.3336C34.1203 25.8668 35 22.9667 35 20C34.9954 16.0232 33.4135 12.2106 30.6015 9.39852C27.7894 6.58648 23.9768 5.00464 20 5.00001Z" fill={Theme.fgColor}/>
          </StyledAddNodeSvgBtn>
          <TextField text="Node Label"/>
        </div>
        <div className="add-node-line-2">
          <InputField 
            handleChange={setNodeLabel} 
            value={nodeLabel} 
            placeholderText="Node Label"
          />
          <Button text="ADD" handleClick={handleAddNode}/>
        </div>
        <DropdownSelect optionList={["Alphabetical", "Numerical", "Roman Numeral"]}/>
      </div>

      {(props.directedOption === 'Directed' || props.weightOption === 'Weighted') &&
        <div className="link-type panel">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <TextField text="Link Type"/>
          { props.directedOption === 'Directed' 
            && 
            <div style={{display: 'flex', gap: '7px'}}>
            <StyledLeftDirectedEdgeBtn width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2501 8.00001C14.2501 8.19892 14.1711 8.38968 14.0304 8.53033C13.8898 8.67099 13.699 8.75001 13.5001 8.75001H4.3126L7.5326 11.9694C7.6735 12.1103 7.75265 12.3014 7.75265 12.5006C7.75265 12.6999 7.6735 12.891 7.5326 13.0319C7.39171 13.1728 7.20061 13.2519 7.00135 13.2519C6.8021 13.2519 6.611 13.1728 6.4701 13.0319L1.9701 8.53188C1.90018 8.4622 1.84471 8.37941 1.80685 8.28824C1.769 8.19708 1.74951 8.09934 1.74951 8.00063C1.74951 7.90192 1.769 7.80418 1.80685 7.71302C1.84471 7.62185 1.90018 7.53906 1.9701 7.46938L6.4701 2.96938C6.53987 2.89961 6.62269 2.84427 6.71384 2.80652C6.80499 2.76876 6.90269 2.74933 7.00135 2.74933C7.10002 2.74933 7.19771 2.76876 7.28886 2.80652C7.38002 2.84427 7.46284 2.89961 7.5326 2.96938C7.60237 3.03914 7.65771 3.12197 7.69546 3.21312C7.73322 3.30427 7.75265 3.40197 7.75265 3.50063C7.75265 3.59929 7.73322 3.69699 7.69546 3.78814C7.65771 3.87929 7.60237 3.96212 7.5326 4.03188L4.3126 7.25001H13.5001C13.699 7.25001 13.8898 7.32902 14.0304 7.46967C14.1711 7.61033 14.2501 7.80109 14.2501 8.00001Z" fill="#6A6A9F"/>
            </StyledLeftDirectedEdgeBtn>
            <StyledRightDirectedEdgeBtn width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.0306 8.53061L9.53063 13.0306C9.38973 13.1715 9.19863 13.2507 8.99938 13.2507C8.80012 13.2507 8.60902 13.1715 8.46813 13.0306C8.32723 12.8897 8.24807 12.6986 8.24807 12.4994C8.24807 12.3001 8.32723 12.109 8.46813 11.9681L11.6875 8.74999H2.5C2.30109 8.74999 2.11032 8.67097 1.96967 8.53032C1.82902 8.38967 1.75 8.1989 1.75 7.99999C1.75 7.80108 1.82902 7.61031 1.96967 7.46966C2.11032 7.329 2.30109 7.24999 2.5 7.24999H11.6875L8.46937 4.02999C8.32848 3.88909 8.24932 3.69799 8.24932 3.49874C8.24932 3.29948 8.32848 3.10838 8.46937 2.96749C8.61027 2.82659 8.80137 2.74744 9.00062 2.74744C9.19988 2.74744 9.39098 2.82659 9.53187 2.96749L14.0319 7.46749C14.1018 7.53726 14.1573 7.62016 14.1951 7.71142C14.2329 7.80269 14.2523 7.90052 14.2522 7.99931C14.252 8.09809 14.2324 8.19588 14.1944 8.28706C14.1564 8.37824 14.1007 8.46101 14.0306 8.53061Z" fill="#6A6A9F"/>
            </StyledRightDirectedEdgeBtn>
          </div>}
        </div>

        {weightInput(props.selectedComponentID, props.path, props.weightOption, props.updateWeight)}
      </div>
      }
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    weightOption: state.globalFlags.weightOption,
    directedOption: state.globalFlags.directedOption,
    selectedComponentID: state.globalFlags.selectedComponentID,
    path: state.path.pathData,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNode: (nodeID:string, data: object) => {
      dispatch(addNode(nodeID, data))
    },
    setWeightOption: (weightOption: string)=> {
      dispatch(setWeightOption(weightOption))
    },
    setDirectedOption: (directedOption: string)=> {
      dispatch(setDirectedOption(directedOption))
    },
    updateWeight: (pathID: string, weight: number)=> {
      dispatch(updateWeight(pathID, weight))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);