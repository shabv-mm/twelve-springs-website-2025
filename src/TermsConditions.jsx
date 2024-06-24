import React from 'react'
import Header from './pages/Components-Folder/Header'
import Footer from './pages/Components-Folder/Footer'
import ScrollToTopButton from "./pages/Components-Folder/ScrollToBottom";
import { Box, Typography } from '@mui/material';


const TermsConditions = () => {
    return (
        <div>
            <Header />
            <Box sx={{ p: 3, margin: 'auto', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", m: 3 }}>
                <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                    Web Site Terms and Services of Use
                </Typography>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        1. Terms
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trademark law.
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        2. Use License
                    </Typography>
                    <Typography variant="body1" component="div">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            a.
                        </Box>{' '}
                        Permission is granted to temporarily download one copy of the materials (information or software) on Twelve Springs Limited web site for personal, non-commercial transitory use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </Typography>

                    <Box component="ol" sx={{ my: 2 }}>
                        <li>
                            <Typography variant="body1" component="div">
                                Modify or copy the materials;
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" component="div">
                                Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" component="div">
                                Attempt to decompile or reverse engineer any software contained on our web site;
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" component="div">
                                Remove any copyright or other proprietary notations from the materials; or
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" component="div">
                                Transfer the materials to another person or "mirror" the materials on any other server.
                            </Typography>
                        </li>
                    </Box>
                    <Typography variant="body1" component="div">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            b.
                        </Box>{' '}
                        This license shall automatically terminate if you violate any of these restrictions and may be terminated by Twelve Springs Limited at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.                </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        3. Disclaimer
                    </Typography>
                    <Typography variant="body1" component="div">
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            a.
                        </Box>{' '}
                        The materials on Twelve Springs Limited web site are provided “as is”. Twelve Springs Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Twelve Springs does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.
                    </Typography>


                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        4. Limitations
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        In no event shall Twelve Springs Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Twelve Springs Limited Internet site, even if Twelve Springs Limited or a Twelve Springs Limited authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        5. Revisions and Errata
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        The materials appearing on Twelve Springs Limited web site could include technical, typographical, or photographic errors. Twelve Springs Limited does not warrant that any of the materials on its web site are accurate, complete, or current. Twelve Springs may make changes to the materials contained on its web site at any time without notice. Twelve Springs does not, however, make any commitment to update the materials.
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        6. Links
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Twelve Springs has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Twelve Springs Limited of the site. Use of any such linked web site is at the user’s own risk.
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        7. Site Terms of Use Modifications

                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Twelve Springs Limited may revise these terms of use for its web site at any time without notice. By using this web site, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.
                    </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                        8. Governing Law

                    </Typography>
                    <Typography variant="body1" sx={{ mb: 1 }}>
                        Any claim relating to Twelve Springs Limited web site shall be governed by the laws of United Kingdom without regard to its conflict of law provisions.

                    </Typography>
                </Box>


            </Box>
            <Footer />
            <ScrollToTopButton />

        </div>
    )
}

export default TermsConditions
