import Image from "next/image";
import { WiDirectionRight } from "react-icons/wi";

import { person, frame1, frame2 } from "../assets";
import { motion } from "framer-motion";
const Article = () => {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.7 }}
      id="features"
      className="header__content section__padding"
    >
      <div className="header__content-text">
        <h4>THE GREAT MAN OF THE WEEK</h4>
        <p className="app__p">
          Faji Tobiloba is the 35th students&apos; union president of the
          university of Ilorin, an Apostle in the temple of innovations and
          ideas, he has made a lot of achievements and is still making
          tremendous innovations to help every student of the university of
          Ilorin. He is our great man of the week.
        </p>
        <button className="app__btn app__btn_puple ">
          Learn More About Our Programs <WiDirectionRight size={30} />
        </button>
        <div className="article__content-subsection_imgs">
          <Image src={frame1} width="247px" height="172px" alt="frame1" />
          <Image src={frame2} width="247px" height="172px" alt="frame2" />
        </div>
      </div>
      <div className="header__content-video">
        <Image src={person} width="489px" height="543px" alt="person" />
      </div>
    </motion.div>
  );
};

export default Article;
