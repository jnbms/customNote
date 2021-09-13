import React from "react";
import styled from "styled-components";

const Div = styled.div`
    font-size: ${props => props.size}em;
    font-weight: ${props=> props.weight};
`

export default function Text(props){
    const {className, content, size, weight} = props;
    return (
        <Div
         {...props}
        >
            {content}
        </Div>
    );
}