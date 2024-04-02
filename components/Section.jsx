const Section = ({ children, heading }) => {
  const commonProps = {
    className: "cardGrad p-6 flex flex-col gap-4 items-start w-full",
  };
  return (
    <>
      <div {...commonProps}>
        <h2>{heading}</h2>

        <div className="story flex flex-col gap-4">{children}</div>
      </div>
    </>
  );
};

export default Section;
