import "./Video.css";

function Video({ title, views, Time }) {
    return (
        <>
            <div className="container">
                <div className="pic">
                    <img src="https://loremflickr.com/200/150" alt="Image - 1" />
                </div>
                <div className="title">{title}</div>

                <div className="views">{views} <span>.</span>{Time}</div>
            </div>
        </>
    );
}
export default Video;