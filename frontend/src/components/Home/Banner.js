import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [input, setInput] = React.useState("");
  const [countInput, setCountInput] = React.useState(0);

  const onChangeHandleTitle = (ev) => {
    ev.preventDefault();
    setCountInput(countInput+1);
    const inputTitle = ev.target.value;
    setInput(ev.target.value);
    console.log('compare', input , inputTitle, ev.target.value);
    
    if (countInput + 1 >= 3 ) {
      props.onChangeHandleTitle(
        inputTitle,
        // 1 - pager
        (page) => agent.Items.all(inputTitle, page),
        // 1 - payload
        agent.Items.all(inputTitle)
      );
    }

    //like a new word after 
    if(inputTitle.length == 0){
      setCountInput(0);
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A Place to </span>
          <span id="get-part">get </span>

          <input
            // className="form-control form-control-lg"
            type="search"
            id="search-box"
            placeholder=" What is it that you truly desire ?"
            value={input}
            onChange={onChangeHandleTitle}
          />

          <span> the cool stuff</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
