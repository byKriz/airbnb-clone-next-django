interface Props {
  name: string;
  className?: string;
  onClick: () => void;
}

export function CustomButton({ name, className, onClick }: Props) {
  return (
    <button
      className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark transition-colors duration-300 ease-in-out rounded-xl text-white font-bold
      ${className}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
