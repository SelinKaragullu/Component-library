import React from "react"

export default function Badge ({color='gray', shape = "square", className="square"}) {
    return <span className={`${className} ${color} ${shape}`}
                 >
            Badge</span>

}