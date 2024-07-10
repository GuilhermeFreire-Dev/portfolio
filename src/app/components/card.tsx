
export default function Card({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-4">
      {children}
    </div>
  );
}