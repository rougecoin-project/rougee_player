import LoadingSpinner from '@/components/LoadingSpinner'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner />
        <p className="text-gray-400 text-sm mt-4">Loading...</p>
      </div>
    </div>
  )
}


