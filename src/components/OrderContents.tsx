import type { Dispatch } from "react"
import { formatCurrency } from "../helpers"
import type { OrderActions } from "../reducers/order-reducer"
import type { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    dispatch: Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch }: OrderContentsProps) {
    return (
        <div>
            <h2 className='font-black text-4xl'>Connsumo</h2>

            <div className="space-y-3 mt-10">
                {
                    order.map(item => (
                        <div key={item.id}
                            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                        >
                            <div>
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>

                            <div className="flex gap-3 items-center">
                                <button
                                    className="bg-red-500 h-8 w-8 rounded-full text-white font-black"
                                    onClick={() => dispatch({ type: 'decrease-item', payload: { item: item } })}
                                > -1 </button>

                                <button
                                    className="bg-green-500 h-8 w-8 rounded-full text-white font-black"
                                    onClick={() => dispatch({ type: 'add-item', payload: { item: item } })}
                                > +1 </button>

                                <button
                                    className="bg-red-800 h-auto w-auto p-2 rounded-full text-white font-black"
                                    onClick={() => dispatch({ type: 'remove-item', payload: { id: item.id } })}
                                > Eliminar </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}
