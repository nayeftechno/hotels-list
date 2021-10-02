import GetMeta from "../src/components/GetMeta";
function Home() {
  return (
    <>
      <GetMeta title="Home" />
      <div className="row">
        <div className="col-md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tellus mauris, tempus vel finibus nec, sagittis in erat. In leo
            purus, volutpat eget enim eget, malesuada dictum mi. Praesent
            venenatis arcu id nunc ultrices, vitae blandit lacus congue.
            Vestibulum euismod velit nec mi ullamcorper mollis. In vulputate,
            neque tincidunt cursus lacinia, felis neque blandit magna, et congue
            lectus risus eget augue. Integer et enim tincidunt, porta dolor at,
            congue arcu. Curabitur dignissim enim non porta convallis. Duis
            commodo mauris eu facilisis auctor. Nullam et sem at purus malesuada
            ultrices. Morbi efficitur mattis mauris, sed viverra tortor. Cras
            non viverra sem. Quisque eget tortor in augue pharetra blandit nec
            nec eros.
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
