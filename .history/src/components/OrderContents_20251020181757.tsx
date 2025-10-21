import type { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({ order }: OrderContentsProps) {
    return (
        <div>
            <h2 className='font-black text-4xl'>Connsumo</h2>

            <div className="space-y-3 mt-5">
                {order.length === 0 ?
                    <p className="text-center">La orden esta vacía</p>
                    :
                    <p className="text-center">La orden tiene algo</p>
                }
            </div>
        </div>
    )
}
