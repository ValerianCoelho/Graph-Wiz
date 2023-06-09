import './Node.css'

export default function Node({label}) {
  return (
    <>
      <div className="node">
        <div className="text">{label}</div>
      </div>
    </>
  );
}
