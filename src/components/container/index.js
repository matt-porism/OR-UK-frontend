const LeftRight = (props) => {

    return (
      <section className="linkbox">
          <div className="linkgrid">
        <div className="leftpane">
          {props.left}
        </div>
        <div className="rightpane">
          {props.right}
        </div>
        </div>
      </section>
    );
  }
  export default LeftRight