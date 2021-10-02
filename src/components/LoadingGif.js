import Image from "next/image";
function LoadingGif() {
  return (
    <Image src="/img/loader.gif" width={50} height={50} alt="loading...." />
  );
}
export default LoadingGif;
