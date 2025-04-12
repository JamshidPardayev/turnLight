import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function App() {
  const dispatch = useDispatch()
  const isOn = useSelector((state) => state.light.isOn)

  return (
    <div className="p-6 space-y-4 text-center">
      <h1 className="text-2xl font-bold">Chiroq Holati: {isOn ? 'YONIQ ■' : 'O‘CHIQ ■■'}</h1>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={() => dispatch({ type: 'TURN_ON' })}>
          Yoqish
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => dispatch({ type: 'TURN_OFF' })}>
          O‘chirish
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-black rounded" onClick={() => dispatch({ type: 'TOGGLE' })}>
          Teskari qilish
        </button>
      </div>
      <Link to="/newPage" className="block mt-4 text-blue-600 underline">
        /newPage sahifasiga o‘tish
      </Link>
    </div>
  )
}