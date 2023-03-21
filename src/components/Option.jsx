export default function Option({ name, content, setSelected }) {
  return (
    <div className={name} onMouseEnter={setSelected}>
      {content}
    </div>
  );
}
