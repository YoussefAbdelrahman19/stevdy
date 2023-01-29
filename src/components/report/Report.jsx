import "./report.css";
function Report() {
  return (
    <>
      <div className="container-fluid rectangle">
        <div className="row">
          {/* section one */}
          <div class="col-sm-12 col-md-6">
            <img className="w-100 panel" src={require("./NoPath.png")} alt="" />
          </div>
          {/* section two */}
          <div class="col-sm-12 col-md-6 ">
            <div className="">
              <img className="" src={require("./underline.png")} alt="" />

              <h1 className="fw-bold">
                Best Platform for the
                <br /> Technological Era
              </h1>
              <div>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam <br />
                nonumy eirmod tempor invidunt ut labore et dolore magna
                <br />
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo
                <br /> duo dolores et ea rebum.
                <br /> Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet
              </div>
              <div className="py-4">
                <span className="h5 fw-bold learn-about">
                  Learn About Our Success
                </span>
                <img className="mx-5 h1 " src={require("./icon.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
