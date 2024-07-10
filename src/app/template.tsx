import Sidebar from "./components/sidebar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <section className="w-full p-3">
        {children}
      </section>
    </div>
  );
}
