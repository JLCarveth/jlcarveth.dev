import { default as ServiceIsland } from "../islands/Service.tsx";

export type Service = {
  title: string;
  description: string;
  img: string;
};

export function Services() {

  const services: Service[] = [
    {
      title: "Website Design",
      description:
        "I offer custom website design services to create a unique and engaging online presence for your business.",
      img: "/img/web-design.webp",
    },
    {
      title: "Web Hosting",
      description:
        "My reliable and secure website hosting services ensure that your website is always up and running.",
      img: "/img/web-hosting.webp",
    },
    {
      title: "E-Commerce",
      description:
        "I can help you setup an online store to sell your products or services directly to customers.",
      img: "/img/ecommerce.webp",
    },
    {
      title: "Cloud Storage and Backup",
      description:
        "Keep your data safe and accessible with my cloud storage and backup solutions.",
      img: "/img/cloud.webp",
    },
  ];

  return (
    <>
      <div class="container">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-center">
          Available Services
        </h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {services.map((service, index) => (
            <ServiceIsland title={service.title} description={service.description} img={service.img}/>
          ))}
        </div>
      </div>
    </>
  );
}
