import notfound from "../assets/notfound.gif";

export default function Notfound(props) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[white]">
          <img className="size-96" src={notfound} alt="Not Found" />
          <p className="text-8xl text-black">We didn't find it...</p>
    </div>
  );
}
