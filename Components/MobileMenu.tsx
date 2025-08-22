"use client";

type Props = {
  setMobileMenuOpen: (open: boolean) => void;
};

export default function MobileMenu({ setMobileMenuOpen }: Props) {
  return (
    <div className="md:hidden bg-[#111827] px-4 py-6 border-b border-gray-700">
      <ul className="flex flex-col gap-4 mb-6">
        {["Home", "Features", "Product", "Community"].map((item) => (
          <li
            key={item}
            className="hover:text-blue-400 cursor-pointer transition-colors duration-300"
          >
            <a href={`#${item}`} onClick={() => setMobileMenuOpen(false)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-3">
        <button className="text-sm px-4 py-2 border border-blue-500 rounded-lg hover:bg-blue-500/10 transition-all duration-300">
          Login
        </button>
        <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Buy Now
        </button>
      </div>
    </div>
  );
}
