export const Navbar1Defaults = {
  logo: {
    url: "/",
    src: "Logo.png",
    alt: "Logo image",
  },
  navLinks: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
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



import { Heading, Text, Img } from "@relume_io/relume-ui"; 


export const Layout6SlotDefaults = {
  slot2: [ 
    <Heading headingSize="h2" key="heading">
      Unlock the Power of Efficient Video Management with Our Service
    </Heading>,
    <Text key="text1"> 
      Save time and streamline your workflow with our automated video segmentation. Experience hassle-free video management that adapts to your needs.
    </Text>,
    <div key="subheading1"> 
      <Heading headingSize="h6">Time-Saving</Heading>
      <Text>
        Upload large videos and let our platform handle the trimming automatically. 
      </Text>
    </div>,
    <div key="subheading2"> 
      <Heading headingSize="h6">Efficient Management</Heading>
      <Text>
        Easily organize and access your video clips with our intuitive interface. 
      </Text>
    </div>,
  ],
  slot1: [ 
    <Img
      src="/Service.jpg" 
      alt="Relume placeholder image" 
      key="image" 
    />,
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

