export default function MultiPromptAgentLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
                    <nav className=" py-5 flex justify-center text-3xl bg-violet-900 text-white">Multi Prompt Agent</nav>

        <main>{children}</main>
      </div>
    );
  }
  