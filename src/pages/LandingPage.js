import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="block-6">
        <img
          className="bg-gradient-img-icon"
          alt=""
          src="/bggradientimg@2x.png"
        />
        <img className="bg-img-icon" alt="" src="/bgimg.svg" />
        <div className="text-block">
          <div className="text">
            <div className="div">
              Сделайте свой первый шаг к безопасному инвестированию
            </div>
          </div>
          <button className="bttn" onClick={()=>{console.log("request has been send")}}>
            <div className="frame">
              <div className="text1">Начать</div>
            </div>
            <div className="bttn-child" />
          </button>
        </div>
        <img className="img-icon" alt="" src="/img.svg" />
      </div>
      <div className="frame1">
        <div className="frame2">
          
          <div className="frame4">
            <div className="block-1">
              <div className="frame5">
                <div className="text-block1">
                  <div className="text4">
                    <div className="div1">
                      Мы поможем вам выгодно инвестировать!
                    </div>
                    <div className="text5">
                      <a
                        className="a"
                        href={`https://www.figma.com/file/6Noyh5yp83iXms3L4iW5pr?type=design&node-id=0-1&mode=design`}
                        target="_blank"
                      >{` `}</a>
                    </div>
                  </div>
                  <Link to="/dashboard">
                <button className="bttn">
                  <div className="text1">Начать</div>
                </button>
                </Link>
                </div>
              </div>
              <img className="frame-icon" alt="" src="/frame.svg" />
              <div className="bg-img">
                <div className="frame6">
                  <img className="circles-icon" alt="" src="/circles.svg" />
                  <div className="frame7">
                    <img
                      className="bitcoin-1-icon"
                      alt=""
                      src="/bitcoin1@2x.png"
                    />
                  </div>
                </div>
                <div className="frame8">
                  <img className="frame-icon1" alt="" src="/frame1@2x.png" />
                  <div className="frame9">
                    <img
                      className="litecoin-1-icon"
                      alt=""
                      src="/litecoin1@2x.png"
                    />
                  </div>
                  <img className="frame-icon2" alt="" src="/frame2.svg" />
                  <div className="frame10">
                    <div className="glass">
                      <img
                        className="glass-child"
                        alt=""
                        src="/rectangle-1480.svg"
                      />
                      <div className="frame11">
                        <div className="frame12">
                          <div className="mask-group">
                            <div className="mega">mega</div>
                          </div>
                        </div>
                      </div>
                      <img className="frame-icon3" alt="" src="/frame3.svg" />
                    </div>
                  </div>
                  <img
                    className="bg-gradient-img-icon1"
                    alt=""
                    src="/bggradientimg1@2x.png"
                  />
                  <img
                    className="bg-gradient-img-icon2"
                    alt=""
                    src="/bggradientimg2@2x.png"
                  />
                  <img className="frame-icon4" alt="" src="/frame4.svg" />
                  <img className="frame-icon5" alt="" src="/frame5.svg" />
                  <img className="frame-icon6" alt="" src="/frame6.svg" />
                </div>
              </div>
            </div>
            <div className="block-2">
              <img className="circles-icon1" alt="" src="/circles1.svg" />
              <div className="info-block card">
                <div className="text7">
                  <img className="img-icon1" alt="" src="/img1.svg" />
                  <div className="div2">Создавай</div>
                </div>
                <div className="bttn4">
                  <div className="text1">Начать</div>
                  <img className="iconarrow" alt="" src="/iconarrow.svg" />
                </div>
              </div>
              <div className="info-block1 card">
                <div className="text7">
                  <img className="img-icon1" alt="" src="/img2.svg" />
                  <div className="div3">Анализируй</div>
                </div>
                <div className="bttn4">
                  <div className="text1">Анализ</div>
                  <img className="iconarrow" alt="" src="/iconarrow.svg" />
                </div>
              </div>
              <img className="star-img-icon" alt="" src="/starimg.svg" />
              <div className="info-block2 card">
                <div className="text7">
                  <img className="img-icon1" alt="" src="/img3.svg" />
                  <div className="div3">Наблюдай</div>
                </div>
                <div className="bttn4">
                  <div className="text1">Изучить</div>
                  <img className="iconarrow" alt="" src="/iconarrow.svg" />
                </div>
              </div>
              <img className="star-img-icon1" alt="" src="/starimg1.svg" />
            </div>
          </div>
          <div className="frame13">
            <div className="block-3">
              <div className="text-block2">
                <div className="text13">
                  <div className="div1">
                    Платформа для мониторинга, супер-анализа и наблюдения за
                    сферой инвестиций
                  </div>
                </div>
                <Link to="/dashboard">
                <button className="bttn">
                  <div className="text1">Начать</div>
                </button>
                </Link>
              </div>
              <img className="star-img-icon2" alt="" src="/starimg2.svg" />
            </div>
            <div className="block-4">
              <img className="frame-icon7" alt="" src="/frame7@2x.png" />
              <div className="frame14">
                <img className="bg-img-icon1" alt="" src="/bgimg1.svg" />
                <div className="text-block3">
                  <div className="text">
                    <div className="div">
                      Круглосуточный доступ к полной службе поддержки клиентов в
                      режиме 7 дней в неделю
                    </div>
                  </div>
                  <div className="bttn8">
                    <div className="text1">Начать</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
