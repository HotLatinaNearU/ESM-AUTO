export default function ReviewSection() {
    return (
        <div className="container" style={{ width: "100%" }}>
            <div className="reviewSection">
                <div className="reviewItem">
                    <div className="top">
                        <div className="clientImage">
                            <span>Raju Sheoran</span>
                        </div>
                        <ul>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-solid fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                            <li><i className="fa-regular fa-star"></i></li>
                        </ul>
                    </div>
                    <article>
                        <p className="review" style={{ fontSize: "12px" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit beatae ipsa
                            voluptatibus perferendis quos eaque nemo error tempora harum quas, laudantium tenetur, neque,
                            facere exercitationem!</p>
                        <p style={{ fontSize: "10px" }}>Jan 01, 2023</p>
                    </article>
                </div>
                {/* Repeat the above reviewItem divs for additional reviews */}
            </div>
        </div>
    );
}
