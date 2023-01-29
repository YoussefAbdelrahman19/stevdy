import "./services.css";
function Services() {
  return (
    <>
      <div className="container  sevices">
        <div className="row ">
          {/* first section  */}
          <div className="co-sm-12 col-md-6">
            <img className="" src={require("./underline.png")} alt="" />
            <h1 className="py-4 best-business">
              The best business <br />
              solution for you
            </h1>
            <div className="lorem">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              <br />
              nonumy eirmod tempor invidunt ut labore et dolore magna <br />
              aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              <br /> duo dolores et ea rebum.
              <br /> Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet
            </div>
            <div className="py-4">
              <span className="h3 learn-about">Learn About Our Success</span>
              <img className="mx-5 h1 " src={require("./icon.png")} alt="" />
            </div>
          </div>
          {/* second section  */}
          <div className="col-sm-12 col-md-6">
            <div class="d-flex flex-row mb-3">
              <div class="p-2 ">
                <div>
                  <img
                    alt=""
                    className="icon"
                    src={require("./scale.png")}
                    srcset=""
                  />
                </div>
                <h4>Scale Your Activity</h4>
                <div>
                  <img className="" src={require("./underline.png")} alt="" />
                </div>
                <div className="lorem">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam
                  <br /> nonumy eirmod tempor invidunt ut <br />
                  labore
                </div>
              </div>
              <div class="p-2 ">
                <div>
                  <img
                    alt=""
                    className="icon"
                    src={require("./bootcamps.png")}
                    srcset=""
                  />
                </div>
                <h4>Bootcamps</h4>
                <div>
                  <img className="" src={require("./underline.png")} alt="" />
                </div>
                <div className="lorem">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam
                  <br /> nonumy eirmod tempor invidunt ut <br />
                  labore
                </div>
              </div>
            </div>
            <div class="d-flex flex-row  mb-3">
              <div class="p-2 ">
                {" "}
                <div>
                  <img
                    className="icon"
                    alt=""
                    src={require("./hq.png")}
                    srcset=""
                  />
                </div>
                <h4>Hight Quality</h4>
                <div>
                  <img className="" src={require("./underline.png")} alt="" />
                </div>
                <div className="lorem">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam
                  <br /> nonumy eirmod tempor invidunt ut <br />
                  labore
                </div>
              </div>
              <div class="p-2 ">
                {" "}
                <div>
                  <img
                    alt=""
                    className="icon"
                    src={require("./certified.png")}
                    srcset=""
                  />
                </div>
                <h4>Get Certifcation</h4>
                <div>
                  <img className="" src={require("./underline.png")} alt="" />
                </div>
                <div className="lorem">
                  Lorem ipsum dolor sit amet,
                  <br /> consetetur sadipscing elitr, sed diam
                  <br /> nonumy eirmod tempor invidunt ut <br />
                  labore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
