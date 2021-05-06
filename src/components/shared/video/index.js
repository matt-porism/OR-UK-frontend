

const Video = ({ name, width, height, source }) => {

    return( 
        process.env.REACT_APP_VIDEO ? 
        <>
        <iframe id={name} height={height} src={source}
        title="YouTube video player" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
        {/* this may need adding to the backend */}
        <div id="video-link"><a href="/transcript">View the full video transcript including visual description</a></div>
        </>
        : null
    )
}
export default Video;