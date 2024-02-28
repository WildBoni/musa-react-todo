export default function Task({text}) {
  return (
    <li className="task">
      <div>
        <input type="checkbox" />
        <span>{text}</span>
      </div>
      <button>Elimina</button>
    </li>
  )
}