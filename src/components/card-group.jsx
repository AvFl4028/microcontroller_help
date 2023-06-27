import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord as SyntaxStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CardGroup(props) {
    return (
        <>
            <div className="card-group">
                <div className="card transparent">
                    <SyntaxHighlighter language="cpp" style={SyntaxStyle}>
                        {props.code}
                    </SyntaxHighlighter>
                </div>
                <div className="card transparent">
                    <img src={props.img} alt="" />
                </div>
            </div>
        </>
    )
}