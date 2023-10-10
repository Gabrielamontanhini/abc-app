import { Text, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "../../constants/colors"
import { FontAwesome5 } from "@expo/vector-icons"

export function Card({data}){
    return (
        <StyledCard>
            <Text>{data.label}</Text>
            <FontAwesome5 name="arrow-right" size={24} color={colors.bordersColor}/>
        </StyledCard>
    )
}

const StyledCard = styled.View`
min-width: 300px;
height: 100px;
box-sizing: border-box;
border: 2px solid ${colors.bordersColor};
border-radius: 10px;
margin-top: 15px;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
background-color: ${colors.thirdColor}
`