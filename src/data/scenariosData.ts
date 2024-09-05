// scenariosData.ts
export interface Scenario {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    extraStyles?: string;
  }
  
  export const scenarios: Scenario[] = [
    {
      id: 1,
      title: 'Accepts payments via OTT & Smart TV Apps',
      description:
        'Integrate Dynamic QR into your app and start accepting payments with ease.',
      imageSrc: '/tv_mokup_new.png',
      extraStyles: 'md:-mt-10',
    },
    {
      id: 2,
      title: 'Accept payments in store',
      description:
        'Display our dynamic QR code on your POS terminal and accept payments seamlessly.',
        imageSrc: '/pos_new.png',
        extraStyles: 'md:-mt-10',
    
    },
    {
      id: 3,
      title: 'Accept payments on self serving Kiosks',
      description:
        'Allow customers to make contactless payments at self-ordering kiosks.',
        imageSrc: '/kiosks_new_pos.png',
      extraStyles: 'md:-mt-20',
    },
    {
      id: 4,
      title: 'Accepts payments via websites',
      description:
        'Make payment acceptance a breeze by integrating dynamic QR codes into your websites.',
        imageSrc: '/laptop_mokup_new.png',
        extraStyles: 'md:-mt-16',
    }
  ];
  