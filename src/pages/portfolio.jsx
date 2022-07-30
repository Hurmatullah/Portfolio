const Portfolio = () => {
  return (
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="section-title">Портфолио</h3>
          </div>
        </div>
        <div class="row shuffle-wrapper">
          <div class="col-lg-4 col-6 mb-4 shuffle-item">
            <div class="position-relative rounded hover-wrapper">
              <img
                src="images/1.jpg"
                alt="portfolio-image"
                class="img-fluid rounded w-100"
              />
              <div class="hover-overlay">
                <div class="hover-content">
                  <a class="btn btn-light btn-sm" href="#!">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-6 mb-4 shuffle-item">
            <div class="position-relative rounded hover-wrapper">
              <img
                src="images/2.png"
                alt="portfolio-image"
                class="img-fluid rounded w-100"
              />
              <div class="hover-overlay">
                <div class="hover-content">
                  <a class="btn btn-light btn-sm" href="#!">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-6 mb-4 shuffle-item">
            <div class="position-relative rounded hover-wrapper">
              <img
                src="images/3.png"
                alt="portfolio-image"
                class="img-fluid rounded w-100"
              />
              <div class="hover-overlay">
                <div class="hover-content">
                  <a class="btn btn-light btn-sm" href="#!">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-6 mb-4 shuffle-item">
            <div class="position-relative rounded hover-wrapper">
              <img
                src="images/4.png"
                alt="portfolio-image"
                class="img-fluid rounded w-100"
              />
              <div class="hover-overlay">
                <div class="hover-content">
                  <a class="btn btn-light btn-sm" href="#!">
                    view project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
