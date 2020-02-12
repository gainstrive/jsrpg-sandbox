import React from "react";
// LINK TO CUSTOM CSS FILE FOR THIS COMPONENT
import "./CSS-FILE.css";

// CHANGE OBJECT TO NAME OF COMPONENT TO EXPORT
const OBJECT = () => {
    return (
      <div id="" className="">
            {/* ASCII Art goes inside String.raw`` */}
            {/* NOTE: CANNOT CONTAIN ` CHARACTERS */}
            <pre className="">
                {String.raw`
                    
                `}
            </pre>
        </div>
    )
}

// CHANGE OBJECT TO NAME OF COMPONENT TO EXPORT
export default OBJECT;