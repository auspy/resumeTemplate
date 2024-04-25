import Image from "next/image";
import Links from "../Links";

const SecondProject = () => {
  return (
    <>
      <h3>
        First Production Deployment and Income : Food Delivery App for College
      </h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <li>
          <b>You've built and maintained websites before.</b> Since your work at
          Devfolio will be focused on the Devfolio website, performance
          benchmarking, and its maintenance, having similar prior experience is
          a big plus.
        </li>
        <li>
          <b>You can think about business constraints.</b> We want our engineers
          to be mindful of their choices, understand users, and think about the
          impact of their work on the bottom line.
        </li>
      </blockquote>
      <p>
        This project was the first time i needed to build an app and that too
        good enough for production. The first MVP built was ready in ~1 month
        and was tested by friends.
        <b>
          {" "}
          The backend was very bad and was not ready for production at any cost.{" "}
        </b>
        Managed to onboard 1 canteen owner using that MVP and started testing
        the app.{" "}
        <b>
          Rebuilt all backend functions again to optimise based on DB calls.
        </b>{" "}
        Significantly improved the app performance and UX and reduced number of
        times the app was hitting the DB by a lot.
        <br />
        <br />I also developed a <b> merchant website and app</b> for order
        management and delivery tracking based on merchant feedback, such as
        real-time delivery tracking and simplifying order acceptance.
        <br />
        <br />
        <b>Iteration 2</b> happened in Jan-Feb and improved cart UI/UX taking
        inspiraton from swiggy and zomato. This{" "}
        <b> improved number of conversions.</b>
        Ended this project in March 2022.
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
    </>
  );
};

export default SecondProject;
