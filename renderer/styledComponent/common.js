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
const Space = styled.div`
    margin: ${props => props.margin}em;
    padding: ${props => props.padding}em;
`
const Button = styled.div`
    height: 100%; width: 100%;
    border: 1px solid;

`
const Center = styled.div`
    height: 100%; width: 100%;
    display: grid; place-items: center;
`

// 나중에 레이아웃/수치 관련을 제외한 컴포넌트 관련 값은 JSX 파일로 리팩토링하도록
// layout과 수치를 직접 입력하는 컴포넌트도 분리하여 statefull/ sateless로 구분
// 레이아웃과 수치는 className을 상속받을 필요가 없다.

// 레이아웃 관련 값은 HEIGHT/WIDTH 100%를 상속한다.
// SIZE -> LAYOUT 순으로 작성된다.
// LAYOUT -> SIZE 순으로 작성이 순서가 깔끔하므로 방법을 찾아보도록.
export {Column, Row, Size, Space, Center};
export { Text, Button};