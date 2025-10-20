import type { MenuItem } from "../types";

type MenuItemProps = {
    item: MenuItem;
}

export default function MenuItem({item} : MenuItemProps) {
  return (
    <div>MenuItem</div>
  )
}
