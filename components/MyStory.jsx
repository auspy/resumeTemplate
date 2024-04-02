import Image from "next/image";
import Link from "next/link";
import Links from "./Links";

const MyStory = () => {
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
      <p>
        I am a <b>22 y/o developer👨‍💻</b> living with my nuclear family in
        Haryana, India and here is my story.
      </p>
      <h3>Direct Dive : Backend in Nodejs , MySQL for DB and AWS to deploy</h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <ul>
          <li>
            A server side programming languages, preferably Nodejs, Deno or
            python in your arsenal.
          </li>
          <li>
            An extremely good understanding of relational databases (MySQL,
            PostgresSQL) or NoSQL (Redis).
          </li>
        </ul>
      </blockquote>
      <p>
        <b>In 2022, from not knowing anything about building</b> a website
        (except that we need HTML, CSS and JS to do so), to building a full
        fleged website and even deploying it within 2-3 months I fell in love
        with development. This was first time I was enjoying something other
        than playing games.
      </p>
      I learnt about:
      <ol type="">
        <li>HTML, CSS, JS</li>
        <li>Dom manipulation using javascript</li>
        <li>
          Sending data to and fetching data from backend, didn't even knew it
          was called REST API back then.
        </li>
        <li>Sending data to and fetching data from backend</li>
        <li>Google authentication using OAuth3.0</li>
        <li>Deploying both backend and database using AWS</li>
      </ol>
      <div>
        {" "}
        Most Important of all, I learnt <b>how to learn new things quickly</b>,
        use
        <b> stackoverflow and google</b>, and <b>read documentations</b>. This
        gave a lot of confidence in my development abilities. Since then I have
        built 10+ projects and have been learning new things everyday. If you
        are curious, here is my first project:{" "}
        <Link href={"https://github.com/auspy/studivia"}>Github</Link>
      </div>
      <h4 className="mb-4">Video showcasing working of project:</h4>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.loom.com/embed/ed5243e7af664e41aaa84cdd44c241d6?sid=670454aa-f5e5-4782-ac5a-0ee338d5e51d"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <h3>
        First Production Deployment and Income : Learning new concepts and
        debugging components
      </h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <ul>
          <li>
            You can articulate complicated technical concepts clearly and learn
            coding languages if needed.
          </li>
          <li>Ability to get under the hood and debug/tune components.</li>
        </ul>
      </blockquote>
      <p>
        <b>After my exams in April, 2022</b> I dove straight into another
        project which was <b>Food Delivery App for College Canteens</b>. I found
        that React Native easier as compared to flutter so, in 1-2 months I
        built a MVP using it.{" "}
        <b>
          Managed to onboard 1 canteen owner and started testing the app from
          october.{" "}
        </b>
        I also developed a merchant website and app for order management and
        delivery tracking based on merchant feedback, such as real-time delivery
        tracking and simplifying order acceptance. Unfortunately, the project
        ended in April 2023 when the merchant left the college.
      </p>
      During this time, I learnt a lot:
      <ul>
        <li>
          Tested and improved the app based on <b>user feedback</b>
        </li>
        <li>
          Gained valuable insights into <b>product launching and marketing</b>
        </li>
        <li>
          Tech stack like firestore, firebase functions, google maps api, paytm,
          razorpay gateways, twilio for whatsapp and sms notifications, react
          native, react and so on
        </li>
        <li>
          <b>Debugging</b> React Native for Android and iOS. This sometimes
          consumed entire days.
        </li>
        <li>
          <b>Deploying on both Ios and Android</b>. Ios was a bit difficult as
          compared to android due to all those security checks.
        </li>
        <li>
          <b>Tested payment gateways</b> like Paytm and Razorpay. Came to know
          how important it is to test payment gateways properly and importance
          of
          <b>webhooks in payment gateways</b>.
        </li>
      </ul>
      <h4>Github contributions chart for food delivery app: </h4>
      <blockquote className="text-sm block normal-case text-text mt-1 tracking-normal">
        Note: This does not include merchant website nor secure backend code.
      </blockquote>
      <Image
        src={"/collegeCanteen.png"}
        alt="github progress"
        width={400}
        height={400}
        className="w-full"
      />
      <Links
        links={[
          { name: "Project Video", href: "https://t.co/9ytc1Hy59o" },
          {
            name: "Android",
            href: "https://play.google.com/store/apps/details?id=com.auspy.collegecanteen",
          },
        ]}
      />
      <h3>REST/GraphQL APIs + React + Next.js</h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <li>
          Understanding of REST/GraphQL APIs, and relevant frameworks to build
          them in the language of your choice.
        </li>
        <Image
          src={"/fuzeHiring.png"}
          alt="github progress"
          width={400}
          height={400}
          className="w-full"
        />
      </blockquote>
      <p>
        <b>In mid of 2023 I joined Harkirat Cohort</b> and decided to implement
        many techs he was talking about. So for my <b>minor project</b>, I
        decided to learn{" "}
        <b>
          Nextjs, GraphQl using Apollo, monorepo(turborepo), typescript,
          MongoDB, zod and tailwind
        </b>
        . A completely new tech stack for me.
      </p>
      <p>Few things I learnt:</p>
      <ul>
        <li>Nextjs middleware</li>
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
      <h4>
        An Algorithm which made searching through text in images possible:
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
      </p>
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
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src="https://www.loom.com/embed/1607587bec6840eda17960a07d552375?sid=23c2c405-ee0e-48d5-a9ba-b3dfb5873627"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
      <h3>Web 3 Experience</h3>
      <div>
        Since you are a blockchain based company, I would like to share my
        experience in web3. I have participated in EthIndia 2023 and many web3
        based hackathons. Here are few projects I built:
        <ul className="mt-4">
          <li>
            <Link href={"https://thenamedrop.vercel.app"}>
              EthIndia 2023: NameDrop - Better Way To Connect With People in
              Event
            </Link>
          </li>
          <li>
            <Link href={"https://thetreasurehunt.vercel.app"}>
              Treasure Hunt Game based on Blockchain
            </Link>
          </li>
        </ul>
      </div>
      <h3>Redis and Teamwork</h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <li>
          An extremely good understanding of relational databases (MySQL,
          PostgresSQL) or NoSQL (Redis).
        </li>
      </blockquote>
      <p>
        In 2024, I decided to build a connection platform for developers. We
        already had a means of marketing and testers i.e, students in Harkirat's
        Cohort and he himself was willing to repost meaningful tweets. So I
        decided to build a platform where developers can connect with each other
        and share their projects.
      </p>
      <p>
        I was the <b>lead developer and designer</b> in this project and managed
        to get 2 other developers to work with me. We built the platform in 2
        months and deployed it on vercel.
        <Link href={"https://www.devclans.com/about"}> The Team </Link>
      </p>
      <p>
        This time i focused a lot on <b>security and performance</b> as this was
        a platform which will be built for developers. For this we used{" "}
        <b>Redis for caching data</b> and <b>zod for validation</b> in every api
        and even in frontend forms. To prevent misuse of the platform, we used{" "}
        <b>upstash for ratelimiting</b>.
      </p>
      <p>
        Important thing about cache is that it should be <b>consistent</b> and
        <b> stale data should be removed</b>. So to ensure this, we utilized a{" "}
        <b> global cache </b>
        alongside <b>separate keys for data sets</b>. For example, we have a key
        dedicated to user search information and another for each user's data.
        When a user updates their data, we only update the specific user data
        key, not the search key. While this adds complexity to the cache, it
        maintains consistency and simplifies invalidation using{" "}
        <b>Redis's built-in expiry features</b>. And to{" "}
        <b>reduce the number of requests for each update</b> we implemented
        <b> redis pipeline</b>.
      </p>
      <div>
        Example of an api:
        <details>
          <summary className="mt-4">Updating a user</summary>
          <pre>
            {`
import { UserModel } from "@/mongodb/models";
import { NextRequest, NextResponse } from "next/server";
import {
  zodMongoId,
  zodUserFormSchemaObj,
  zodUserFormSuperRefine,
} from "@/zod/zod.common";
import { UserFormProps } from "@/types/mongo/user.types";
import { Types } from "mongoose";
import dbConnect from "@/lib/dbConnect";
import updateAllCache from "@/redis/updateUserCache";

export async function POST(
  req: NextRequest,
  { params }: { params: { user: string } },
  res: NextResponse
) {
  console.log("Updating user profile...");
  // Ensure the user is authenticated
  try {
    await dbConnect();
    const body = await req.json();
    const user = params?.user;
    const { data }: { id: string; data: UserFormProps } = body;
    const userDetails = zodUserFormSchemaObj
      .partial()
      .superRefine(zodUserFormSuperRefine)
      .parse(data);
    console.log("User details:", userDetails);
    const userId = zodMongoId.parse(user, {
      path: ["id"],
      errorMap: (issue) => {
        if (issue.code === "custom") {
          return { message: issue.message || "Invalid ID" };
        }
        return { message: "Invalid user ID" };
      },
    });
    console.log("User ID:", userId);
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: new Types.ObjectId(userId) },
      { $set: userDetails },
      { new: true }
    );
    console.log("Updated user profile:", updatedUser);
    // clear the cache if exists
    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    console.log("Update user data cache...");
    await updateAllCache(userId, updatedUser);
    console.log("User data cache updated");
    // we can also add the data here in cache
    return NextResponse.json({ success: true });
  } catch (error: any) {
    // console.error("Error updating user profile:", error);
    console.error("Error message:", error?.message);
    console.error("Zod parse error message:", error?.issues?.[0]?.message);
    return NextResponse.json(null, {
      status: 500,
      statusText:
        error?.issues?.[0]?.message ||
        error?.message ||
        "Error updating user profile",
    });
  }
}`}
          </pre>
        </details>
      </div>
      <Links links={[{ name: "Website", href: "https://devclans.com" }]} />
      <h3>Planning to learn</h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <li>
          Strong skill in documenting APIs to be used by businesses around the
          world.
        </li>
        <li> Strongly practice writing unit and integration tests.</li>
      </blockquote>
      <p>
        I have no experience in writing APIs and writing tests. I am ready to
        learn them if I am given a chance.
      </p>
      <h3>Soft skills</h3>
      <p>
        I enjoy engaging in lengthy discussions about specific topics, where I
        can freely discuss and even argue my opinions. However, I am also open
        to changing and adapting my opinions based on new information. If I were
        to name a superpower I possess, it would be my ability to listen
        attentively. If i had to name a superpower which i have it would be
        listening.
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

export default MyStory;