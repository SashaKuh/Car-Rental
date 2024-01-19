import {
    Button,
    ItemWrapper,
    InfoWrapper,
} from './CardItem.styled'

export const CardItem = ({ car: { year, make, model, img } }) => {
    return(
    <ItemWrapper>
        <img src={img} alt={`${make} ${model}`} />
        <InfoWrapper>
            <p>{make}</p>
            <p>{model}</p>
            <p>{year}</p>
        </InfoWrapper>
        <Button type='button'>Learn more</Button>
        </ItemWrapper>
    )
}