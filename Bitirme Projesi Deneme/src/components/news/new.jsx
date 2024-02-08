import "./News.css";
import img8 from "../../assets/img/8.jpeg";
import img9 from "../../assets/img/9.jpeg";
import img10 from "../../assets/img/1.jpeg";
import img11 from "../../assets/img/37.jpeg";
import img12 from "../../assets/img/3.jpeg";
import img13 from "../../assets/img/163.jpeg";

const News = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 style={{ marginTop: "60px" }}>-PROJELERİMİZ-</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="title">KOP DOĞA OKULU</p>
                </div>
                <img src={img8} alt="article-cover" />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="title">MEGA YAZILIM AKADEMİSİ</p>
                </div>
                <img src={img10} alt="article-cover" />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="title">TRAFİK EĞİTİM PARKI</p>
                </div>
                <img src={img9} alt="article-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginBottom: "50px" }}>
          <div className="col-sm-4">
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="title">BİLİM KURDU</p>
                </div>
                <img src={img12} alt="article-cover" />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="title">BİZİM ÇOCUK</p>
                </div>
                <img src={img13} alt="article-cover" />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="center">
              <div className="article-card">
                <div className="content">
                  <p className="title">YAZ SPOR OKULLARI</p>
                </div>
                <img src={img11} alt="article-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;