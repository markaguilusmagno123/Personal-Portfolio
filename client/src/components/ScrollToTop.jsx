import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/services') {
            window.history.scrollRestoration = 'manual';

            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}

export default ScrollToTop;