export const Navbar1Defaults = {
  logo: {
    url: "/",
    src: "Logo.png",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Home", url: "#Home" },
    { title: "About", url: "#About" },
    { title: "Contact", url: "#Contact" },
  ],
  buttons: [
    {
      title: "Sign up",
      className: "bg-white",
      variant: "secondary",
      size: "sm",
      url: "/Signup",
    },
    {
      title: "Login",
      size: "sm",
      className: "border-inherit",
      url: "/Login",
    },
  ],
};

  



export const headerData = {
  
    heading: "Streamline Your Video Management Experience Today",  
    
    description:                                                   
      "Welcome to our innovative platform where managing your video content is effortless. Upload, trim, and share your videos seamlessly with just a few clicks.",
    
    buttons: [                                                   
      { 
        title: "Get Started",                                      
        className: "bg-white text-black"                          
      },
      { 
        title: "Learn More",                                      
        variant: "secondary-alt"                                 
      },
    ],
  
    imagesPartOne: [                                            
      {
        src: "Heroimages/1.jpg",                                   
        alt: "Relume placeholder image 1",                       
      },
      {
        src: "Heroimages/2.jpg",                                   
        alt: "Relume placeholder image 2",                         
      },
      {
        src: "Heroimages/3.jpg",                                   
        alt: "Relume placeholder image 3",                       
      },
      {
        src: "Heroimages/4.jpg",                                   
        alt: "Relume placeholder image 4",                         
      },
    ],
  
    imagesPartTwo: [                                              
      {
        src: "Heroimages/5.jpg",                                  
        alt: "Relume placeholder image 5",                         
      },
      {
        src: "Heroimages/6.jpg",                                   
        alt: "Relume placeholder image 6",                         
      },
      {
        src: "Heroimages/7.jpg",                                   
        alt: "Relume placeholder image 7",                         
      },
      {
        src: "Heroimages/8.jpg",                                  
        alt: "Relume placeholder image 8",                         
      },
    ],
  };
  



import { RxChevronRight } from "react-icons/rx";

export const Layout242Defaults = {
  heading: "Effortlessly upload and segment your videos into smaller clips.", 
  sections: [
    {
      icon: {
        src: "icons/Upload.png", 
        alt: "Relume logo 1",
      },
      heading: "Automatic video segmentation made simple and efficient.", 
      description:
        "Our platform allows you to upload large videos seamlessly.", 
      button: {
        title: "Upload", 
        variant: "link",
        size: "link", 
        iconRight: <RxChevronRight />, 
        iconLeft: null, 
      },
    },
    {
      icon: {
        src: "icons/Download.png", 
        alt: "Relume logo 2", 
      },
      heading: "Transform your videos into easily shareable clips in seconds.", 
      description:
        "Experience the convenience of automatic video trimming after your upload.", 
      button: {
        title: "Download", 
        variant: "link", 
        size: "link", 
        iconRight: <RxChevronRight />, 
        iconLeft: null, 
      },
    },
    {
      icon: {
        src: "icons/Play.png", 
        alt: "Relume logo 3", 
      },
      heading: "Start your video editing journey with just a few clicks.", 
      description:
        "Join our community and make video sharing effortless.", 
      button: {
        title: "Play", 
        variant: "link", 
        size: "link", 
        iconRight: <RxChevronRight />, 
        iconLeft: null, 
      },
    },
  ],
};



export const Layout415Defaults = {
  heading: "Unlock the Power of Efficient Video Management with Our Service",
  description:
    "Save time and streamline your workflow with our automated video segmentation. Experience hassle-free video management that adapts to your needs.",
  featureSections: [
    {
      icon: {
        src: "icons/Time.png",
        alt: "Time image",
      },
      title: "Time-Saving",
      description:
        "Upload large videos and let our platform handle the trimming automatically.",
    },
    {
      icon: {
        src: "icons/fast.png",
        alt: "Efficient image",
      },
      title: "Efficient Management",
      description:
        "Easily organize and access your video clips with our intuitive interface.",
    },
    {
      icon: {
        src: "icons/customizable.png",
        alt: "customizable image",
      },
      title: "Customizable Segments",
      description:
        "Customize and fine-tune video segments to suit your exact requirements with ease.",
    },
    {
      icon: {
        src: "icons/integrity.png",
        alt: "integrity image",
      },
      title: "Seamless Integration",
      description:
        "Integrate your video management process seamlessly with your existing workflows.",
    },
    {
      icon: {
        src: "icons/analytics.png",
        alt: "analytics image",
      },
      title: "Advanced Analytics",
      description:
        "Get insights into your video performance and optimize for better engagement.",
    },
  ],
};



export const Testimonial1Defaults = {
  quote:
    '"Using this platform transformed our video editing process! The automatic segmentation saved us hours of work and improved our workflow immensely."',
  avatar: {
    src: "Man.jpg",
    alt: "Testimonial avatar",
  },
  name: "Jane Doe",
  position: "Editor",
  companyName: "Media Corp",
};



export const Cta5Defaults = {
  heading: "Start Your Video Editing Journey",
  description:
    "Join us today and transform your large videos into easily shareable clips with just a click!",
  buttons: [
    { title: "Get Started", className: "bg-white text-black" },
    { title: "Learn More", variant: "secondary-alt" },
  ],
  video: "https://d22po4pjz3o32e.cloudfront.net/placeholder-video.mp4",
  videoType: "video/mp4",
};


export const Faq5Defaults = {
  heading: "FAQs",
  description:
    "Find answers to common questions about our video uploading and trimming platform.",
  questions: [
    {
      title: "What video formats are supported?",
      answer:
        "Our platform supports MP4, AVI, and MOV formats. You can easily upload these video types for trimming. Ensure your videos meet these specifications for a smooth experience.",
    },
    {
      title: "How do I upload?",
      answer:
        "Simply drag and drop your video files into the designated area or click to upload. Once uploaded, your videos will be processed automatically. You can then select segments for trimming.",
    },
    {
      title: "Can I download videos?",
      answer:
        "Yes, once your videos are trimmed, you can download them directly. Each trimmed segment will have a download button next to it. Enjoy your clips anytime, anywhere!",
    },
    {
      title: "Is there a size limit?",
      answer:
        "Yes, there is a maximum file size limit for uploads. Please check our guidelines for specific details. This ensures a smooth uploading process for all users.",
    },
    {
      title: "What if I need help?",
      answer:
        "If you have any questions or need assistance, please reach out to our support team. We're here to help you with any issues you may encounter. Your satisfaction is our priority!",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Contact us for further assistance.",
  button: {
    title: "Contact",
    variant: "secondary",
    className: "text-black bg-white",
  },
};

import { FaXTwitter } from "react-icons/fa6";
import {BiLogoFacebookCircle,BiLogoInstagram,BiLogoLinkedinSquare,BiLogoYoutube,} from "react-icons/bi";

export const Footer5Defaults = {
  logo: {
    url: "/",
    src: "Logo.png",
    alt: "Logo image",
  },
  newsletterHeading: "Subscribe to Updates",
  newsletterDescription: "Stay informed with our latest news and offers.",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Subscribe",
    variant: "secondary",
    size: "sm",
    className:"bg-white text-black"
  },
  termsAndConditions: `
  <p class='text-xs'>
    By subscribing you agree to with our 
    <a href='#' class='underline'>Privacy Policy</a>.
  </p>
  `,
  columnLinks: [
    {
        title: "Quick Links",
        links: [
          { title: "About Us", url: "#" },
          { title: "Contact Us", url: "#" },
          { title: "Help Center", url: "#" },
          { title: "Blog Posts", url: "#" },
          { title: "Careers", url: "#" },
        ],
    },
    {
    title: "Follow Us",
    links: [
      { title: "Facebook Page", url: "#" },
      { title: "Twitter Feed", url: "#" },
      { title: "Instagram Gallery", url: "#" },
      { title: "LinkedIn Profile", url: "#" },
      { title: "YouTube Channel", url: "#" },
    ],
    },
    {
        title: "Resources",
        links: [
          { title: "Case Studies", url: "#" },
          { title: "White Papers", url: "#" },
          { title: "Webinars", url: "#" },
          { title: "E-books", url: "#" },
          { title: "FAQs", url: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
          { title: "Privacy Policy", url: "#" },
          { title: "Terms of Use", url: "#" },
          { title: "Cookie Policy", url: "#" },
          { title: "Support", url: "#" },
          { title: "Contact Customer Service", url: "#" },
        ],
    },
    {
        title: "Company",
        links: [
          { title: "Our Mission", url: "#" },
          { title: "Our Vision", url: "#" },
          { title: "Our Values", url: "#" },
          { title: "Join Our Team", url: "#" },
          { title: "Get Involved", url: "#" },
        ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
    { url: "#", icon: <BiLogoInstagram className="size-6" /> },
    { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    { url: "#", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: "© 2024 Clipstream. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#" },
  ],
};
