import "./About.css";
import img5 from "../../assets/img/dataFile-1701160011372.jpeg";
const About = () => {
  return (
    <div>
      {" "}
      <section id="aboutUs">
        <div className="container">
          <div className="row">
            {/* <!-- Start about us area --> */}
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="aboutus_area wow fadeInLeft">
                <h2 className="titile">Meram Mega Akademi Nedir?</h2>
                <p>
                  Toplumun hayatındaki ilerleme ve aralıkların azaltılması için
                  bir neslin kendinden sonraki nesle aktaracağı deneyim ve
                  birikimlerle mümkün olacağı bilinen temel bir gerçektir.
                  Günümüzde giderek karmaşıklaşan bilgi ve saklanabilen ve bu
                  bilgilerin hızlı değişimine ayak uydurabilen yetiştirilmesine
                  ihtiyaç duyulmaktadır. Bu yetenek YENİ NESİL EĞİTİM PROJESİ
                  ile hem dijital bir çağda doğmuş ve büyümüş olan “yeni neslin”
                  yani z kuşağı ve Alfa kuşağının farklılaşan eğitim
                  beklentilerine cevap vermek hem de önceki nesillerin kültürel
                  değişimini gerçekleştirecek ve nesiller arası ilişkiyi
                  kuvvetlendirecek “yeni” bir çalışmadır. Temel eğitim, orta
                  öğretim, yüksek öğretim kurumları, sivil toplum örgütleri ve
                  meslek birliklerinin birleştirilmesinde karakter eğitimi
                  gerçekleştirilecektir.Meram Gelişim Akademisinin devamı olan
                  MEGA en büyük anlamına gelmektedir. Bu kelimenin tam anlamıyla
                  MEGA kaybı, tipik olarak hitap ettiği hedef kitlenin
                  genişliğine ve içeriğinin büyüklüğüne de vurgu yapmaktadır.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="newsfeed_area wow fadeInRight">
                <img src={img5} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;