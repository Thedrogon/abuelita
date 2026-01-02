'use client'

// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="px-12 py-16 border-t border-black/10 bg-white">
      <div className="flex justify-between text-sm text-black/70">
        <span>© 2026 Abuelita</span>
        <div className="flex gap-6">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}
