import React from "react";

export default function UserCount({ count }: { count: number }) {
  return (
    <div className="text-xs border px-2 py-1 border-orange-400 text-orange-500 bg-orange-600/10 select-none hover:bg-orange-600/20 transition-colors">
      {count}+ Users
    </div>
  );
}
