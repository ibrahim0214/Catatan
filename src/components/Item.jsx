export default function Item({item, onDeleteItem, onToggleItem, onClearItems}){
    return (
      <li key={item}>
            <input type="checkbox" checked={item.checked} onChange={() => onToggleItem(item.id)} />
            <span style={ item.checked ? { textDecoration: 'line-through'} : {}}>
              {item.quantity} {item.name}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
          </li>
    ) 
  }