import { Rating } from './Rating';
import styles from './styles-with-hoc.module.css';

function ratingWithHoc(WrappedComponent) {
  const WrapperComponent = ({ props, className, value, change }) => {

    return (
      <div className={styles.root}>
        <WrappedComponent
          {...props}
          value={value}
          change={change}
          className={className}
        />
        <span>Rating: {value}</span>
      </div>
    );
  };

  WrapperComponent.displayName = `Wrapper(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WrapperComponent;
}

export const RatingWithHoc = ratingWithHoc(Rating);
