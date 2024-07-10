import Sidebar from "./components/sidebar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <section className="">
        {children}
      </section>
    </div>
  );
}
