import type { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({order}: OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Connsumo</h2>

        <div className="space-y-3 mt-5">

        </div>
    </div>
  )
}
