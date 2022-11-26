export function useCount(defaultCountValue?: number): {
    count: number;
    increment: () => void;
    decrement: () => void;
};
export default useCount;
