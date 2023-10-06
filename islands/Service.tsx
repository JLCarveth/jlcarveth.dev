import { Service } from "../components/Services.tsx";

export default function Service({ title, description, img }: Service) {

  return (
  <>
    <div
      class="col-md-6"
    >
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={img}
              className="img-fluid rounded-start"
              alt={title}
            />
          </div>
          <div class="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
