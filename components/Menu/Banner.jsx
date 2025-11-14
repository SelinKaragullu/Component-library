import React from "react"

export default function Banner ({type, variant, title, message}) 
 {const icons = {
    success: "✅",
    warning: "⚠️",
    error: "❌",
    neutral: "ℹ️"
  }

return (
     <div className={`banner ${type} ${variant}`}>
     <div className="banner-icon">{icons[type]}</div>
     <div className="banner-text">
     <p className="banner-title">{title}</p>
     {variant === "multiline" && <p className="banner-message">{message}</p>}
     </div>
     </div>
     )
}

