// ✅ SAFE fallback page - no hooks, no dynamic code
import React, { createContext } from 'react';
export default function NotFound() {
  return (
    <div
      style={{
        padding: '4rem',
        textAlign: 'center',
        fontSize: '2rem',
        color: '#ef4444',
      }}
    >
      404 – Page Not Found
    </div>
  )
}
  