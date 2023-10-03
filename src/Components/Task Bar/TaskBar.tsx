import Theme from '../../Theme.tsx'

function TaskBar() {
  const styles: string = `
    .task-bar__body {
      background-color: ${Theme.bgColor};
      grid-column:  1 / span 3;
      z-index:1;
    }
  `
  return (
    <>
      <style> {styles} </style>
      <div className="task-bar__body">
        <div>Task Bar</div>
      </div>
    </>
  )
}

export default TaskBar;