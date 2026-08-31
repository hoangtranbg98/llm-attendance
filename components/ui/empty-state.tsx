import { InboxIcon } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, icon, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="text-gray-400 mb-4">
        {icon || <InboxIcon size={48} />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
      {description && (
        <p className="text-gray-600 text-sm mb-6 text-center max-w-sm">{description}</p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
