import { TinyHeader } from "../../components/headerComponents/TinyHeader";
import { products } from "../../constants/products";
import { OptionsView, StyledSafeArea } from "../Inicial/Inicial";

export async function Culturas(){
    const products = [
        {
          id: 1,
          "label": "Soja"
        },
        {
            id: 2,
          "label": "Milho"
        },
        {
            id: 3,
          "label": "Açaí"
        },
        {
            id: 4,
          "label": "Mandioca"
        },
        {
            id: 5,
          "label": "Algodão"
        },
        {
            id: 6,
          "label": "Cacau"
        },
        {
            id: 7,
          "label": "Banana"
        },
        {
            id: 8,
          "label": "Cana"
        },
        {
            id: 9,
          "label": "Abacaxi"
        }
    ]
    
    return (
        <StyledSafeArea>
            <TinyHeader />
            <OptionsView>
                <Text>MInhas culturas</Text>
            <FlatList 
                data={products}
                keyExtractor={(produto) => String(produto.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({produto}) => <Card data={produto} />}/>
            </OptionsView>
        </StyledSafeArea>
    )
}