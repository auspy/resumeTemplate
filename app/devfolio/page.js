import LightRays from "@/components/LightRays";
import DevfolioStory from "@/components/DevfolioStory";
import DevfolioResumeCard from "@/components/DevfolioResumeCard";
// import ShootingStars from "@/components/ShootingStars";

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
    salutation: "Hi Devfolio Team!",
    intro: (
      <p>
        I am <b>Kshetez Vinayak</b>, a 22 y/o developer living in <b>Haryana</b>
        , India who has been building projects for last 2 years.
        <br />
        <br />I am currently a <b>4th year BTech student in SRM</b>, and
        actively searching for a SDE role. When i saw this job posting a had to
        apply since this sounds like a dream job and once in a lifetime
        opportunity.
        <br />
        <br />
        And I want to try to convince you that I am a great fit for a role in
        your company through the projects I have built.
      </p>
    ),
    story: <DevfolioStory />,
  };
  return (
    <main className="h-screen w-screen fccc relative overflow-hidden">
      <LightRays imgClassName=" scale-[1.2] " opacity={0.8} style={{}} />
      {/* <ShootingStars /> */}
      <DevfolioResumeCard {...dummyResumeProps} />
    </main>
  );
}
