export default function SinglePromptAgentLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
    <nav className=" py-5 flex justify-center text-3xl bg-violet-900 text-white">Single Prompt Agent</nav>

 <main>{children}</main>
      </div>
    );
  }
  