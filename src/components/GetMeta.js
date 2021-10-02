import Head from "next/head";
function GetMeta({ title }) {
  return (
    <Head>
      <title>Hotels | {title}</title>
    </Head>
  );
}
export default GetMeta;
