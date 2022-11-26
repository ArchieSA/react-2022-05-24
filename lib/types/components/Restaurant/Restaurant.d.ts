/// <reference types="react" />
interface Restaurant {
    id: string;
    name: string;
    menu: string[];
    reviews: string[];
}
export declare type RestaurantProps = {
    restaurant: Restaurant;
    rating: number;
};
export declare const Restaurant: ({ restaurant, rating }: RestaurantProps) => JSX.Element;
export {};
