import Head from "../components/Head.tsx";
import Navbar from "../components/Navbar.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Title from "../islands/title.tsx";
import Deployment from "../components/Deployment.tsx";
import Services from "../components/Services.tsx";
import Welcome from "../components/Welcome.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>My title is Mr. 🥸</title>
      </Head>
      <Navbar />
      <div class="overlay">
        <main class="container-fluid ms-0 ps-0">
          <div class="px-4 py-4 my-5">
            <Welcome />
            <hr />
            <Deployment />
            <hr />
            <Services />
          </div>
        </main>
      </div>
    </>
  );
}
