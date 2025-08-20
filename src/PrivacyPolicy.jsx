import React from 'react';
import Header from './pages/Components-Folder/Header';
import Footer from './pages/Components-Folder/Footer';
import ScrollToTopButton from "./pages/Components-Folder/ScrollToBottom";
import { Box, Typography } from '@mui/material';

// Import Material-UI Icons relevant for Privacy Policy
import PolicyIcon from '@mui/icons-material/Policy';
import InfoIcon from '@mui/icons-material/Info';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import CookieIcon from '@mui/icons-material/Cookie';
import SecurityIcon from '@mui/icons-material/Security';
import EmailIcon from '@mui/icons-material/Email';
import HistoryIcon from '@mui/icons-material/History';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Security } from '@mui/icons-material';

const PrivacyPolicy = () => {
    // Custom List Item component for perfect alignment
    const CustomListItem = ({ children }) => (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                mb: 1, // Add some bottom margin for spacing
                pl: 0,
            }}
        >
            <Box
                sx={{
                    minWidth: '20px',
                    mr: 1,
                    mt: '2px', // Fine-tune vertical alignment
                }}
            >
                <FiberManualRecordIcon sx={{ fontSize: '8px', color: '#666' }} />
            </Box>
            <Box>
                <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                    {children}
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box
            sx={{
                background: `
                    repeating-linear-gradient(
                        180deg,
                        #FFF7EE 0%,
                        #FFFFFF 50%,
                        #FFF7EE 100%
                    )
                `,
                backgroundSize: "100% 200vh",
                minHeight: '100vh',
                color: "#000",
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Header />
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    py: { xs: 3, md: 5 },
                }}
            >
                <Box
                    sx={{
                        p: { xs: 2, sm: 3, md: 4 },
                        mx: { xs: 1, sm: 2, md: 3 },
                        my: { xs: 3, md: 5 },
                        maxWidth: { xs: '95%', sm: '85%', md: '70%', lg: '60%' },
                        backgroundColor: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 3, md: 4 } }}>
                        <Security sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.8rem', md: '2.5rem' }, color: '#444' }} />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                color: '#444',
                                position: 'relative',
                                display: 'inline-block',
                                fontSize: { xs: '1.3rem', sm: '1.6rem', md: '1.8rem' },
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -10,
                                    left: 0,
                                    width: { xs: '80%', sm: '60%' },
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #00cbcc, #00bbdf)',
                                    borderRadius: '2px',
                                }
                            }}
                        >
                            Privacy Policy
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section: Our Commitment To Privacy */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <InfoIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                Our Commitment To Privacy
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            Your privacy is important to us. To better protect your privacy we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our homepage and at every point where personally identifiable information may be requested.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section: The Information We Collect */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <DataUsageIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                The Information We Collect:
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            This notice applies to all information collected or submitted on this website, or
                            any website or subdomain related to any of our products. On some pages, you
                            can request a proposal, make contact requests and register to receive
                            materials. The types of personal information collected at these pages include (but are not limited to):
                        </Typography>
                        <Box sx={{ mt: 1, pl: 0 }}>
                            <CustomListItem>Name</CustomListItem>
                            <CustomListItem>Address</CustomListItem>
                            <CustomListItem>Email address</CustomListItem>
                            <CustomListItem>Phone number</CustomListItem>
                        </Box>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section: The Way We Use Information */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <InfoIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                The Way We Use Information:
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 1, pl: 0 }}>
                            <CustomListItem>
                                We use the information you provide about yourself when placing an order only to complete that order. We do not share this information with outside parties except to the extent necessary to complete that order.
                            </CustomListItem>
                            <CustomListItem>
                                We use the information you provide about someone else when placing an order only to ship the product and to confirm delivery. We do not share this information with outside parties except to the extent necessary to complete that order.
                            </CustomListItem>
                            <CustomListItem>
                                We use return email addresses to answer the email we receive. Such addresses are not used for any other purpose and are not shared with outside parties.
                            </CustomListItem>
                            <CustomListItem>
                                We use non-identifying and aggregate information to better design our website and to share with advertisers.
                            </CustomListItem>
                            <CustomListItem>
                                We never use or share the personally identifiable information provided to us online in ways unrelated to the ones described above without also providing you an opportunity to opt-out or otherwise prohibit such unrelated uses.
                            </CustomListItem>
                        </Box>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section: How we use cookies */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <CookieIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                How we use cookies
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 1, pl: 0 }}>
                            <CustomListItem>
                                **Definition:** A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site.
                            </CustomListItem>
                            <CustomListItem>
                                **Our Use:** We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                            </CustomListItem>
                            <CustomListItem>
                                **Your Control:** You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                            </CustomListItem>
                        </Box>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section: Our Commitment To Data Security */}
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
                                Our Commitment To Data Security
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            To prevent unauthorized access, maintain data accuracy, and ensure the
                            correct use of information, we have put in place appropriate physical,
                            electronic, and managerial procedures to safeguard and secure the
                            information we collect online.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section: How You Can Access Or Correct Your Information */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <EmailIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                How You Can Access Or Correct Your Information
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            You can access all of your personally identifiable information that we collect
                            online and maintain by emailing us at <a href="mailto:privacy@twelvesprings.uk">privacy@twelvesprings.uk</a>. You will be
                            asked to provide certain pieces of information to verify your identity before any
                            information can be released to you. We use this procedure to better safeguard
                            your information. You can correct factual errors in your personally identifiable
                            information by sending us a request that credibly shows error. To protect your
                            privacy and security, we will also take reasonable steps to verify your identity
                            before granting access or making corrections.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section: How To Contact Us */}
                    <Box sx={{ mb: { xs: 3, md: 4 } }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 0.5, md: 1 } }}>
                            <EmailIcon sx={{ mr: { xs: 1, md: 2 }, fontSize: { xs: '1.2rem', md: '1.5rem' }, color: '#444' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }
                                }}
                            >
                                How To Contact Us
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            Should you have other questions or concerns about these privacy policies,
                            please email us at <a href="mailto:admin@twelvesprings.uk">admin@twelvesprings.uk</a>.
                        </Typography>
                    </Box>

                    <Box sx={{ my: { xs: 3, md: 4 }, display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ flexGrow: 1, height: '1px', borderBottom: '1px dashed #ccc' }} />
                    </Box>

                    {/* Section: CHANGES TO THIS POLICY */}
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
                                CHANGES TO THIS POLICY
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: { xs: 0.5, md: 1 }, lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                            Please check this privacy policy periodically to inform yourself of any changes.
                            We reserve the right to modify or supplement this privacy policy at any time.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Footer />
            <ScrollToTopButton />
        </Box>
    );
};

export default PrivacyPolicy;