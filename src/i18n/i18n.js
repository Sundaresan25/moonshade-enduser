import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          //cart page
          "cart.empty": "Your Cart is Empty 🛍️",
          "cart.staytuned": "Stay tuned — we're launching soon!",
          "cart.notifytext": "MOONSHADE perfumes are in the labs. Be the first person to know when our premium scents go live.",
          "cart.notifybutton": "Notify Me When Live",
          "cart.notifysuccess": "✅ You'll be notified when we launch!",
          "cart.loading": "Loading animation...",
          
          // Login Page
      
         "login": "Login",
         "username": "Username or Email",
         "password": "Password",
         "rememberMe": "Remember Me",
         "forgotPassword": "Forgot Password?",
         "pleaseFill": "Please fill in all the fields",
         "loginSuccess": "Login Successful!",

          // Register Page
         
         "register": "Register",
         "fullName": "Full Name",
         "email": "Email",
         "password": "Password",
         "confirmPassword": "Confirm Password",
        "pleaseFill": "Please fill in all the fields",
         "passwordMismatch": "Passwords do not match",
         "registerSuccess": "Registration Successful!",
         "alreadyAccount": "Already have an account?",
         "login": "Login",

          //contact page          
          "contact.title": "Contact Us",
          "contact.subTitle": "Every scent begins with a story, the essence of luxury is just a message away, let yours begin with us.",
          "contact.highlightWord": "Us",
          "contact.sendUsMessage": "Send Us a Message",
          "contact.successMessage": "Thank you for reaching out! We'll respond shortly.",
          "contact.firstNamePlaceholder": "First Name",
          "contact.lastNamePlaceholder": "Last Name",
          "contact.emailPlaceholder": "Email",
          "contact.messagePlaceholder": "Message",
          "contact.sendButton": "Send Message",
          "contact.firstNameRequired": "First name is required.",
          "contact.firstNameInvalid": "First name must contain only letters and spaces.",
          "contact.lastNameRequired": "Last name is required.",
          "contact.lastNameInvalid": "Last name must contain only letters and spaces.",
          "contact.emailRequired": "Email is required.",
          "contact.emailInvalid": "Invalid email format.",
          "contact.messageRequired": "Message is required.",
          "contact.messageLength": "Message must be under 500 characters.",
          
          // Forgot Password Page 
          "forgotPassword": "Forgot Password",
          "enterYourEmail": "Enter your email address",
          "pleaseEnterEmail": "Please enter your email address",
          "submit": "Submit",

          // Navbar
          "navbar.home": "Home",
          "navbar.products": "Products",
          "navbar.register": "Register",
          "navbar.login": "Login",
          "navbar.contact": "Contact",
          "navbar.searchPlaceholder": "Search products, pages...",
          "navbar.seeAllResults": "See all results",
          "navbar.noMatchesFound": "No matches found",
  
          // Cookies Page
          "backToPreviousPage": "Back to Previous Page",
          "cookiePolicy": "Cookie Policy",
          "at": "At",
          "useCookiesDescription": "we use cookies to enhance your browsing experience, analyze traffic, and personalize content.",
          "whatAreCookies": "What Are Cookies?",
          "whatAreCookiesDesc": "Cookies are small text files that are stored on your device when you visit a website. They help improve website functionality and provide a better user experience.",
          "howWeUseThem": "How We Use Them",
          "analyzeTraffic": "Analyze website traffic and usage patterns.",
          "storePreferences": "Store your preferences and settings.",
          "personalizeExperience": "Personalize your browsing experience.",
          "securePerformance": "Ensure website security and performance.",
          "manageCookies": "How to Manage Cookies",
          "manageCookiesDesc": "You can control and manage cookies through your browser settings. Please note that disabling cookies may affect website functionality.",
          "lastUpdated": "Last Updated",

          // Disclaimer Page
          "backToPreviousPage": "Back to Previous Page",
          "websiteDisclaimer": "Website Disclaimer",
          "disclaimerIntro.part1": "The information provided by",
          "disclaimerIntro.part2": "is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.",
          "externalLinksDisclaimer": "External Links Disclaimer",
          "externalLinksDescription": "The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties. We do not investigate, monitor, or check such external links for accuracy, adequacy, validity, reliability, availability, or completeness.",
          "noProfessionalAdvice": "No Professional Advice",
          "noProfessionalAdviceDescription": "The site cannot and does not contain professional advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.",
          "limitationOfLiability": "Limitation of Liability",
          "limitationOfLiabilityDescription": "In no event shall we be liable to you for any loss or damage of any kind incurred as a result of using the site or relying on any information provided on the site. Your use of the site and your reliance on any information is solely at your own risk.",
          "lastUpdated": "Last Updated",

          // Imprint Page
          "backToPreviousPage": "Back to Previous Page",
          "imprintLegalInformation": "Imprint & Legal Information",
          "legalDisclosure": "Below you will find our legal disclosure and company information as required by applicable law.", 
          "companyInformation": "Company Information",
          "companyName": "Company Name",
          "address": "Address",
          "email": "Email",
          "representatives": "Representatives",
          "representedBy": "MOONSHADE Fragrances Ltd. is represented by the Executive Director John Doe.",
          "disputeResolution": "Dispute Resolution",
          "disputeText": "We are not willing or obligated to participate in dispute resolution proceedings before a consumer arbitration board.",
         "lastUpdated": "Last Updated",

          // Privacy Policy Page
         
         "backToPreviousPage": "Back to Previous Page",
         "privacyPolicy": "Privacy Policy",
         "privacyIntro.part1": "Your privacy is important to",
         "privacyIntro.part2": ". This Privacy Policy explains how we collect, use, and protect your information.",  
         "informationWeCollect": "Information We Collect",
         "collectPersonalDetails": "Personal details such as your name, email address, and contact information.",
         "collectPaymentData": "Payment details to process your orders securely.",
         "collectUsageInfo": "Usage data including how you interact with our website.",             
         "howWeUseInfo": "How We Use Your Information",
         "useInfoDescription": "We use your information to provide, improve, and personalize our services, process your orders, and communicate with you about products and promotions.",
         "dataSecurity": "Data Security",
         "dataSecurityDescription": "We take appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.",
         "lastUpdated": "Last Updated",

          // Home Page
      
    "home.aboutTitle": "About Us",
    "home.customerTrust": "100% of Our Customers",
    "home.customerTrustSub": "Trust Us as a Signature Fragrance Partner",
    "home.aboutPara1": "Discover the essence of luxury at",
    "home.brandName": "MOONSHADE Perfumes",
    "home.aboutPara2": "Our carefully crafted scents are designed to captivate your senses and leave a lasting impression. With limited-edition creations and bespoke formulations, we invite you into a realm where sophistication meets artistry, ensuring that your scent remains uniquely yours.",
    "home.aboutPara3": "We are curators of rare and exclusive fragrances, dedicated to redefining luxury through the art of fine perfumery. Each bottle we curate embodies sophistication, exclusivity, and timeless allure, ensuring that your signature scent remains unmistakably yours.",
    "home.teamName": "MOONSHADE Team",
    "home.teamTitle": "Artisans of Fragrance",
    "home.exploreScents": "Explore Our Scents",
    "home.signatureScents": "Signature Scents",
    "home.signatureScentsDesc": "Indulge in the allure of our signature scents, each created with a unique blend of rare ingredients to evoke elegance and sophistication.",
    "home.limitedEdition": "Limited Edition",
    "home.limitedEditionDesc": "Experience exclusivity with our limited edition perfumes, meticulously formulated to offer a sense of individuality and refinement.",
    "home.ultraRareEdition": "Ultra-Rare Edition",
    "home.ultraRareEditionDesc": "Each scent is a unique masterpiece, with limited production, ensuring you own something truly special for those who cherish the beauty of fragrance.",
    "home.newCollections": "New Collections",
    "home.loadingAnimation": "Loading animation...",
    "home.launchingSoon": "Launching Soon...",


          //product Page
          "products.title": "MOONSHADE",
          "products.subtitle": "Step into a world of elegance and allure, indulge in timeless fragrances that awaken your senses, made to be remembered.",
          "products.highlightWord": "SHADE",
          "products.newCollections": "New Collections",
          "products.loadingAnimation": "Loading animation...",
          "products.launchingSoon": "Launching Soon...",
          "products.addedToCart": "added to cart.",
  
  // Set New Password Page
          
  "setNewPassword": "Set New Password",
  "forEmail": "Resetting password for",
  "enterNewPassword": "Enter New Password",
  "confirmPassword": "Confirm Password",
  "pleaseFill": "Please fill in all the fields",
  "passwordMismatch": "Passwords do not match",
  "passwordResetSuccess": "Password has been reset successfully!",
  "resetPassword": "Reset Password",

  // Verify OTP Page
         
  "verifyOtp": "Verify OTP",
  "forEmail": "OTP sent to",
  "enterOtp": "Enter OTP",
  "otpInstruction": "Please enter the 6-digit OTP sent to your email.",
  "resendOtp": "Resend OTP",
  "seconds": "seconds",
  "pleaseEnterOtp": "Please enter the OTP.",
  "otpMustBeSixDigits": "OTP must be 6 digits.",
  "invalidOtp": "Invalid OTP. Please try again.",
  "otpResent": "OTP has been resent successfully.",


        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
