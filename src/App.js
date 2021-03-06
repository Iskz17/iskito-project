import "./App.css";
import Typewriter from "typewriter-effect";
import Kito from "./kito-nobg.png";
import ParticleBackground from "./particle";
import NewmorphismBox from "./Neumorphism/NeumorphismBox";
import GlassmorphismBox from "./Glassmorphism/GlassmorphismBox";
import "./Particle.css";

const App = () => {
  const headerItem = {
    minwidth: "0",
    height: "100%",
    background: "rgba(152, 194, 211, 0.555)",
    color: "white",
    fontSize: "0.6em",
    padding: "13px 3%",
    textAlign: "center",
  };

  return (
    <div className="App">
      <div
        id="parents div"
        style={{
          width: "100%",
          height: "100vh",
          position: "relative",
          boxShadow: "0 70px 40px -40px rgba(142, 197, 252, 0.4)",
          zIndex: 50,
          fontSize: "2rem",
        }}
      >
        <div
          id="bubble"
          style={{
            position: "absolute",
            // backgroundColor: "red",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <ParticleBackground />
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="blurContainer"></div>
        </div>

        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            fontSize: "1em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            color: "grey",
            paddingLeft: "10%",
            paddingRight: "10%",
            fontWeight: 700,
            //background: "red",
          }}
        >
          <div className="descriptionDiv">
            <span id="intro" className="introFont">{`Hi, I'm {Iskandar}`}</span>
            <div style={{ marginTop: "10px" }}></div>
            <span style={{ fontSize: "1em" }}>
              <span style={{ fontSize: "0.8em" }}>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  style={{ marginTop: "1000px" }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("I'm a web developer from Malaysia ????")
                      .pauseFor(1000)
                      .typeString("and currently based in Malaysia")
                      .deleteAll()
                      .typeString(
                        "I have an experience in {C# .net} and {React ??????}!! ??????????? "
                      )
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("This page is for experiment ??????????")
                      .pauseFor(1000)
                      .typeString("and also keeping important notes ?????????????")
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                />
              </span>
            </span>
          </div>
          <div className="pictureDiv">
            <img
              src={Kito}
              alt="profile pic"
              style={{
                width: "23rem",
                objectFit: "cover",
                position: "absolute",
                filter: "drop-shadow(0 30px 0.75rem rgba(0,0,0,0.3))",
                transition: ".5s ease",
              }}
            />
          </div>
        </div>
        <div
          id="header"
          style={{
            position: "fixed",
            width: "100%",
            height: "55px",
            boxShadow: "0px 30px 50px -20px rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            paddingRight: "10%",
          }}
        >
          <div style={{ ...headerItem }}>Home</div>
          <div style={{ ...headerItem }}>Profile</div>
          <div style={{ ...headerItem }}>Notes</div>
        </div>
        <div
          style={{
            width: "80px",
            marginLeft: "40px",
            //background: "black",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            flexWrap: "wrap",
            position: "absolute",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              background: "red",
              width: "100%",
              height: "50px",
              marginBottom: "5px",
            }}
            onClick={() => {
              alert("first is being clicked");
            }}
          ></div>
          <div
            style={{
              background: "red",
              width: "100%",
              height: "50px",
              marginBottom: "5px",
            }}
          ></div>
          <div
            style={{
              background: "red",
              width: "100%",
              height: "50px",
              marginBottom: "5px",
            }}
          ></div>
          <div
            style={{
              background: "red",
              width: "100%",
              height: "50px",
              marginBottom: "5px",
            }}
          ></div>
        </div>
      </div>
      <div
        id="parents div"
        style={{
          width: "100%",
          height: "100vh",
          background: "white",
        }}
      >
        <NewmorphismBox />
      </div>
      <div
        id="parents div"
        style={{
          width: "100%",
          height: "100vh",
          background: "white",
        }}
      >
        <div
          id="bubble"
          style={{
            position: "absolute",
            // backgroundColor: "red",
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
        >
          <ParticleBackground />
          <div
            style={{
              position: "absolute",
              zIndex: 100,
              width: "100%",
              height: "100%",
            }}
          >
            <GlassmorphismBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
