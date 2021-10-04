import { memo } from "react";
import Head from "next/head";
function GetMeta({ title }) {
  return (
    <Head>
      <title>Hotels | {title}</title>
      <meta name="keywords" content="hotels" />
    </Head>
  );
}
export default memo(GetMeta);
