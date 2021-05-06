

const Video = ({ name, width, height, source }) => {

    return( 
        //process.env.REACT_APP_VIDEO currently not able to set env on server
        <>
        <iframe id="videobox" title="vimeo-player" src="https://player.vimeo.com/video/543850815" height={height} frameBorder="0" allowFullScreen></iframe>
        {/* this may need adding to the backend */}
        <div id="video-link"><a href="https://openreferraluk.org/open-referral-uk-video-transcript">View the full video transcript including visual description</a></div>
        </>
    )
}
export default Video;

