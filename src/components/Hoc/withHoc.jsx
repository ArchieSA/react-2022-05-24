import {Component, useState} from "react";

export function withHoc(WrappedComponent) {
    const WrapperComponent = ({ date, ...props }) => {
        const [state] = useState();

        if (date > new Date()) {
            return <span></span>
        }

        return <WrappedComponent {...props} date={date}/>;
    }

    WrapperComponent.displayName = `Wrapper${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;

    return WrapperComponent;
}

// export function withHoc(WrappedComponent) {
//     class WrapperComponent extends Component {
//         render() {
//             return <WrappedComponent/>;
//         }
//     }
//
//     WrapperComponent.displayName = `Wrapper${WrappedComponent.displayName || WrappedComponent.name || 'Component'}`;
//
//     return WrapperComponent;
// }


const DateComponent = (date, className) => <span>{date}</span>

const EnFormatDateComponent = (date) => <span>{date}</span>

const RusFormatDateComponent = (date) => <span>{date}</span>

const TodayDateComponent = withHoc(DateComponent);
const TodayEnFormatDateComponent  = withHoc(EnFormatDateComponent);
const TodayRusFormatDateComponent = withHoc(RusFormatDateComponent);
