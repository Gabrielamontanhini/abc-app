import { Button, Text, View } from "react-native"
import { colors } from "../../constants/colors"
import styled from "styled-components"
import { useState } from "react"

export function Notice({data}) {
    const [bati, setBati] = useState(false)
    return (
        <StyledNotice>
            <StyledTitle>
                <Text>{data.titulo}</Text>
            </StyledTitle>
            <StyledCall>
                <Text> {data.chamada}</Text>
            </StyledCall>
            <Button
             title="Ler notícia completa"
             onPress={() => setDisplay("flex")} />
        </StyledNotice>
    )
}

export const StyledNotice = styled.View`
min-width: 300px;
height: 200px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
box-sizing: border-box;
border: 2px solid ${colors.secondColor};
border-radius: 10px;
margin-top: 15px;
background-color: ${colors.firstColor};
`

export const StyledTitle = styled.View`
width: 100%;
height: 30%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.secondColor};
`
export const StyledCall = styled.View`
width: 100%;
height: 50%;
display: flex;
align-items: center;
justify-content: flex-start;
padding-top: 15px;
padding-right: 2%;
padding-left: 2%;
background-color: ${colors.firstColor};
`

