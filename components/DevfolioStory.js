import Link from "next/link";
import Links from "./Links";
import FirstProject from "./devfolio/FirstProject";
import Image from "next/image";
import { memo } from "react";
import SecondProject from "./devfolio/SecondProject";
import ThirdProject from "./devfolio/ThirdProject";
import FourthProject from "./devfolio/FourthProject";

const DevfolioStory = () => {
  return (
    <>
      <p>
        I will tell how I learnt{" "}
        <b>
          skills needed for the job and how good I am at them through stories of
          different projects
        </b>
        .
      </p>
      <p>So lets get started.</p>
      <FirstProject />
      <SecondProject />
      <ThirdProject />
      <FourthProject />
      <h3>Soft skills</h3>
      <p>
        If i had to name a superpower which i have it would be listening. I
        enjoy learning from other people and stand up for my own opinions. I am
        a good team player and can work with anyone. I am also good at
        explaining complex things in simple terms.
      </p>
      <hr />
      <p>
        My story is not just about learning new things, but also about how I
        managed to build and deploy projects in a short span of time just{" "}
        <b>using my curiosity and willingness to learn</b>. I am confident that
        I can learn new things quickly and can be a valuable asset to your team.
      </p>
    </>
  );
};

export default memo(DevfolioStory);
