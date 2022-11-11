import Head from "../components/Head.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Title from "../islands/title.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>My title is Mr. 🥸</title>
      </Head>
      <main class="container-fluid px-0">
        <div class="row">
          <div class="col">
            <Sidebar />
          </div>
          <div class="col-9">
            <div class="px-4 py-4 my-5 text-center">
              <h1 class="display-5 fw-bold">Welcome to my website!</h1>
              <h3>My name is John Carveth, a <Title/></h3>
              <p class="py-4">I am from <mark class="bg-light">Toronto, ON</mark> and have been writing code for over 10 years.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
