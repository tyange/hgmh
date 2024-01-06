import MainLayout from "../components/layouts/MainLayout.tsx";
import Intro from "../components/Intro";

export default function MainPage() {
  return (
    <MainLayout>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section className="h-screen snap-start">
          <Intro />
        </section>
        <section className="h-screen snap-start bg-amber-100">
          section 2
        </section>
        <section className="h-screen snap-start bg-amber-100">
          section 3
        </section>
      </div>
    </MainLayout>
  );
}
