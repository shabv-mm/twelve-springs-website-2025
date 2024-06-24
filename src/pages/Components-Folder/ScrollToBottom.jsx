import React, { useState, useEffect } from "react";
import { Fab } from "@mui/material";
import { ArrowUpward, Key } from "@mui/icons-material";
const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        showButton && (
            <Fab
                color="primary"
                aria-label="scroll back to top"
                onClick={scrollToTop}
                sx={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}
            >
                <ArrowUpward />
                {/* <img src={} alt="" /> */}
            </Fab>
        )
    );
};

export default ScrollToTopButton;
