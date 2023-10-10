import styled from "styled-components";
import { Circle } from "../circleComponent/Circle";
import { Text } from "react-native";
import { colors } from "../../constants/colors";

export function UserView(){
    return (
        <StyledView>
            <Circle />
            <Text>Olá fulanoide!</Text>
        </StyledView>
    )
}

const StyledView = styled.View`
width: 95%;
height: 120px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
background-color: ${colors.secondColor};
box-sizing: border-box;
border: 2px solid ${colors.bordersColor};
 border-radius: 10px;
`