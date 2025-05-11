import { useProgress } from "@react-three/drei"

function Loader() {
  const { progress } = useProgress()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 text-white">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed border-white rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg font-semibold">{progress.toFixed(0)}% loaded</p>
      </div>
    </div>
  )
}

export default Loader
