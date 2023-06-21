import Title from "../islands/title.tsx";

export default function Welcome() {
  return (
    <div class="row text-center">
      <div class="col">
        <h1 class="display-5 fw-bold">Welcome to my website!</h1>
        <h3>My name is John Carveth, a <Title/></h3>
        <p class="py-4">I am from <mark class="bg-success bg-opacity-25">Toronto, ON</mark> and have been writing code for over 10 years.</p>
      </div>
    </div>
  );
}
