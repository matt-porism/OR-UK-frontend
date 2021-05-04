import log from 'loglevel';
import remote from 'loglevel-plugin-remote';

function FallBackRender( {error} , resetErrorBoundary ) {

    if (!process.env.REACT_APP_BASE_URL_API) return null;
    
    const customJSON = log => ({ 
       msg: log.message,
        stacktrace: log.stacktrace 
    });

    remote.apply(log,  { format: customJSON, url: `${process.env.REACT_APP_BASE_URL_API}` });

    log.enableAll();
    log.getLogger('child').error(error.error);

    return (
        <main id="content" className="main-container">
            <div class="page-container">
                <div role="alert">
                    <div>Unable to load the requested page click here to try again.  If problem persists please contact the site administrator at hello@openreferraluk.org</div>
                </div>
            </div>
        </main>
    )
}
export default FallBackRender;