interface Review {
  title: string;
  text: string;
  initials: string;
  name: string;
}

const reviews: Review[] = [
  {
    title: "Very helpful!",
    text: "The representative was very helpful, demonstrated the product and how it functions, in comparison to others, and how much customer satisfaction means to the company. I would certainly refer this company to others.",
    initials: "LD",
    name: "Loretta Dunston",
  },
  {
    title: "Highly recommend!",
    text: "The process, from beginning to end, was handled very professionally and in a friendly manner. We had some challenges with our patio cover and the team went out of their way to make it work. The installer explained everything and was very helpful.",
    initials: "DB",
    name: "Dave Bennet",
  },
  {
    title: "Love our new gutters!",
    text: "The neighbors noticed and asked us where we got our gutters, and we said LeafGuard Pro! The team was fantastic from the free estimate to the installation. The crew was professional, knowledgeable, and efficient.",
    initials: "PR",
    name: "Patti Reed",
  },
  {
    title: "Completely painless experience!",
    text: "Yes, this whole experience, starting with the salesman, who explained all about the product and its many benefits to the installation who worked fast and left the work site clean. Completely painless, and I would recommend this to all.",
    initials: "PA",
    name: "Philip Amenta",
  },
  {
    title: "Quick and efficient!",
    text: "LeafGuard Pro was quick and efficient from my initial call for a quote to installation. My mother recommended them and I am so glad she did. The guys that showed up were professional and tidy. 5 star experience.",
    initials: "KH",
    name: "Korry Harrier",
  },
  {
    title: "Amazing company and service",
    text: "Great and courteous people. From the moment they gave me a quote until they left. Amazing work and quickly. I was able to practically get the work done immediately... and veterans work at the company!",
    initials: "AP",
    name: "Amy P",
  },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews-header">
        <div className="section-label">Customer Reviews</div>
        <h2 className="section-title">What LeafGuard Pro Customers Are Saying</h2>
      </div>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div className="review-card" key={review.name}>
            <div className="stars">★★★★★</div>
            <div className="review-title">{review.title}</div>
            <p className="review-text">{review.text}</p>
            <div className="reviewer">
              <div className="reviewer-avatar">{review.initials}</div>
              <div className="reviewer-name">{review.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
