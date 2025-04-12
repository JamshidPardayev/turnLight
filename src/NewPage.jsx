import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function NewPage() {
  const isOn = useSelector((state) => state.light.isOn)

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">NewPage: Chiroq Holati: {isOn ? 'YONIQ ■' : 'O‘CHIQ ■■'}</h1>
      <Link to="/" className="block mt-4 text-blue-600 underline">
        Orqaga qaytish
      </Link>
    </div>
  )
}