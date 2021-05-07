

const Video = ({ name, width, height, source }) => {

    return( 
        <>
        <iframe id="videobox" height={height} src="https://www.youtube.com/embed/dn1ryloOLvk"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        {/* this will ideally need adding to the backend to remove hard-coding*/}
        <div id="video-link"><a href="https://openreferraluk.org/open-referral-uk-video-transcript">View the full video transcript including visual description</a></div>
        </>
       
    )
}
export default Video;

