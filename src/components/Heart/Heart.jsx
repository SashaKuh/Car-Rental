import heartImage from '../../common/normal.png';
import { ButtonLike } from './Heart.styled';

export const Heart = () => {

    return (
        <ButtonLike >
            <img src={heartImage} width="18px" height="18px" alt="" />
        </ButtonLike>
    );
};
