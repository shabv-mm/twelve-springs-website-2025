import React from 'react';
import Header from './pages/Components-Folder/Header';
import Footer from './pages/Components-Folder/Footer';
import ScrollToTopButton from "./pages/Components-Folder/ScrollToBottom";
import { Box, Typography } from '@mui/material';

// Import Material-UI Icons
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description'; // Use DescriptionIcon consistently
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LinkIcon from '@mui/icons-material/Link';
import PublicIcon from '@mui/icons-material/Public';
import HistoryIcon from '@mui/icons-material/History';
import SecurityIcon from '@mui/icons-material/Security';

const TermsConditions = () => {
    return (
        <Box
            sx={{
                // Full page background gradient
                background: `
                    repeating-linear-gradient(
                        180deg,
                        #FFF7EE 0%,
                        #FFFFFF 50%,
                        #FFF7EE 100%
                    )
                `,
                backgroundSize: "100% 200vh",
                minHeight: '100vh', // Ensures the background covers the entire viewport height
                color: "#000",
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Header />
            <Box
                sx={{
                    flexGrow: 1, // This box will expand and push the footer down
                    display: 'flex',
                    justifyContent: 'center', // Center content horizontally
                    py: { xs: 3, md: 5 }, // Responsive vertical padding
                }}
            >
                <Box
                    sx={{
                        p: { xs: 2, sm: 3, md: 4 }, // Responsive padding inside the paper box
                        mx: { xs: 1, sm: 2, md: 3 }, // Responsive horizontal margin to control spacing from edges
                        my: { xs: 3, md: 5 }, // Responsive vertical margin
                        maxWidth: { xs: '95%', sm: '85%', md: '70%', lg: '60%' }, // Responsive width for the paper box
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 4 } }}>
                        <DescriptionIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.8rem', md: '2.5rem' }, color: '#444' }} />
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                color: '#444',
                                position: 'relative',
                                display: 'inline-block',
                                fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }, // Responsive font size for main heading
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -10,
                                    left: 0,
                                    width: { xs: '80%', sm: '60%' }, // Responsive underline width
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #00cbcc, #00bbdf)',
                                    borderRadius: '2px',
                                }
                            }}
                        >
                            Web Site Terms and Services of Use
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section 1 - Terms */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <GavelIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' } // Responsive font size
                                }}
                            >
                                1. Terms
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trademark law.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section 2 - Use License */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <DescriptionIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                2. Use License
                            </Typography>
                        </Box>
                        <Typography variant="body1" component="div" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            <Box component="span" sx={{ fontWeight: 'bold' }}>
                                a.
                            </Box>{' '}
                            Permission is granted to temporarily download one copy of the materials (information or software) on Twelve Springs Limited web site for personal, non-commercial transitory use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </Typography>
                        <Box component="ol" sx={{ my: { xs: 1.5, md: 2 } }}>
                            <li><Typography variant="body1" component="div" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>Modify or copy the materials;</Typography></li>
                            <li><Typography variant="body1" component="div" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</Typography></li>
                            <li><Typography variant="body1" component="div" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>Attempt to decompile or reverse engineer any software contained on our web site;</Typography></li>
                            <li><Typography variant="body1" component="div" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>Remove any copyright or other proprietary notations from the materials; or</Typography></li>
                            <li><Typography variant="body1" component="div" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>Transfer the materials to another person or "mirror" the materials on any other server.</Typography></li>
                        </Box>
                        <Typography variant="body1" component="div" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            <Box component="span" sx={{ fontWeight: 'bold' }}>
                                b.
                            </Box>{' '}
                            This license shall automatically terminate if you violate any of these restrictions and may be terminated by Twelve Springs Limited at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section 3 - Disclaimer */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <ErrorOutlineIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                3. Disclaimer
                            </Typography>
                        </Box>
                        <Typography variant="body1" component="div" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            <Box component="span" sx={{ fontWeight: 'bold' }}>
                                a.
                            </Box>{' '}
                            The materials on Twelve Springs Limited web site are provided “as is”. Twelve Springs Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Twelve Springs does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section 4 - Limitations */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <SecurityIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                4. Limitations
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            In no event shall Twelve Springs Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Twelve Springs Limited Internet site, even if Twelve Springs Limited or a Twelve Springs Limited authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section 5 - Revisions and Errata */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <HistoryIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                5. Revisions and Errata
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            The materials appearing on Twelve Springs Limited web site could include technical, typographical, or photographic errors. Twelve Springs Limited does not warrant that any of the materials on its web site are accurate, complete, or current. Twelve Springs may make changes to the materials contained on its web site at any time without notice. Twelve Springs does not, however, make any commitment to update the materials.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section 6 - Links */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <LinkIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                6. Links
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            Twelve Springs has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Twelve Springs Limited of the site. Use of any such linked web site is at the user’s own risk.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section 7 - Site Terms of Use Modifications */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <PublicIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                7. Site Terms of Use Modifications
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            Twelve Springs Limited may revise these terms of use for its web site at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section 8 - Governing Law */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <GavelIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                8. Governing Law
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            Any claim relating to Twelve Springs Limited web site shall be governed by the laws of United Kingdom without regard to its conflict of law provisions.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Footer />
            <ScrollToTopButton />
        </Box>
    );
};

export default TermsConditions;