import Link from "next/link";

const FirstProject = () => {
  return (
    <>
      <h3>My First Project Ever: Studivia</h3>
      <blockquote className="mb-4">
        <h4>Your requirements:</h4>
        <ul>
          <li>
            <b> You are a fast learner.</b> Our tech stack will grow with time,
            so you need to be able to learn on the go and built solutions
            quickly.
          </li>
        </ul>
      </blockquote>
      <p>
        <b>In 2022, from not knowing anything about building</b>, to building a
        full fleged website and even deploying it within 2-3 months I fell in
        love with development. This was first time I was enjoying something
        other than playing games.
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
        <li>Google authentication using OAuth2.;</li>
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
      <div style={{ position: "relative", paddingBottom: "400px", height: 0 }}>
        <iframe
          src="https://www.loom.com/embed/ed5243e7af664e41aaa84cdd44c241d6?sid=670454aa-f5e5-4782-ac5a-0ee338d5e51d"
          frameBorder="0"
          allowFullScreen
          style={{
            maxWidth: "600px",
            position: "absolute",
            aspectRatio: "16/9",
            maxHeight: "400px",
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

export default FirstProject;
