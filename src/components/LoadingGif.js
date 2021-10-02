// import loaderGif from "../../assets/img/loader.gif";
import Image from "next/image";
function LoadingGif() {
  return (
    <Image
      className="img-gif"
      src="/img/loader.gif"
      width={50}
      height={50}
      alt="loading...."
    />
  );
}
export default LoadingGif;
