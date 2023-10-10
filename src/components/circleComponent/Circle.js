import { Image } from "react-native"
import styled from "styled-components"
import { colors } from "../../constants/colors"


export function Circle(){
    return (
        <FullCircular>

        </FullCircular>
    )
}


const FullCircular = styled.View`
width: 80px;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 40px;
border: 2px solid ${colors.bordersColor};
background-color: ${colors.firstColor}
`