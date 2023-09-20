import React, { useState } from "react";
import Avatar from "../Avatar/Avatar";
import User from "../User/User";

export default function ContactCard(props) {
  console.log(props);
  const [showAge, setShowAge] = useState(false);

  const clickAge = () => {
    setShowAge(!showAge);
  };
  return (
    <div className="contact-card">
      <Avatar src={props.avatarUrl} alt="profile" />
      <User
        name={props.name}
        email={props.email}
        showAge={showAge}
        clickAge={clickAge}
        age={props.age}
      />
    </div>
  );
}
