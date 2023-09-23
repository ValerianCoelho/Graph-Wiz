import Theme from "../../Theme";
type NodeProps = {
  label: string
}

function Node(props: NodeProps) {
  const styles: string = `
    .Node {
      width: 30px;
      height: 30px;
      border-radius: 50%;

      color: ${Theme.nodeFgColor};
      background-color: ${Theme.nodeBgColor};
      border: 1px solid ${Theme.nodeBorderColor};

      display: flex;
      justify-content: center;
      align-items: center;
      
      font-family: Open Sans;
    }
  `

  return (
    <>
      <style> {styles} </style>
      <div className="Node">{props.label}</div>
    </>
  )
}

export default Node;