export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section className="border border-neutral-300 bg-neutral-50 rounded-xl px-8 sm:px-10 py-8 my-5 backdrop-blur-xl dark:bg-neutral-900 dark:border-neutral-900 dark:text-neutral-50">
      {children}
    </section>
  );
}
