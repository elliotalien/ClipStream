export const Navbar1Defaults = {
    logo: {
      url: "#",         // LINK TO THE HOME OR ANY PAGE WHEN CLICKING ON THE LOGO
      src: "Logo.png",  // IMAGE FILE NAME FOR THE LOGO
      alt: "Logo image",// ACCESSIBILITY TEXT FOR SCREEN READERS
    },
    navLinks: [
      { title: "Home", url: "#" },     // HOME LINK
      { title: "About", url: "#" },    // ABOUT LINK
      { title: "Contact", url: "#" },  // CONTACT LINK
    ],
    buttons: [
      {
        title: "Sign up",               // GENERIC BUTTON WITH STYLES
        className: "bg-white",         // CUSTOM CSS CLASS (BACKGROUND WHITE)
        variant: "secondary",          // VARIANT OF THE BUTTON (STYLES CAN BE BASED ON VARIANT)
        size: "sm",                    // SMALL SIZE BUTTON
      },
      {
        title: "Login",                // LOGIN BUTTON WITHOUT SPECIFIC CLASS OR VARIANT
        size: "sm",                    // SMALL SIZE BUTTON
        className:"border-inherit"     // CUSTOM CSS CLASS (BORDER)
      },
    ],
  };
  



export const headerData = {
  
    heading: "Streamline Your Video Management Experience Today",  // Main heading text
    
    description:                                                   // Description below the heading
      "Welcome to our innovative platform where managing your video content is effortless. Upload, trim, and share your videos seamlessly with just a few clicks.",
    
    buttons: [                                                     // Array of buttons to display in the header
      { 
        title: "Get Started",                                      // Text for the primary button
        className: "bg-white text-black"                           // CSS class for styling the primary button
      },
      { 
        title: "Learn More",                                       // Text for the secondary button
        variant: "secondary-alt"                                   // Variant style for the secondary button
      },
    ],
  
    imagesPartOne: [                                               // Array of images for the first column of images
      {
        src: "Heroimages/1.jpg",                                   // Image source path for the first image
        alt: "Relume placeholder image 1",                         // Alt text for the first image
      },
      {
        src: "Heroimages/2.jpg",                                   // Image source path for the second image
        alt: "Relume placeholder image 2",                         // Alt text for the second image
      },
      {
        src: "Heroimages/3.jpg",                                   // Image source path for the third image
        alt: "Relume placeholder image 3",                         // Alt text for the third image
      },
      {
        src: "Heroimages/4.jpg",                                   // Image source path for the fourth image
        alt: "Relume placeholder image 4",                         // Alt text for the fourth image
      },
    ],
  
    imagesPartTwo: [                                               // Array of images for the second column of images
      {
        src: "Heroimages/5.jpg",                                   // Image source path for the fifth image
        alt: "Relume placeholder image 5",                         // Alt text for the fifth image
      },
      {
        src: "Heroimages/6.jpg",                                   // Image source path for the sixth image
        alt: "Relume placeholder image 6",                         // Alt text for the sixth image
      },
      {
        src: "Heroimages/7.jpg",                                   // Image source path for the seventh image
        alt: "Relume placeholder image 7",                         // Alt text for the seventh image
      },
      {
        src: "Heroimages/8.jpg",                                   // Image source path for the eighth image
        alt: "Relume placeholder image 8",                         // Alt text for the eighth image
      },
    ],
  };
  



export const Layout242Defaults = {
  heading: "Effortlessly upload and segment your videos into smaller clips.", // Main heading for the layout
  sections: [
    {
      icon: {
        src: "icons/Upload.png", // Icon image for the first section
        alt: "Relume logo 1", // Alt text for accessibility
      },
      heading: "Automatic video segmentation made simple and efficient.", // Heading for the first section
      description:
        "Our platform allows you to upload large videos seamlessly.", // Description of the feature
      button: {
        title: "Upload", // Button text
        variant: "link", // Button variant (style)
        size: "link", // Button size (style)
        iconRight: null, // No icon on the right of the button
        iconLeft: null,  // No icon on the left of the button
      },
    },
    {
      icon: {
        src: "icons/Download.png", // Icon image for the second section
        alt: "Relume logo 2", // Alt text for accessibility
      },
      heading: "Transform your videos into easily shareable clips in seconds.", // Heading for the second section
      description:
        "Experience the convenience of automatic video trimming after your upload.", // Description of the feature
      button: {
        title: "Download", // Button text
        variant: "link", // Button variant (style)
        size: "link", // Button size (style)
        iconRight: null, // No icon on the right of the button
        iconLeft: null,  // No icon on the left of the button
      },
    },
    {
      icon: {
        src: "icons/Play.png", // Icon image for the third section
        alt: "Relume logo 3", // Alt text for accessibility
      },
      heading: "Start your video editing journey with just a few clicks.", // Heading for the third section
      description:
        "Join our community and make video sharing effortless.", // Description of the feature
      button: {
        title: "Play", // Button text
        variant: "link", // Button variant (style)
        size: "link", // Button size (style)
        iconRight: null, // No icon on the right of the button
        iconLeft: null,  // No icon on the left of the button
      },
    },
  ],
};
