import stacksImg from "@/assets/stacks.png";

const VeteransSection = () => {
  return (
    <div className="veterans">
      <div className="veterans-text">
        <h2>🇺🇸 A Special Thank You to Those Who Served</h2>
        <p>
          At ClearFlow Guard, we have deep respect for the men and women who've dedicated their lives to protecting this country.
          Many on our team are veterans themselves — and we're proud to give back.
        </p>
        <p>
          Any U.S. Military member — <strong>active duty or retired</strong> — receives an{" "}
          <strong>EXTRA 10% off</strong> their total installation cost. No hoops, no fine print.
        </p>
        <p>
          It's a small gesture from a proudly American company — our sincere way of saying, "Your service matters, and we won't forget it."
        </p>
        <a href="#estimate" className="btn-primary" style={{ marginTop: "10px", width: "fit-content" }}>
          Claim Your Veteran Discount
        </a>
      </div>
      <div className="veterans-img" style={{ padding: 0, overflow: "hidden" }}>
        <img src={stacksImg} alt="Veterans" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
    </div>
  );
};

export default VeteransSection;
