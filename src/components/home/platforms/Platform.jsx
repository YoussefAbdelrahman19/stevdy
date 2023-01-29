function Platform() {
  return (
    <>
      <div className="container mt-2">
        <div className="row p-5 mx-5">
          <div className="col">
            <a href="#">
              <img className="w-100" src={require("./shopify.png")} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <img className="w-100" src={require("./nearpad.png")} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <img className="w-100" src={require("./bench.png")} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <img className="w-100" src={require("./forbes.png")} alt="" />
            </a>
          </div>
          <div className="col">
            <a href="#">
              <img className="w-100" src={require("./bumble.png")} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Platform;
