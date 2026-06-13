import Header from "@/components/Header/Header";
import Projects from "@/components/Projects/Projects";
import Blog from "@/components/Blog/Blog";
import Footer from "@/components/Footer/Footer";
import FadeIn from "@/components/FadeIn/FadeIn";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <FadeIn>
          <section id="work">
            <Projects />
          </section>
        </FadeIn>
        <FadeIn delay={100}>
          <section id="blog">
            <Blog />
          </section>
        </FadeIn>
      </main>
      <FadeIn delay={150}>
        <Footer />
      </FadeIn>
    </>
  );
}
