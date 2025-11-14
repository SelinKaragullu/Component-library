import React from "react"
import Icon from "./Icon.png";

export default function TestimonialContent ({children}) {
    return (
    <div className="textContainer">
      <img src={Icon} alt="testimonial-icon" />
      {children}
    </div>
    )}
    
    
