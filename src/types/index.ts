export interface NavItem {
    href: string;
    label: string;
  }
  
  
  
  export interface Service {
    title: string;
    description: string;
    image: string;
  }
  
    
    
  export type HeroData = {
      title: string;
      description: string;
      buttonText1: string;
      buttonLink1: string;
      buttonText2: string;
      buttonLink2: string;
      image: string; 
    };
    
    

  
    export interface FooterLink {
      name: string;
      href: string;
    }
    
    export interface FooterSection {
      title: string;
      links: FooterLink[];
    }
    