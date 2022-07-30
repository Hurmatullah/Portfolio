const Education = () => {
  return (
    // <!-- education -->
    <section class="section position-relative">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h3 class="section-title">Образование</h3>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3">
                <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p class="text-dark mb-1">2024</p>
                <h4>программная инженерия (Степень магистра)</h4>
                <p class="mb-0 text-light">
                  Санкт-Петербургский государственный университет
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3">
                <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p class="text-dark mb-1">2019</p>
                <h4>Информационная система (бакалавр)</h4>
                <p class="mb-0 text-light">Кабульский университет</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 mb-80">
            <div class="d-flex">
              <div class="mr-lg-5 mr-3">
                <i class="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
              </div>
              <div>
                <p class="text-dark mb-1">2014</p>
                <h4>Свидетельство о высшем образовании</h4>
                <p class="mb-0 text-light">Абдул Рахим Гафурзай</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="img-fluid edu-bg-image w-100"
        src="images/backgrounds/education-bg.png"
        alt="bg-image"
      />
    </section>
  );
};

export default Education;
