import Head from "../components/Head.tsx";
import Sidebar from "../components/Sidebar.tsx";
import Title from "../islands/title.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>My title is Mr. 🥸</title>
      </Head>
      <main class="container-fluid ps-0">
        <div class="row">
          <div class="col-3">
            <Sidebar />
          </div>
          <div class="col">
            <div class="px-4 py-4 my-5 text-center">
              <h1 class="display-5 fw-bold">Welcome to my website!</h1>
              <h3>My name is John Carveth, a <Title/></h3>
              <p class="py-4">I am from <mark class="bg-success bg-opacity-25">Toronto, ON</mark> and have been writing code for over 10 years.</p>
              <hr/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
