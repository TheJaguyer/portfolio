export default function Option({ name, content, setSelected }) {
  return (
    <div className={name} onMouseEnter={setSelected} onTouchEnd={setSelected}>
      {content}
    </div>
  );
}
