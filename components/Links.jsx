import Link from "next/link";

const Links = ({ links, heading = "Links:" }) => {
  return (
    <>
      <h4>{heading}</h4>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href} target="_blank" rel="noreferrer">
              {link.name}
            </Link>
            {link.desc && `${link.desc}`}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Links;
