import LeftsideBar from "@/components/LeftsideBar";
import RightSideBar from "@/components/RightSideBar";
import NavBar from "@/components/ui/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <NavBar />
      <div className="flex">
        <LeftsideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar />
      </div>
      {/* <Toaster /> */}
    </main>
  );
}
