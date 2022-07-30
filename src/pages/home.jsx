const Home = () => {
  return (
    <div>
      <section className="hero-area bg-primary" id="parallax">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 mx-auto">
              <h2 className="text-white font-tertiary">
                Привет!
                <br /> Я Хурматулла Карими <br /> "программный инженер"
              </h2>
            </div>
          </div>
        </div>
        <div className="layer-bg w-100"></div>
        <div className="layer" id="l2">
          <img src="images/illustrations/dots-cyan.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l3">
          <img src="images/illustrations/leaf-orange.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l4">
          <img src="images/illustrations/dots-orange.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l5">
          <img src="images/illustrations/leaf-yellow.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l6">
          <img src="images/illustrations/leaf-cyan.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l7">
          <img
            src="images/illustrations/dots-group-orange.png"
            alt="bg-shape"
          />
        </div>
        <div className="layer" id="l8">
          <img src="images/illustrations/leaf-pink-round.png" alt="bg-shape" />
        </div>
        <div className="layer" id="l9">
          <img src="images/illustrations/leaf-cyan-2.png" alt="bg-shape" />
        </div>
        <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
          <li className="mb-3">
            <a className="text-white" href="https://themefisher.com/">
              <i className="ti-instagram"></i>
            </a>
          </li>
          <li className="mb-3">
            <a className="text-white" href="https://github.com/Hurmatullah  ">
              <i className="ti-github"></i>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
