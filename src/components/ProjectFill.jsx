export default function AboutMeFill() {
  return (
    <div className="flex h-4/5 w-4/5 flex-col items-end justify-evenly text-white">
      <div className="justify-self-start" style={{ fontSize: '2em' }}>
        projects
      </div>

      <div className="flex w-full flex-col items-start text-gray-500 ">
        <div className="hover:text-white">Amazon Product Page Clone</div>
        <div className="hover:text-white">Chronobeats Server Design Capstone</div>
        <div className="hover:text-white">Logico</div>
      </div>
    </div>
  );
}
