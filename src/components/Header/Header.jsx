import { HeaderWrapper, NavLinkBtn, NavWrapper, HeaderContainer } from './Header.styled';

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <NavWrapper>
                    <NavLinkBtn to="/">Home</NavLinkBtn>
                    <NavLinkBtn to="/catalog">Catalog</NavLinkBtn>
                    <NavLinkBtn to="/favorites">Favorites</NavLinkBtn>
                </NavWrapper>
            </HeaderWrapper>
        </HeaderContainer>
    )
};