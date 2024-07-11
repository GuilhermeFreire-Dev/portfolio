import Sidebar from "./components/sidebar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <Sidebar></Sidebar>
      <section className="w-4/5 p-3 max-h-[80vh] mx-auto overflow-hidden">
        {children}
      </section>
    </main>
  );
}
