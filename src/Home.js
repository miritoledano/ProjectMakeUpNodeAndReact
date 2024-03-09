import "./Home.css";
 export const Home = () => {
  return (
    <>
      <video className="video" loop width={"100%"} height={"500px"} autoPlay>
        <source src="/promo.mp4" type="video/mp4" />
      </video>
      <div className="all-about">
        <div className="about">
          <img className="images" src="/makeup.png" alt="4"></img>
          <div className="text">
            <h2>SISLEY-PARIS</h2>
            <p className="text2">
              Renowned for fusing innovative formulas with sensorial
              experiences, SISLEY-PARIS enhances any (and every) make up look.
              Doing just that is the NEW Phyto-Teint Perfection Foundation, with
              a matte, high-coverage formula.
            </p>
          </div>
        </div>

        <div className="about">
          <div className="text">
            <h2>SISLEY-PARIS</h2>
            <p className="text2">
              Renowned for fusing innovative formulas with sensorial
              experiences, SISLEY-PARIS enhances any (and every) make up look.
              Doing just that is the NEW Phyto-Teint Perfection Foundation, with
              a matte, high-coverage formula.
            </p>
          </div>
          <img className="images2" src="/maskara.png" alt="3"></img>
        </div>
        <div className="imgLast">
  <img className="imggLast" src="/1.png" alt="1"/>
  </div>
  
      </div>
    </>
  );
};

export default Home;