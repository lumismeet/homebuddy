interface Review {
  title: string;
  text: string;
  initials: string;
  name: string;
}

const reviews: Review[] = [
  {
    title: "Best home upgrade we've made!",
    text: "I was hesitant at first, but the consultant walked us through everything clearly. Installation was clean and fast , the crew even swept up after themselves. Haven't touched my gutters since. Absolutely worth it.",
    initials: "MR",
    name: "Michael Rosario",
  },
  {
    title: "No more ladder climbing!",
    text: "Every fall I dreaded cleaning out the gutters. Not anymore. ClearFlow Guard has been on for two seasons and I haven't had a single issue. The installer was friendly, on time, and explained every step of the process.",
    initials: "JW",
    name: "Janet Whitmore",
  },
  {
    title: "My neighbors are jealous!",
    text: "Within a week of installation, two neighbors asked who did the work. The finish looks clean, the gutters flow perfectly, and the team was a pleasure to deal with from start to finish. Highly recommend.",
    initials: "TC",
    name: "Tom Calabrese",
  },
  {
    title: "Smooth from start to finish!",
    text: "Scheduling was easy, the sales rep was not pushy at all, and the installation team was in and out in a few hours. No mess, no hassle, and the gutters look great. I should have done this years ago.",
    initials: "SN",
    name: "Sandra Nguyen",
  },
  {
    title: "Impressed by the quality!",
    text: "I was expecting a standard product but this is genuinely well-made. You can tell it's solid when you look at the mesh up close. The whole team was professional and the price was very fair for what you get.",
    initials: "BF",
    name: "Brian Fletcher",
  },
  {
    title: "Total peace of mind!",
    text: "After years of dealing with overflowing gutters and water near my foundation, this has been a game changer. Nothing gets through. The crew was courteous, efficient, and the whole job was done before lunch.",
    initials: "CL",
    name: "Carol Lawson",
  },
];

const Reviews = () => {
  return (
    <section className="reviews">
      <div className="reviews-header">
        <div className="section-label">Customer Reviews</div>
        <h2 className="section-title">Hear It From Homeowners Like You</h2>
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
