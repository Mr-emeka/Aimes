import React from 'react'

const useScrollTop = () => {
    const [top, setTop] = React.useState(window.pageYOffset);

    React.useEffect(() => {
        const handleWindowScroll = () => {
            setTop(window.pageYOffset)
        };
        window.addEventListener("scroll", handleWindowScroll);
        return () => window.removeEventListener("scroll", handleWindowScroll);
    }, []);

    // Return the width so we can use it in our components
    return { top };
}

export default useScrollTop;