import Link from "next/link";
import Section from "./Section";

const ResumeCard = ({ name, links, salutation, intro, story }) => {
  const commonProps = {
    className: "cardGrad p-6 flex flex-col gap-4 items-start w-full",
  };
  return (
    <div className="cardGrad scrollbar-hide !rounded-none overflow-y-scroll flex flex-col items-start gap-4 !backdrop-blur md:h-[90vh] md:w-[70vw]">
      {/* HEADER */}
      <div className="card cardHeader box !border-none p-4 fcc gap-2 sticky top-0 w100 z-10">
        <h1 className="">{name}</h1>
        <div className="flex gap-2">
          {Array.isArray(links) &&
            links.map((link, i) => (
              <Link key={i} href={link.href} target="_blank" rel="noreferrer">
                {link.name}
              </Link>
            ))}
        </div>
      </div>
      <div className="scrollbar-hide overflow-y-scroll p-4 gap-4 flex flex-col">
        {/* SALUTATIONS */}
        <div {...commonProps}>
          <h2>{salutation}</h2>
        </div>
        {/* ABOUT ME */}
        <Section heading={"Who am I?"}>{intro}</Section>
        {/* MY STORY */}
        <Section heading={"Projects I am proud of"}>{story}</Section>
        {/* REASON TO JOIN */}
        <Section heading={"Why I want to join your team?"}>
          <ul>
            <li>
              I am looking for a place where I can learn and grow as a
              developer.
            </li>
            <li>
              I enjoy using tailwind and find it very intuitive and easy to use.
              To be able to help other developers use it better would be a dream
              come true.
            </li>
            <li>
              I may not be the best developer out there, but I am willing to
              learn and improve everyday. My love for builing things is what
              drives me everyday to learn new things.
            </li>
          </ul>
        </Section>
        {/* WHAT FUTURE HOLDS */}
        <Section heading={"What we can work on in future"}>
          <blockquote>
            Along with all the amazing things you are working on, I have a few
            ideas that we can work on together.
          </blockquote>
          <ul>
            <li>
              I have worked as a UI/UX freelance designer in the past and can
              help in design and user experience.
              <ul className="ml-5 mt-1">
                <li>
                  Last project i worked on:
                  <Link href={"https://oni.exchange"}>
                    {" "}
                    ONI Exchange - A Defi platform
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              Along with creating a tool for designing color palettes we can
              create a web page to showcase all the components and make it super
              easy to change the theme.
            </li>
            <li>
              <b>I love to learn new tools.</b> After effects has been on my
              todolist for a long time. This could be a great opportunity to
              learn it.
            </li>
            <li>
              Most important thing, I am still in college and have no experience
              in the industry. So, I am super excited to work with such amazing
              folks and learn from them.
            </li>
          </ul>
        </Section>
        {/* AFTER HOURS */}
        <Section heading={"After Hours"}>
          <ul>
            <li>
              I also try to keep learning, for example I am currently enrolled
              in Harkirat's 1-100 Cohort and learning about System Design at a
              deeper level.
            </li>
            <li>
              I am planning to build my own ui library and contribute to
              shadcn/ui.
            </li>
            <li>
              Every night I spend 1-2 hour with parents too and just relax.
            </li>
            <li>
              I love my food sessions with my brother where we watch
              movies/anime and eat.
            </li>
          </ul>
        </Section>
        {/* OTHER PROJECTS */}
        <Section heading={"Other projects and internships"}>
          <ul>
            <li>
              <Link href={"https://thenamedrop.vercel.app"}>
                EthIndia 2023: NameDrop - Better Way To Connect With People an
                Event
              </Link>
            </li>
            <li>
              <Link href={"https://thetreasurehunt.vercel.app"}>
                Treasure Hunt Game based on Blockchain
              </Link>
            </li>
            <li>
              <b>Interconti Projects</b> : I worked on contract basis for
              Interconti Projects. Built and optimised 2 websites using
              wordpress.
            </li>
            <li>
              I joined{" "}
              <Link href={"https://100xdevs.com"}>Harkirat's Cohort</Link> and
              built a{" "}
              <Link href={"https://theskillz.vercel.app"}>
                course selling website
              </Link>{" "}
              during that course.
            </li>
            <li>
              <Link href={"https://transferplaylist.onrender.com"}>
                Transfer Playlist:
              </Link>{" "}
              A web app that allows you to transfer playlist from one youtube to
              spotify and vice versa.{" "}
              <Link
                href={
                  "https://www.loom.com/share/ef52e5e915ce459faddc6d09b5647fb8?sid=9e97422a-cb08-4808-a41c-876daeaed625"
                }
              >
                Working Video
              </Link>
            </li>
            <li>
              <Link href={"https://github.com/auspy/srmrepo"}>SRM Repo:</Link> A
              repository for research papers pulished by SRM students and
              faculty.{" "}
            </li>
          </ul>
        </Section>
        {/* EDUCATION */}
        <Section heading={"Education"}>
          <ul>
            <li>
              BTech with specialisation in Data Science and Artificial
              Intelligence from SRM University, Haryana
            </li>
            <li>
              12th from GD Goenka Internaltional School, Haryana with{" "}
              <b>95% marks</b> in CBSE board
            </li>
          </ul>
        </Section>
        {/* ENDING */}
        <hr />
        <p>
          There is a bunch more I would love to talk about, but I hope I already
          convinced you enough to start a conversation. I am looking forward to
          your response / feedback!
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
