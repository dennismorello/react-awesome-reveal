import * as ReactDOM from "react-dom";

import Fade from "../src/components/Fade";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <Section>
        <Fade cascade damping={0.1}>
          Mona de cojon
        </Fade>
      </Section>
      <Section>
        <Fade cascade>
          <ul>
            <li>First</li>
            <li>Second</li>
          </ul>
        </Fade>
      </Section>
      <Section>
        <Fade cascade>
          <h1>Title</h1>
          <h2>Subtitle</h2>
        </Fade>
      </Section>
      <Section>
        <Fade cascade direction="left">
          <p>Line 1</p>
          <p>Line 2</p>
        </Fade>
      </Section>
      <Section>
        <Fade cascade direction="bottom-left">
          <ul>
            <li>I enter first...</li>
            <li>...then comes my turn...</li>
            <li>...and finally you see me!</li>
          </ul>
        </Fade>
      </Section>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
