export default function Card({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="bg-blue-600 rounded-3xl p-4">{children}</div>;
}
