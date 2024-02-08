import "./WhyUs.css";
const WhyUs = () => {
  return (
    <div>
      {" "}
      <section id="whyUs">
        {/* <!-- Start why us top --> */}
        <div className="row">
          <div className="col-lg-12 col-sm-12">
            <div className="whyus_top">
              <div className="container">
                {/* <!-- Why us top titile --> */}
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="title_area">
                      <h2 className="title_two">NELER YAPIYORUZ?</h2>
                      <span></span>
                    </div>
                  </div>
                </div>
                {/* <!-- End Why us top titile -->
          <!-- Start Why us top content  --> */}
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="single_whyus_top wow fadeInUp">
                      <div className="whyus_icon">
                        <span className="fa fa-desktop ">
                          {" "}
                          <i className="bi bi-pc-display-horizontal icon"></i>
                        </span>
                      </div>
                      <h3>Teknoloji Desteği</h3>
                      <p>
                        YENİ NESİL EĞİTİM PROJESİ ile dijital bir çağda büyümüş
                        olan “yeni neslin” eğitim beklentilerine cevap veren
                        projeler.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="single_whyus_top wow fadeInUp">
                      <div className="whyus_icon">
                        <span className="fa fa-users">
                          <i className="bi bi-people icon"></i>
                        </span>
                      </div>
                      <h3>Bire Bir Eğitim</h3>
                      <p>
                        Alanında uzman eğitimcilerimiz ile 10 farklı dalda
                        etkileşimli öğrenme teknikleri ile bire bir eğitim
                        forsatı sunuyoruz{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="single_whyus_top wow fadeInUp">
                      <div className="whyus_icon">
                        <span className="fa fa-flask">
                          <i className="bi bi-backpack2 icon"></i>
                        </span>
                      </div>
                      <h3>Eğitim-Öğretim </h3>
                      <p>
                        Eğitim-öğretim bileşenlerinin iş birleştirilmesiyle,
                        değerleri eğitim açısından yardımcı olacak malzeme ve
                        materyal desteği sunmaktadır.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3">
                    <div className="single_whyus_top wow fadeInUp">
                      <div className="whyus_icon">
                        <span className="fa fa-support">
                          <i className="bi bi-info-circle icon"></i>
                        </span>
                      </div>
                      <h3>Branş Çeşitliliği</h3>
                      <p>
                        Alanında uzman hocalarımızın katılımcı ile görüşmesi
                        sonucu farkettiği yetenek ile bire bir ilerleme
                        sağlaması için farklı branşlarda eğitim sağlıyoruz.
                      </p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Why us top content  --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End why us top --> */}
      </section>
    </div>
  );
};

export default WhyUs;