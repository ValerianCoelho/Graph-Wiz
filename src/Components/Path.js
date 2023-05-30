import './Path.css'

export default function Path({label}) {
  return (
    <>
      <div className="node">
        <div className="text">{label}</div>
      </div>
    </>
  );
}
