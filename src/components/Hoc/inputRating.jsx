import { Rating } from "../Rating/Rating";

export function inputRating(WrappedComponent) {
    const WrapperComponent = ({ rating, changeRating, ...props }) => {

        const chooseRating = (numberRating) => {
            changeRating(numberRating);
        }

        return <WrappedComponent value = {rating} onClick={chooseRating} {...props} />;
    }

    WrapperComponent.displayName = `Wrapper${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;

    return WrapperComponent;
}

export const InputRating = inputRating(Rating);
