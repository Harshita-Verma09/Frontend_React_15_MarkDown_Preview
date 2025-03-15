import React, { useState } from 'react';
import  ReactMarkDown  from "react-markdown";

const MarkDown = () => {
    const [data, setData] = useState("Welcome to MarkDown Previewer");

    return (
        <div style={{
            background: "black",
            display: "flex",
            flexDirection: "column",
            color: "white",
            height: "100vh"  // Full screen height
        }}>
            {/* Left Side - Input Box */}
            <div className="left" style={{
                border: "1px solid white",
                flex: 1,  
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div>
                    <h1>Simple Text</h1>
                    <textarea
                        value={data}   // Controlled input
                        onChange={(e) => setData(e.target.value)}
                        style={{
                            width: "70vw",
                            height: "40vh",
                            padding: "10px",
                            fontSize: "16px"
                        }}
                    />
                </div>
            </div>

            {/* Right Side - Markdown Preview */}
            <div className="right" style={{
                border: "1px solid white",
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div>
                    <h1>MarkDown Previewer</h1><br></br>
                    <ReactMarkDown>{data}</ReactMarkDown>

                </div>
            </div>
        </div>
    );
};

export default MarkDown;
