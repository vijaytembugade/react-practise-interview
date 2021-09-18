// Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.
import React, { useEffect, useState } from "react";

const QueTen = () => {
  const [pswd, setPswd] = useState('');
  const [control, setControl] = useState("black");
  const [cursor, setCursor] = useState('');


  const muStyles = {
      border:"2px solid " + control,
  }

  function handleClick(){
      if(pswd.length < 10){
          setControl("red")
          setCursor("not-allowed")
      }else{
          setControl("green")
      }
  }

  return (
    <div>
      <input style={muStyles} type="text" onChange={(e) => setPswd(e.target.value)} />

      <div>
        <button styles={{cursor : cursor }}  onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
};

export default QueTen;
