import React from 'react'
import Header from './pages/Components-Folder/Header'
import Footer from './pages/Components-Folder/Footer'
import ScrollToTopButton from "./pages/Components-Folder/ScrollToBottom";
import { Box, Typography } from '@mui/material';
const PrivacyPolicy = () => {
    return (
        <div>
            <div>
                <Header />
                <Box sx={{ p: 3, margin: 'auto', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", m: 3 }}>
                    <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
                        Privacy Policy
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Our Commitment To Privacy
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                        Your privacy is important to us. To better protect your privacy we provide this notice explaining our online information practices and the choices you can make about the way your information is collected and used. To make this notice easy to find, we make it available on our homepage and at every point where personally identifiable information may be requested.
                        </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            The Information We Collect:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            This notice applies to all information collected or submitted on this website, or
                            any website or subdomain related to any of our products. On some pages, you
                            can request a proposal, make contact requests and register to receive
                            materials. The types of personal information collected at these pages include
                            (but are not limited to):
                        </Typography>
                        <Box component="ul" sx={{ my: 2 }}>
                            <li>
                                <Typography variant="body1" component="div">
                                    Name                            </Typography>
                            </li>
                            <li>
                                <Typography variant="body1" component="div">
                                    Address
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1" component="div">
                                    Email address
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1" component="div">
                                    Phone number
                                </Typography>
                            </li>

                        </Box>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            The Way We Use Information:
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            We use the information you provide about yourself when placing an order only
                            to complete that order. We do not share this information with outside parties
                            except to the extent necessary to complete that order. We use the information
                            you provide about someone else when placing an order only to ship the
                            product and to confirm delivery. We do not share this information with outside
                            parties except to the extent necessary to complete that order. We use return
                            email addresses to answer the email we receive. Such addresses are not
                            used for any other purpose and are not shared with outside parties. You can
                            register with our website if you would like to receive updates on our new
                            products and services. Information you submit on our website will not be used
                            for this purpose unless you fill out the registration form. We use non-identifying
                            and aggregate information to better design our website and to share with
                            advertisers. For example, we may tell an advertiser that X number of
                            individuals visited a certain area on our website, or that Y number of men and
                            Z number of women filled out our registration form, but we would not disclose
                            anything that could be used to identify those individuals. Finally, we never use
                            or share the personally identifiable information provided to us online in ways
                            unrelated to the ones described above without also providing you an
                            opportunity to opt-out or otherwise prohibit such unrelated uses.

                        </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            How we use cookies
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            A cookie is a small file which asks permission to be placed on your computer’s
                            hard drive. Once you agree, the file is added and the cookie helps analyse
                            web traffic or lets you know when you visit a particular site. Cookies allow web
                            applications to respond to you as an individual. The web application can tailor
                            its operations to your needs, likes and dislikes by gathering and remembering
                            information about your preferences

                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            We use traffic log cookies to identify which pages are being used. This helps
                            us analyse data about web page traffic and improve our website in order to
                            tailor it to customer needs. We only use this information for statistical analysis
                            purposes and then the data is removed from the system.

                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Overall, cookies help us provide you with a better website, by enabling us to
                            monitor which pages you find useful and which you do not. A cookie in no way
                            gives us access to your computer or any information about you, other than the
                            data you choose to share with us

                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            You can choose to accept or decline cookies. Most web browsers
                            automatically accept cookies, but you can usually modify your browser setting
                            to decline cookies if you prefer. This may prevent you from taking full
                            advantage of the website

                        </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Our Commitment To Data Security
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
                            To prevent unauthorized access, maintain data accuracy, and ensure the
                            correct use of information, we have put in place appropriate physical,
                            electronic, and managerial procedures to safeguard and secure the
                            information we collect online

                        </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            How You Can Access Or Correct Your
                        </Typography>
                        <Typography sx={{ mb: 1 }}>
                            Information
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1 }}>
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
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            How To Contact Us
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Should you have other questions or concerns about these privacy policies,
                            please email us at <a href="mailto:admin@twelvesprings.uk">admin@twelvesprings.uk</a>.

                        </Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            CHANGES TO THIS POLICY
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            Please check this privacy policy periodically to inform yourself of any changes.
                            We reserve the right to modify or supplement this privacy policy at any time.

                        </Typography>
                    </Box>
                </Box>
                <Footer />
                <ScrollToTopButton />

            </div>
        </div>
    )
}

export default PrivacyPolicy
