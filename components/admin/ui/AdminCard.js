export default function AdminCard({ title, actions, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      
      {/* HEADER */}
      <div className="col-md-16">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
        </div>
        <div>
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      </div>  
      {/* BODY */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
