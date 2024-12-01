export default function CustomLLMLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
            <nav className=" py-5 flex justify-center text-3xl bg-violet-900 text-white">CustomLLM</nav>
        <main>{children}</main>
      </div>
    );
  }
  