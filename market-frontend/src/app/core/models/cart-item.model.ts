export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    quantityChanged?: boolean;
}