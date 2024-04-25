import Links from "../Links";

const ThirdProject = () => {
  return (
    <>
      <h3>
        Mastering React + Typescript + Tailwind CSS + GraphQL : Cllgnotes.com
      </h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <li>
          Our frontend tech stack consists of Javascript, HTML, CSS, React,
          Redux, Next.js, GraphQL, and many other open-source tools as well.
        </li>
      </blockquote>
      <p>
        <b>In mid of 2023 I joined Web Dev Cohort</b> and decided to implement
        many techs I came to know about. So while building my{" "}
        <b>univiversity's minor project</b>, I decided to learn{" "}
        <b>
          Nextjs, GraphQl using Apollo, monorepo(turborepo), typescript,
          MongoDB, zod and tailwind CSS
        </b>
        . A completely new tech stack for me.
      </p>
      <p>Few things I learnt:</p>
      <ul>
        <li>Nextjs concepts along with nextjs middleware</li>
        <li>
          GraphQL queries and mutations.{" "}
          <b>Using gql with server components.</b>
        </li>
        <li>Monorepo using TurboRepo</li>
        <li>
          <b>Search index and autocomplete</b> using MongoDB Atlas.
          <details>
            <summary className="mt-4">
              Tweet with working video regarding this.
            </summary>
            <blockquote>
              <p lang="en" dir="ltr">
                Recently built an AUTOCOMPLETE SEARCH with HIGHLIGHTS using{" "}
                <a href="https://twitter.com/MongoDB?ref_src=twsrc%5Etfw">
                  @MongoDB
                </a>{" "}
                atlas search index. <br />
                <br />
                Lemme know if you have any questions. Happy to help
                <br />
                <br />I have used algolia as well wanted to try mongo this time.
                any other search libs you use?
                <br />
                <br />
                1/2{" "}
                <a href="https://t.co/TDajaspXbl">pic.twitter.com/TDajaspXbl</a>
              </p>
              &mdash; Kshetez Vinayak (@KshetezVinayak){" "}
              <a href="https://twitter.com/KshetezVinayak/status/1773325716777468114?ref_src=twsrc%5Etfw">
                March 28, 2024
              </a>
            </blockquote>
          </details>
        </li>
      </ul>
      {/* <h4>
      Built an Algorithm which made searching through text in images possible:
    </h4>
    <p>
      My minor project is finding and exploring previous year university
      papers very easy. So for this I managed to accumulate 300+ papers.
    </p>
    <p>
      Now entering each paper in database and mapping course, department,
      subject, subject code, and all other info to that paper manually is very
      time taking process. So i decided to{" "}
      <b>automate it using the AI and OCR.</b>
    </p>
    <p>
      This algorithm i wrote takes pdf files of 120+ pages(this is how all
      papers were collected) as input to find out{" "}
      <b>where each paper starts and where it ends</b>. After taking out 1
      exam sheet, it{" "}
      <b>
        splits the paper evenly by finding correct splitting position without
        cutting text
      </b>{" "}
      as each page had 2 papers.
    </p>
    <p>
      After splitting I used OCR to convert the image to text and then used AI
      to map data like course, department, subject etc. All this data was then
      stored in <b>MongoDB and image was stored in cloudinary</b>.
    </p>
    <p>
      This made searching for papers very easy. Users can now filter paper by
      course, department, subject, subject code, year, semester, etc. and even
      search papers based on questions in the paper.
    </p> */}
      <Links
        links={[
          { name: "Github", href: "https://github.com/auspy/cllgnotes" },
          {
            name: <>Website : </>,
            desc: "This is deployed on render so it takes upto 1 min to boot up the free server. Yup, I know, will be buying pro when I get some money.",
            href: "https://cllgnotes.com",
          },
        ]}
      />
      <h4 className="mb-4">Video showcasing working of project:</h4>
      <div style={{ position: "relative", paddingBottom: "400px", height: 0 }}>
        <iframe
          src="https://www.loom.com/embed/1607587bec6840eda17960a07d552375?sid=23c2c405-ee0e-48d5-a9ba-b3dfb5873627"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            maxHeight: "400px",
            maxWidth: "600px",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </>
  );
};

export default ThirdProject;
