import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Bize Ulaşın</h2>
            <b>
              <p>YOL HARİTASI:</p>
            </b>
            <b>
              {" "}
              <p>
                Eğitimin en önemli amacının ahlakın güzelleştirilmesi olduğunu
                düşünen İslam filozofu Gazali’nin ahlak eğitimine ilişkin
                anlayışının referans alındığı bu çalışmada, Kimyâ-yı Saâdet’te
                kullanılan eğitim ilke ve yöntemleri/teknikleri ile modern
                eğitim formları harmanlanarak yeni nesle uygun planlanacak ve
                sürdürülebilir bir yapıyla organize edilecektir
              </p>
            </b>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Adres:</h4>
                  <p>
                    AYenişehir Mh Şehit Göksel Doğan Cd No:31 42010 Meram/Konya
                    Türkiye
                  </p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>E mail:</h4>
                  <p>megaakademi@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Telefon:</h4>
                  <p>(0332) 503 09 69</p>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.5026909465237!2d32.476428999999996!3d37.8485267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0858ce5a37f91%3A0x1b9a0efaec632e04!2sMEGA%20Yeni%20Nesil%20E%C4%9Fitim%20Merkezi!5e0!3m2!1str!2str!4v1704807832685!5m2!1str!2str"
                  frameBorder="0"
                  style={{ border: "0", width: "100%", height: "280px" }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">İsminiz</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Telefon Numaranız</label>
                    <input
                      type="number"
                      className="form-control"
                      name="number"
                      id="number"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Konu</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Mesajınız</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Gönderiliyor...</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Mesajınız gönderildi.Teşekkürler!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Mesaj Gönder</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;