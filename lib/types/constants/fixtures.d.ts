export const restaurants: {
    id: string;
    name: string;
    menu: {
        id: string;
        name: string;
        price: number;
        ingredients: string[];
    }[];
    reviews: {
        id: string;
        user: string;
        text: string;
        rating: number;
    }[];
}[];
