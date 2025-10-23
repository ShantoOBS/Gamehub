import React from 'react'

export default function Footer(){
  return (
    <footer className="p-6 text-center">
      <p>© {new Date().getFullYear()} Gamehub — support indie developers</p>
      <div className="mt-2">Contact | Terms | Privacy</div>
    </footer>
  );
}
