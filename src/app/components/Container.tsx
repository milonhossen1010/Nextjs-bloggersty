interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <div className={`px-4 max-w-screen-xl mx-auto ${className}`}>{children}</div>
  );
}
