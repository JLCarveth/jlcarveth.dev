export default function Contact() {
  return (
    <div class="contact">
      <h3>Reach Out</h3>
      <form action="https://api.jlcarveth.dev/contact" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            name="name"
            id="name"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            id="message"
            name="message"
            rows={3}
            required
          />
        </div>
        <div class="form-group d-none" aria-hidden>
          <label for="city">City</label>
          <input type="text" name="city" id="city" />
        </div>
        <button class="btn btn-primary my-2 w-100" action="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
