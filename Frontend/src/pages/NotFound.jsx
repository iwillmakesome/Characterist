
import styled from "styled-components";
import {DEFAULT_HEIGHT, colors} from "../styles/contants.js";
import {Link} from "react-router-dom";

export default function NotFound(){
    return<>
        <StyledNotFound>
            <h1>404 Not Found!!</h1>
            <Link to={"/"}>Go To Main</Link>
        </StyledNotFound>
    </>
}

const StyledNotFound = styled.div`
    height: ${DEFAULT_HEIGHT};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    h1{
        color: white;
        font-size: 2em;
        font-weight: bolder;
    }
    a{
        margin-top: 2em;
        padding: 5px;
        color: white;
        font-size: 1em;
        border-radius: 5px;
        background: ${colors.baseColor2};
    }
`
