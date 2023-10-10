import styled from "styled-components"
import { colors } from "../../constants/colors"
import { Text , View} from "react-native"
import { Circle } from "../circleComponent/Circle"

export function BigHeader() {
    return (
        <HeaderView>
            <Text>ABC+</Text>
            <Text>O guia da Agricultura de Baixo Carbono</Text>
         
        </HeaderView>
    )
}


const HeaderView = styled.View`
 width: 95%;
 height: 120px;
 box-sizing: border-box;
border: 2px solid ${colors.bordersColor};
 border-radius: 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
    background-color: ${colors.secondColor}
`