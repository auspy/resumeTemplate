import Link from "next/link";
import Section from "./Section";
import Links from "./Links";

const DevfolioResumeCard = ({ name, links, salutation, intro, story }) => {
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
              I enjoy paricipating in hackathons and building projects myself. I
              know how great it feels to build something from scratch and see it
              come to life within a day and that too with a team. I want to help
              others by providing access to the same feeling.
            </li>
            <li>
              I may not be the best developer out there, but I am willing to
              learn and improve everyday. My love for builing things is what
              drives me everyday to learn new things.
            </li>
          </ul>
        </Section>
        {/* GIven QUESION */}
        <Section
          heading={
            "What's the hardest thing you've made, what problems did you face, and how did you overcome them?"
          }
        >
          <ul>
            
            <h4>
              Built an Algorithm which made searching through text in images
              possible:
            </h4>
            <p>
              My minor project is finding and exploring previous year university
              papers very easy. So for this I managed to accumulate 300+ papers.
            </p>
            <p>
              Now entering each paper in database and getting course,
              department, subject, subject code, and all other info from that
              paper manually is very time taking process. So i decided to{" "}
              <b>automate it using the AI and OCR.</b>
            </p>
            <h4 className="mt-5">Problems faced:</h4>
            <ul>
              <li>
                Each A4 sheet had 2 papers so it was difficult to read for OCR.
                They needed to be perfectly split without cutting any text.
                Pages were not evenly divided so had to find perfect spot.
              </li>
              <li>
                To be able to be read properly they must be in correct rotation
                before and after splitting.
              </li>
              <li>
                All exams were in single pdf and starting, ending points for a
                single exam were not defined. So had to split those pages from
                entire pdf.
              </li>
            </ul>
            <h4 className="mt-5">How I overcame them:</h4>
            <ul>
              <li>
                To find the perfect splitting spot i used RGB pixel colors and
                split based on continuous white portion.
              </li>
              <li>
                To find the correct rotation, i read the text on paper using OCR
                and rotated till a proper word for found.
              </li>
              <li>
                Read the text on paper and stopped reading when exam heading was
                found.
              </li>
            </ul>
            <p>
              This made searching for papers very easy. Users can now filter
              paper by course, department, subject, subject code, year,
              semester, etc. and even search papers based on questions in the
              paper.
            </p>
          </ul>
        </Section>
        {/* WHAT FUTURE HOLDS */}
        <Section heading={"My Unfair Advantage"}>
          <ul>
            <li>
              I have worked as a UI/UX freelance designer for 6 months and have
              built 40+ websites. This has given me a good sense of design and
              how to make a website look good.
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
            {/* <li>
              A Food Delivery App with merchant interface and 350+ users.
              <Links
                links={[
                  { name: "Project Video", href: "https://t.co/9ytc1Hy59o" },
                  {
                    name: "View on Play Store",
                    href: "https://play.google.com/store/apps/details?id=com.auspy.collegecanteen",
                  },
                ]}
              />
            </li> */}
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

export default DevfolioResumeCard;
