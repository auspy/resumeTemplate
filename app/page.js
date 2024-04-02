import LightRays from "@/components/LightRays";
import MyStory from "@/components/MyStory";
import ResumeCard from "@/components/ResumeCard";
import ShootingStars from "@/components/ShootingStars";
import Link from "next/link";

export default function Home() {
  const dummyResumeProps = {
    name: "Kshetez Vinayak",
    links: [
      { name: "GitHub", href: "https://github.com/auspy" },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/kshetez-vinayak/",
      },
      {
        name: "Twitter",
        href: "https://x.com/kshetez-vinayak/",
      },
    ],
    salutation: "Hi, Srijan And John!",
    intro: (
      <p>
        I am <b>Kshetez Vinayak</b>, a developer living in <b>Haryana</b>, India
        who has been building projects for last 2 years.
        <br />
        <br />I am currently a <b>4th year BTech student in SRM</b>, and not
        actively searching for a job. However when i saw this job posting a had
        to apply since this sounds like a dream job and once in a lifetime
        opportunity. I hear you, I know what you think! Geez, he doesn't even
        have any real world experience! But, since you are here, maybe you can
        give me a chance to prove myself.
        <br />
        <br />
        That being said lets go to my story and why i think we are a great fit
        for each other.
      </p>
    ),
    story: <MyStory />,
  };
  return (
    <main className="h-screen w-screen fccc relative overflow-hidden">
      <LightRays imgClassName="scale" opacity={0.8} style={{}} />
      <ShootingStars />
      <ResumeCard {...dummyResumeProps} />
    </main>
  );
}
