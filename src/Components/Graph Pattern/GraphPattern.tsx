import Theme from '../../Theme.tsx'
import {useState} from 'react'
import { connect } from "react-redux";


 function GraphPattern(props:any) {

  const style:string = `
  .graphpattern__wrapper{
    height:100%;
    width:100%;
    position:absolute;
    z-index:0;
  }

  #pattern-svg {
    height: 100%;
    width:100%;
    
  }
  
  #pattern__bg {
    background-color:transparent ;
    position:absolute;
    height:100%;
    width:100%
    
    
  }
  
  .pattern__line {
    position: absolute;
    stroke: ${Theme.fgColor};
  }
  `

  const threshold = 50; // seems to control how big the squares are
  const subdivisions = 10; // thin line subdivisions

  let scale=props.scale*300;

  let [translation,setTranslation] = useState({
    x:0,
    y:0
  });


  let tileSize:number = (scale) % (subdivisions * threshold) + threshold;
  let thinLineWidth:number = (scale / subdivisions) % threshold / (threshold);
  let thickLineWidth:number=Math.abs((-scale + threshold) % (subdivisions * threshold) / (threshold * subdivisions));

  const thinLines = [...Array(subdivisions).keys()];

  return (
    
    <>
    <style>{style}</style>
    <div className='graphpattern__wrapper'>
      <div id="pattern__bg">
	    <svg id="pattern-svg">
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
                    return <line key={index} className='pattern__line' strokeWidth={thinLineWidth} x1="0" y1={tileSize * line / subdivisions} x2={tileSize} y2={tileSize * line / subdivisions}/>
              })}
    
      		  {thinLines.map((line,index)=>{
        			return <line key={index} className='pattern__line' strokeWidth={thinLineWidth} y1="0" x1={tileSize * line / subdivisions} y2={tileSize} x2={tileSize * line / subdivisions}/>
              })}
        					
        	  <line className='pattern__line' strokeWidth={thickLineWidth} x1="0" y1={thickLineWidth / 2} x2={tileSize} y2={thickLineWidth / 2} />
              <line className='pattern__line' strokeWidth={thickLineWidth} x1={thickLineWidth / 2} y1="0" x2={thickLineWidth / 2} y2={tileSize} />
			  </pattern>
		    </defs>
		    <rect fill="url(#grid)" height="100%" width="100%"></rect>
	    </svg>
    </div>
    </div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return {
    scale: state.panzoom.scale,
    node: state.node.data
  }
}


export default connect(
  mapStateToProps
)(GraphPattern)
