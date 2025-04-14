/**
 * Footer component - Displays copyright information
 * @returns {JSX.Element} Footer element with copyright notice
 */
export default function Footer() {
    return (
      <footer className="text-center text-sm mt-20 py-10 border-t border-neutral-700">
        {/* Dynamically displays current year in copyright */}
        <p>&copy; {new Date().getFullYear()} Vaibhav Dadhich. All rights reserved.</p>
      </footer>
    )
  }
  