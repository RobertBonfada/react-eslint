import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    height: 40vh;
    width: 40vw; 
    box-shadow: 1px 2px 30px 20px #b0b0b0;
    border-radius: 15px; 
    padding-top: 5%;
    margin-top: 2vh;
`;

export const Title = styled.h1`
    color: #000010;
    font-size: ${props => `${props.fontSize}px`};
    font-weight: Bold;

    span {
        font-size: 11px;
    }
`