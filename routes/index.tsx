import Head from "../components/Head.tsx";
import Navbar from "../components/Navbar.tsx";
import Deployment from "../components/Deployment.tsx";
import Services from "../components/Services.tsx";
import Welcome from "../components/Welcome.tsx";
import Contact from "../components/Contact.tsx";
import Footer from "../components/Footer.tsx";
import Alert from "../islands/alert.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>My title is Mr. 🥸</title>
      </Head>
      <Navbar />
      <div class="overlay">
        <Alert />
        <main class="container-fluid ms-0 ps-0">
          <div class="px-4 py-4 my-5">
            <Welcome />
            <hr />
            <Deployment />
            <hr />
            <Services />
            <hr />
            <Contact />
            <hr />
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
