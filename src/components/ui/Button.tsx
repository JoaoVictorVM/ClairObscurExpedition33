interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        font-poppins font-light text-white text-base
        flex items-center gap-3
        bg-transparent border-none outline-none
        border-b border-white pb-0 pt-4
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
}
