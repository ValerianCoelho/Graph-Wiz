import Theme from '../../Theme.tsx'
import {useState,useEffect} from 'react'


export default function GraphPattern() {

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

  let [isCtrl,setIsCtrl] = useState(false);
  let [scale,setScale]=useState(300);

  let [translation,setTranslation] = useState({
    x:0,
    y:0
  });


  let tileSize:number = (scale) % (subdivisions * threshold) + threshold;
  let thinLineWidth:number = (scale / subdivisions) % threshold / (threshold);
  let thickLineWidth:number=Math.abs((-scale + threshold) % (subdivisions * threshold) / (threshold * subdivisions));




  useEffect(()=>{
    tileSize = (scale) % (subdivisions * threshold) + threshold;
    thinLineWidth = (scale / subdivisions) % threshold / (threshold);
    thickLineWidth = Math.abs((-scale + threshold) % (subdivisions * threshold) / (threshold * subdivisions));
  },[scale])

  const thinLines = [...Array(subdivisions).keys()];

  return (
    
    <>
    <style>{style}</style>
    <div className='graphpattern__wrapper'>
      {/* <div className='sliders'  style={{position:"absolute"}}>
        <input type='range' value={scale} onChange={(e)=>{setScale(Number(e.target.value))}} min={100} max={1000}></input>
        <br />
        <input type='range' value={translation.x} onChange={(e)=>{setTranslation((prev)=>{return {...prev,x:Number(e.target.value)}})}}></input>
        <br />
        <input type='range' value={translation.y} onChange={(e)=>{setTranslation((prev)=>{return {...prev,y:Number(e.target.value)}})}}></input>
      </div> */}
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

