import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text404">404</h1>
              </div>

              <div className="contant_box_404">
                <p className="notfoundtext">PAGE NOT FOUND</p>
                <Link to={"/"}>
                  <button className="back-to-home-btn">Go to Home </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Error;
