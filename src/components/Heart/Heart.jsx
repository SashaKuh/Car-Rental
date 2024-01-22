import normal from '../../common/favorite.svg';
import active from '../../common/favorite-active.svg';
import { FavoriteSVG } from './Heart.styled';

export const Heart = ({ carId, onToggle, isLiked }) => {
    const toggleLike = () => {
        onToggle && onToggle(carId, !isLiked);
    };

    return (
        <>
            <FavoriteSVG onClick={toggleLike} src={!isLiked ? normal : active} />
        </>
    );
};
