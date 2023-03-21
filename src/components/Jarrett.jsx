export default function Jarrett() {
  return (
    <div
      className="absolute top-0 right-0 flex h-10 w-10 flex-col items-end justify-center overflow-hidden border-b-4 border-l-4 border-white bg-black transition-all duration-300 ease-bounce "
      style={style}
      onMouseLeave={exit}
    >
      <div className="flex flex-row items-center justify-end gap-4">
        <div className="text-2xl text-white">contact me:</div>
        <div
          className="cursor-pointer text-2xl text-gray-500 hover:text-white"
          onClick={copy}
          onMouseEnter={() => {
            setHovered(true);
            setCopyMessage('click to copy');
          }}
          onMouseLeave={() => setHovered(false)}
        >
          guyer.jarrett@gmail.com
        </div>
      </div>
      <div className=" transition-all duration-500" style={{ color: hovered ? 'white' : 'black' }}>
        {copyMessage}
      </div>
    </div>
  );
}
