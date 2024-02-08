import "./Footer.css";

const Footer = () => {
  return (
    <div className="test">
      <footer className="footer-distributed">
        <div className="container">
          <div className="footer-left">
            <h3>
              Meram<span> Mega Akademi</span>
            </h3>

            <p className="footer-links">
              <a href="#" className="link-1">
                ANASAYFA
              </a>

              <a href="#">HAKKIMIZDA</a>

              <a href="#">HABERLER</a>

              <a href="#">İLETİŞİM</a>
            </p>

            <p className="footer-company-name">MERAM BELEDİYESİ PROJESİ</p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>Yenişehir Mh Şehit Göksel Doğan Cd No:31 42010</span>
                Meram/Konya Türkiye
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>(0332) 503 09 69</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:support@company.com">megaacademy@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p className="footer-company-about">
              <span>MEGA Yeni Nesil Eğitim Merkezi</span>
              Hedeflerimiz:Ahlaki karakterin hayat tecrübeleri ile bireyin
              kişiliğine ve kapasitesine işlenmesini gerçekleştirmektir
            </p>

            <ul className="footer-icons">
              <li>
                {" "}
                <a
                  className="icons"
                  href="https://www.instagram.com/MeramGelisim/?ysclid=lr6l456sd276073458"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="icons"
                  href="https://www.facebook.com/MeramGelisim/"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="icons"
                  href="https://twitter.com/i/flow/login?redirect_after_login=%2FMeramGelisim"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="icons"
                  href="https://www.youtube.com/channel/UCTzwzDbnQjupoqdcLO7NIKA"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;