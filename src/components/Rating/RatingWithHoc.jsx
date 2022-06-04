import { useState } from 'react';
import { Rating } from './Rating';

function ratingWithHoc(WrappedComponent) {
  const WrapperComponent = ({ props, className, value, changeRating }) => {
    const [, setRating] = useState();

    const setValue = ratingValue => {
      setRating(ratingValue);
      changeRating(ratingValue);
    };

    return (
      <WrappedComponent
        {...props}
        value={value}
        setValue={setValue}
        className={className}
      />
    );
  };

  WrapperComponent.displayName = `Wrapper(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WrapperComponent;
}

export const RatingWithHoc = ratingWithHoc(Rating);
