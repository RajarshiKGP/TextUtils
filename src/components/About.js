export default function About(props) {
    return (
        <div className="container my-5" style={{ width: "60%" }}>
            <h1 style={{ color: props.mode === "dark" ? "#00edf6" : "black" }}>About Us</h1>
            <div className="accordion accordion-flush my-4" id="accordionFlushExample" style={{ boxShadow: props.mode === "dark" ? "none" : "4px 4px 5px 5px" }}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Analyse your text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">TextUtils gives you a way to analyse your text quickly and efficiently. Be it word count or character count.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">TextUtils is a free character counter tool that provides instant character count and word count statistics for a giving text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word or character limit. </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">This word counter, along with other utility functionalities, works in any web browser such as Chrome, Firefox Internet Explorer, Safari, Opera etc.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}