import React from "react";

export default function UserCount({ count }: { count: number }) {
  return (
    <div className="text-xs border px-2 py-1 border-blue-400 text-blue-500 bg-blue-600/10 select-none hover:bg-blue-600/20 transition-colors">
      {count}+ Users
    </div>
  );
}
