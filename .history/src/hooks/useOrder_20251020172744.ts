import { useState } from "react";
import type { OrderItem } from "../types";

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = () => {
        //setOrder([...order, { ...item, quantity: 1 }]);
        console.log('Agregando item a la orden');
    }

    return {

    }
}