import { useEffect, useRef, useState } from "react";
import { ICONS } from "../../assets";
import GetStartedButton from "../../shared/Components/CustomGetStarted";
import GoTop from "../../shared/Components/CustomGoTop";
import LanguageInput from "../../shared/Components/CustomLanguageInput";
import SignInButton from "../../shared/Components/CustomSignIn";
import { FOOTER, MAIN, PLACEHOLDER } from "../helpers/constants";
import "./style.css";

const MainPage = () => {
  // const RenderList = (data:FooterType) => {
  //   const keys = Object.keys(data);
  //   return (
  //     <ul>
  //       {keys.map((item) => (
  //         <li className="listText" key={item}>{data[item]}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("goTopHidden");
  const refScrollUp = useRef<HTMLDivElement | null>(null);
  const handleVisibleButton = () => {
    const position = window.scrollY;
    setSrollPosition(position);
    if (scrollPosition > 50) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };
  const handleScrollUp = () => {
    if (refScrollUp.current) {
      refScrollUp.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });
  return (
    <>
      <div ref={refScrollUp}></div>
      <div id="landingPage">
        <div className="containerHeader">
          <header id="header">
            <div>
              <img src={ICONS.NetflixLogo} alt="" id="logo" />
            </div>
            <div className="flex">
              <LanguageInput />
              <SignInButton />
            </div>
          </header>
          <section id="section">
            <div id="sectionContainer">
              <h1 className="textSection title font">{MAIN.TITLE}</h1>
              <p className="textSection content">{MAIN.CONTENT}</p>
              <div>
                <form action="">
                  <h3 className="textSection description">
                    {MAIN.DESCRIPTION}
                  </h3>
                  <div className="flex2 emailInput">
                    <input
                      placeholder={PLACEHOLDER.EMAIL}
                      className="input"
                    ></input>
                    <div id="getStarted">
                      <GetStartedButton />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
        <div id="breaker"></div>
        <section id="section2">
          <div >
            <div onClick={()=>alert('div1')}>
              div1
              <div >
                div2
              </div>
            </div>
            <button onClick={()=>alert('1')}></button>
          </div>
        </section>
        <footer id="footer">
          <div className="footerContainer">
            <div>
              <div className="footerText">
                {FOOTER.QUESTION}
                <span id="number">{FOOTER.NUMBER}</span>
              </div>
            </div>
            <div>
              <ul className="flex footerList">
                <li className="listText">{FOOTER.FAQ}</li>
                <li className="listText">{FOOTER.HELP_CENTER}</li>
                <li className="listText">{FOOTER.ACCOUNT}</li>
                <li className="listText">{FOOTER.MEDIA_CENTRE}</li>
                <li className="listText">{FOOTER.INVESTER_RELATIONS}</li>
                <li className="listText">{FOOTER.JOBS}</li>
                <li className="listText">{FOOTER.WAYS_TO_WATCH}</li>
                <li className="listText">{FOOTER.TERMS_OF_USE}</li>
                <li className="listText">{FOOTER.PRIVACY}</li>
                <li className="listText">{FOOTER.COOKIES}</li>
                <li className="listText">{FOOTER.CORPORATE}</li>
                <li className="listText">{FOOTER.CONTACT}</li>
                <li className="listText">{FOOTER.SPEED}</li>
                <li className="listText">{FOOTER.LEGAL}</li>
                <li className="listText">{FOOTER.ONLY_ON}</li>
              </ul>
            </div>
            <div id="footerLanguageInput">
              <LanguageInput />
            </div>
            <div id="india">{FOOTER.NETFLIX_INDIA}</div>
          </div>
        </footer>
        <GoTop showGoTop={showGoTop} scrollUp={handleScrollUp} />
      </div>
    </>
  );
};

export default MainPage;
