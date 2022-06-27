import React from "react";

export default function Alert(props) {
  return (
    //check alert
   props.alert && <div>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.msg}</strong> : {props.alert.type}
      </div>
    </div>
  );
}
