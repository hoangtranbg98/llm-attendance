export function LoadingState({ message = "Đang tải..." }: { message?: string }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-gray-600 text-sm">{message}</p>
      </div>
    </div>
  );
}
