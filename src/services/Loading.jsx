import ReactLoading from "react-loading";

export default function Loading(props) {
  return (
    <div
      className={
        `${props.relative ? "absolute z-[500]" : "fixed z-[1000]"} left-0 top-0 flex h-full w-full items-center justify-center ` +
        (props.hideBg ? "bg-[#121212]" : "bg-[rgba(101,101,101,0.3)]")
      }
    >
      <ReactLoading type="bars" color="#E50914" height={100} width={100} />
    </div>
  );
}
