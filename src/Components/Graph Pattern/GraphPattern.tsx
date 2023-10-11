import Theme from '../../Theme.tsx'
import { connect } from "react-redux";
import styled from 'styled-components'

  const StyledGraphPatternWrapper = styled.div`
  height:100%;
  width:100%;
  position:absolute;
  z-index:0;
  `
  const StyledPatternSvg = styled.svg`
  height:100%;
  width:100%;
  `
  const StyledPatternBg = styled.div`
  height:100%;
  width:100%;
  background-color:transparent;
  position:absolute;
  `
  const StyledPatternLine = styled.line`
  stroke: #2A2A2F;
  position: absolute;
  `

 function GraphPattern(props:any) {



  const threshold = 50; // seems to control how big the squares are
  const subdivisions = 10; // thin line subdivisions

  let scale=props.scale*300;

  let translation ={
    x:props.pan.x*props.scale,
    y:props.pan.y*props.scale
  }


  let tileSize:number = (scale) % (subdivisions * threshold) + threshold;
  let thinLineWidth:number = (scale / subdivisions) % threshold / (threshold);
  let thickLineWidth:number=Math.abs((-scale + threshold) % (subdivisions * threshold) / (threshold * subdivisions));



  const thinLines = [...Array(subdivisions).keys()];

  return (
    
    <>
    <StyledGraphPatternWrapper>
      <StyledPatternBg>
	    <StyledPatternSvg>
		    <defs>
        	  <pattern 
                id="grid" 
                x={translation.x} 
                y={translation.y}
                width={tileSize}
                height={tileSize}
                patternUnits="userSpaceOnUse"
        	  >		
        	  {thinLines.map((line,index)=>{
                    return <StyledPatternLine key={index} className='pattern__line' strokeWidth={thinLineWidth} x1="0" y1={tileSize * line / subdivisions} x2={tileSize} y2={tileSize * line / subdivisions}/>
              })}
    
      		  {thinLines.map((line,index)=>{
        			return <StyledPatternLine key={index} className='pattern__line' strokeWidth={thinLineWidth} y1="0" x1={tileSize * line / subdivisions} y2={tileSize} x2={tileSize * line / subdivisions}/>
              })}
        					
        	  <StyledPatternLine className='pattern__line' strokeWidth={thickLineWidth} x1="0" y1={thickLineWidth / 2} x2={tileSize} y2={thickLineWidth / 2} />
              <StyledPatternLine className='pattern__line' strokeWidth={thickLineWidth} x1={thickLineWidth / 2} y1="0" x2={thickLineWidth / 2} y2={tileSize} />
			  </pattern>
		    </defs>
		    <rect fill="url(#grid)" height="100%" width="100%"></rect>
	    </StyledPatternSvg>
    </StyledPatternBg>
    </StyledGraphPatternWrapper>
    </>
  );
}


const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
    pan:state.panzoom.pan
  }
}


export default connect(
  mapStateToProps
)(GraphPattern)
