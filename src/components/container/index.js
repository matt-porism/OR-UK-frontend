const LeftRight = ({left, right}) => {
  const leftPane=(
    <div className="leftpane">
      {left}
    </div>
  )

  const rightPane = right ? (
    <div className="rightpane">
      {right}
    </div>
  ) : null;

  return (
    <section className="linkbox">
      <div className="linkgrid">
        {leftPane}
        {rightPane}
      </div>
    </section>
  );
}
export default LeftRight