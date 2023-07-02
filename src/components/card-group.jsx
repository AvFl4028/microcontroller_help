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

                    <div class="card-body">
                        <h5 class=" card_background">{props.title_card_one}</h5>
                        <p class="card-text title-center">{props.description_card_one}</p>
                    </div>
                </div>
                <div className="card transparent">
                    <img src={props.img} className='img' />
                    <div class="card-body">
                        <h5 class="card_background">{props.title_card_two}</h5>
                        <p class="card-text title-center">{props.description_card_two}</p>
                    </div>
                </div>
            </div>
        </>
    )
}