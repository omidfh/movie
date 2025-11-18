import React from "react";

const Card = (props: { className?: string; children: React.ReactNode }) => (
  <div className={`card ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

Card.Header = (props: { className?: string; children: React.ReactNode }) => (
  <div
    className={`card-header d-flex justify-content-between ${
      props.className ? props.className : ""
    }`}
  >
    {props.children}
  </div>
);

Card.Body = (props: { className?: string; children: React.ReactNode }) => (
  <div className={`card-body ${props.className ? props.className : ""}`}>
    {props.children}
  </div>
);

Card.Footer = (props: { children: React.ReactNode }) => (
  <div className="card-footer">{props.children}</div>
);

export default Card;
