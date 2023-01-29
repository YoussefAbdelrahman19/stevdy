import "./reportDatails.css";
function ReportDetails() {
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row">
          {/* section one */}
          <div className="col-sm-12 col-lg-5 pt-5 section-one">
            <img className="" src={require("./underline.png")} alt="" />

            <h3 className="py-1 fw-bold best-platform">
              Best Platform for the
              <br /> Technological Era
            </h3>
            <div className="py-2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </div>
            <div className="py-3">
              <span className="h4 learn-about">Learn About Our Success</span>
              {/* <img className="mx-5 h6 " src={require("./icon.png")} alt="" /> */}
            </div>
          </div>

          {/* section two */}
          <div className="col-sm-12 col-lg-7">
            <img
              className="w-100 img-report"
              src={require("./NoPath.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportDetails;
