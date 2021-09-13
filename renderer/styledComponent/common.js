import styled from "styled-components";

const Column = styled.div`
    height: 100%; width: 100%;
    display: flex; flex-direction: column;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
`;

// export default column;

const Row = styled.div`
    height: 100%; width: 100%;
    display: flex; flex-direction: row;
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
`

const Size = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
`

const Text = styled.div`
    font-size: ${props => props.size}em;
`

export {Column, Row, Size, Text};