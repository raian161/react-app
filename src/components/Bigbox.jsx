import React from "react";
import "../App.scss";

const Bigbox = (props) => {
  const handleChange = (e) => {
    props.setData(e.target.value);
  };
  const handleClick = () => {
    props.setPosts([...props.posts, props.data]);
  };
  return (
    <div className="bigbox" style={{ background: props.theme }}>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Add Now</button>
      {props.posts.map((item, index) => (
        <p key={index} style={{ color: "white" }}>
          {index + 1}. {item}
        </p>
      ))}
    </div>
  );
};

export default Bigbox;
