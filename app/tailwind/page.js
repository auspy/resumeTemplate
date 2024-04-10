import LightRays from "@/components/LightRays";
import MyStory from "@/components/MyStory";
import ResumeCard from "@/components/ResumeCard";
import ShootingStars from "@/components/ShootingStars";

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
    salutation: "Hi Adam and Steve!",
    intro: (
      <p>
        I am <b>Kshetez Vinayak</b>, a 22 y/o developer living in <b>Haryana</b>
        , India who has been building projects for last 2 years.
        <br />
        <br />I am currently a <b>4th year BTech student in SRM</b>, and
        actively searching for a SDE role. When i saw this job posting a had to
        apply since this sounds like a dream job and once in a lifetime
        opportunity. Yes, I understand that this is outside the timezone you
        want and I am not even experienced.
        <br />
        <br />
        And still I want to try to convince you that I am a great fit for a role
        in your company.
        <br />
        <br />
        The time difference is not that big. I am willing to work at the time
        schedule tailwind labs operates in. And about my experience, I have been
        working on projects for the last 2 years and I have learned a lot in
        this time.
        <br />
        <br />I would really appreciate an opportunity to work with you and
        learn from you. I am willing to learn and improve everyday.
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
