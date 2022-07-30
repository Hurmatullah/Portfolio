const Contact = () => {
  return (
    <section
      class="section section-on-footer"
      data-background="images/backgrounds/bg-dots.png"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h3 class="section-title">Контактная информация</h3>
          </div>
          <div class="col-lg-8 mx-auto">
            <div class="bg-white rounded text-center p-5 shadow-down">
              <h4 class="mb-80">Контактная форма</h4>
              <form action="#" class="row">
                <div class="col-md-6">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="полное имя"
                    class="form-control px-0 mb-4"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="адрес электронной почты"
                    class="form-control px-0 mb-4"
                    required
                  />
                </div>
                <div class="col-12">
                  <textarea
                    name="message"
                    id="message"
                    class="form-control px-0 mb-4"
                    placeholder="Введите Сообщение Здесь"
                    required
                  ></textarea>
                </div>
                <div class="col-lg-6 col-10 mx-auto">
                  <button class="btn btn-primary w-100">отправить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
