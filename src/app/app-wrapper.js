"use client"

const { useEffect } = require('react');

const AppWrapper = ({ children, ...props }) => {
    useEffect(() => {
        const use = async () => {
            const { SmoothScroll, initTE } = (await import('tw-elements'));
            initTE({ SmoothScroll })
        };
        use();
    }, []);

    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default AppWrapper