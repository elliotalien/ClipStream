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
        title: "Button",               // GENERIC BUTTON WITH STYLES
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
  