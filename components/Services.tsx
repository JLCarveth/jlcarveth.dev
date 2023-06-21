export default function Services() {
  return (
    <>
      <div class="container">
        <h1 class="display-5 fw-bold lh-1 mb-3 text-center">
          Available Services
        </h1>
        <div class="row row-cols-1 row-cols-md-2 g-4">
          {/* Web Design */}
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="/img/web-design.webp"
                    className="img-fluid rounded-start"
                    alt="Website Design"
                  />
                </div>
                <div class="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Website Design</h5>
                    <p className="card-text">
                      I offer custom website design services to create a unique
                      and engaging online presence for your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Web hosting */}
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="/img/web-hosting.webp"
                    className="img-fluid rounded-start"
                    alt="Website Hosting"
                  />
                </div>
                <div class="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Web Hosting</h5>
                    <p class="card-text">
                      My reliable and secure website hosting services ensure
                      that your website is always up and running.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* E-Commerce */}
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="/img/ecommerce.webp"
                    className="img-fluid rounded-start"
                    alt="E-Commerce"
                  />
                </div>
                <div class="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">E-Commerce</h5>
                    <p class="card-text">
                      I can help you setup an online store to sell your products or services directly to customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cloud Storage */}
          <div class="col">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="/img/cloud.webp"
                    className="img-fluid rounded-start"
                    alt="Cloud Storage and Backup"
                  />
                </div>
                <div class="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Cloud Storage and Backup</h5>
                    <p class="card-text">
                      Keep your data safe and accessible with my cloud storage and backup solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
