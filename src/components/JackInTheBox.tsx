import Reveal, { RevealProps } from "../Reveal";
import { jackInTheBox } from "../animations/specials";

type JackInTheBoxProps = Omit<RevealProps, "keyframes" | "css">;

const JackInTheBox: React.FC<JackInTheBoxProps> = props => {
  return <Reveal keyframes={jackInTheBox} {...props} />;
};

export default JackInTheBox;
