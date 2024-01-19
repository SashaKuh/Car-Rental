import { HeaderWrapper, NavLinkBtn, NavWrapper } from './Header.styled';

export const Header = () => {
    return (
        <div className='container'>
            <HeaderWrapper>
                <NavWrapper>
                    <NavLinkBtn to="/">Home</NavLinkBtn>
                    <NavLinkBtn to="/catalog">Catalog</NavLinkBtn>
                    <NavLinkBtn to="/favorites">Favorites</NavLinkBtn>
                </NavWrapper>
            </HeaderWrapper>
        </div>
    )
};