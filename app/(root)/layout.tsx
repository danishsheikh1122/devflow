import NavBar from "@/components/ui/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <NavBar></NavBar>
      <div className="flex">
        LeftsideBar
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        Rightsidebar
      </div>
    </main>
  );
}
