export default function AgentsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
                    <nav className=" py-5 flex justify-center text-3xl bg-violet-900 text-white">Agents</nav>

        <main>{children}</main>
      </div>
    );
  }
  