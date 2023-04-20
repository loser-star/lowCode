
export function Item({ label, children }) {
  return (
    <div className="item">
      <label>{label}</label>
      {children}
    </div>
  );
}