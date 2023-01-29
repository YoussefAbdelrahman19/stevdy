import "./growBusiness.css";
function GrowBusiness() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row">
          {/* section one */}
          <div className="col-sm-12 col-lg-5 pt-5 section-one">
            <h1 className="py-1 fw-bold">
              Acceleration Process to
              <br /> Grow Your Business
            </h1>
            <div className="py-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              <br /> diam nonumy eirmod tempor invidunt ut labore et dolore
              <br />
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd <br />
              gubergren , no sea takimata sanctus est Lorem ipsum
              <br /> dolor sit amet
            </div>
            <div className="py-3">
              <button className="about-us-button rounded btn px-4 border-0 elem5 fw-bold">
                About us
              </button>
            </div>
          </div>

          {/* section two */}
          <div className="col-sm-12 col-lg-7 p-4 ">
            <div className="row">
              <div className="col-1">
                <img src={require("./one.png")} alt="" />
              </div>
              <h4 className="col fw-bold mx-5">Market Research</h4>
            </div>

            <div>
              <div className="row">
                <div className="col-1 mx-4 my-3">
                  <img src={require("./trace_1.png")} alt="" />
                </div>
                <div className="col py-2 py-md-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <br /> diam nonumy eirmod tempor invidunt ut labore et dolore
                  <br /> magna aliquyam erat, sed diam voluptua.
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="row">
              <div className="col-1">
                <img src={require("./one.png")} alt="" />
              </div>
              <h4 className="col fw-bold mx-5">Market Research</h4>
            </div>

            <div>
              <div className="row pt-4 pt-md-0">
                <div className="col-1 mx-4 my-3">
                  <img src={require("./trace_1.png")} alt="" />
                </div>
                <div className="col py-2 py-md-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <br /> diam nonumy eirmod tempor invidunt ut labore et dolore
                  <br /> magna aliquyam erat, sed diam voluptua.
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="row pt-4 pt-md-0">
              <div className="col-1">
                <img src={require("./one.png")} alt="" />
              </div>
              <h4 className="col fw-bold mx-5">Market Research</h4>
            </div>

            <div>
              <div className="row  pt-md-0">
                <div className="col-1 mx-4 my-3"></div>
                <div className="col py-md-0">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <br /> diam nonumy eirmod tempor invidunt ut labore et dolore
                  <br /> magna aliquyam erat, sed diam voluptua.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrowBusiness;
