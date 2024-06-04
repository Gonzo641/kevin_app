import mariage from "@/public/images/prestations/menu/mariage.jpg";
import grossesse from "@/public/images/prestations/menu/grossesse.jpg";
import couple from "@/public/images/prestations/menu/couple.jpg";
import famille from "@/public/images/prestations/menu/famille.jpg";
import entreprise from "@/public/images/prestations/menu/entreprise.jpg";
import immobilier from "@/public/images/prestations/menu/immobilier.jpg";
import packshot from "@/public/images/prestations/menu/packshot.jpg";
import scolaire from "@/public/images/prestations/menu/scolaire.jpg";
import identite from "@/public/images/prestations/menu/identite.jpg";
import entrepriseVideoMenu from "@/public/images/prestations/video/presta-video1.png";
import mariageVideoMenu from "@/public/images/prestations/video/presta-video2.png";

import prepa1 from "@/public/images/prestations/mariage/mariage-prepa1.png";
import prepa2 from "@/public/images/prestations/mariage/mariage-prepa2.png";
import prepa3 from "@/public/images/prestations/mariage/mariage-prepa3.png";
import prepa4 from "@/public/images/prestations/mariage/mariage-prepa4.png";
import prepa5 from "@/public/images/prestations/mariage/mariage-prepa5.png";
import prepa6 from "@/public/images/prestations/mariage/mariage-prepa6.png";

import couple1 from "@/public/images/prestations/mariage/mariage-couple1.png";
import couple2 from "@/public/images/prestations/mariage/mariage-couple2.png";
import couple3 from "@/public/images/prestations/mariage/mariage-couple3.png";
import couple4 from "@/public/images/prestations/mariage/mariage-couple4.png";
import couple5 from "@/public/images/prestations/mariage/mariage-couple5.png";
import couple6 from "@/public/images/prestations/mariage/mariage-couple6.png";

import mairie1 from "@/public/images/prestations/mariage/mariage-mairie1.png";
import mairie2 from "@/public/images/prestations/mariage/mariage-mairie2.png";
import mairie3 from "@/public/images/prestations/mariage/mariage-mairie3.png";
import mairie4 from "@/public/images/prestations/mariage/mariage-mairie4.png";
import mairie5 from "@/public/images/prestations/mariage/mariage-mairie5.png";
import mairie6 from "@/public/images/prestations/mariage/mariage-mairie6.png";

import ceremonie1 from "@/public/images/prestations/mariage/mariage-ceremonie1.png";
import ceremonie2 from "@/public/images/prestations/mariage/mariage-ceremonie2.png";
import ceremonie3 from "@/public/images/prestations/mariage/mariage-ceremonie3.png";
import ceremonie4 from "@/public/images/prestations/mariage/mariage-ceremonie4.png";
import ceremonie5 from "@/public/images/prestations/mariage/mariage-ceremonie5.png";
import ceremonie6 from "@/public/images/prestations/mariage/mariage-ceremonie6.png";

import groupe1 from "@/public/images/prestations/mariage/mariage-groupe1.png";
import groupe2 from "@/public/images/prestations/mariage/mariage-groupe2.png";
import groupe3 from "@/public/images/prestations/mariage/mariage-groupe3.png";
import groupe4 from "@/public/images/prestations/mariage/mariage-groupe4.png";
import groupe5 from "@/public/images/prestations/mariage/mariage-groupe5.png";

import vin1 from "@/public/images/prestations/mariage/mariage-vin1.png";
import vin2 from "@/public/images/prestations/mariage/mariage-vin2.png";
import vin3 from "@/public/images/prestations/mariage/mariage-vin3.png";
import vin4 from "@/public/images/prestations/mariage/mariage-vin4.png";
import vin5 from "@/public/images/prestations/mariage/mariage-vin5.png";
import vin6 from "@/public/images/prestations/mariage/mariage-vin6.png";

import soiree1 from "@/public/images/prestations/mariage/mariage-soiree1.png";
import soiree2 from "@/public/images/prestations/mariage/mariage-soiree2.png";
import soiree3 from "@/public/images/prestations/mariage/mariage-soiree3.png";
import soiree4 from "@/public/images/prestations/mariage/mariage-soiree4.png";
import soiree5 from "@/public/images/prestations/mariage/mariage-soiree5.png";
import soiree6 from "@/public/images/prestations/mariage/mariage-soiree6.png";

import bonCadeau from "@/public/images/boutique/bon-cadeau.png";
import cadre1 from "@/public/images/boutique/cadre1.png";
import cadre2 from "@/public/images/boutique/cadre2.png";
import cadre3 from "@/public/images/boutique/cadre3.png";
import cadre4 from "@/public/images/boutique/cadre4.png";
import cadre5 from "@/public/images/boutique/cadre5.png";
import cadre6 from "@/public/images/boutique/cadre6.png";



export const links = [
    {
      name: "Accueil",
      hash: "#accueil",
    },
    {
      name: "Prestations",
      hash: "#prestations",
    },
    {
      name: "Portfolio",
      hash: "#portfolio",
    },
    {
        name: "À propos",
        hash: "#apropos",
      },
    // {
    //   name: "Albums Clients",
    //   hash: "#albums",
    // },
    {
        name: "Contact",
        hash: "#contact",
      },
    // {
    //   name: "Boutique",
    //   hash: "#boutique",
    // },
  ] as const;

  export const prestaData = [
    {
      title: "mariage",
      imageUrl: mariage,
      link: "/mariage"
    },
    {
      title: "grossesse",
      imageUrl: grossesse,
      link: "/grossesse"
    },
    {
      title: "couple",
      imageUrl: couple,
      link: "/couple"
    },
    {
      title: "famille",
      imageUrl: famille,
      link: "/famille"
    },
    {
      title: "entreprise",
      imageUrl: entreprise,
      link: "/entreprise"
    },
    {
      title: "immobilier",
      imageUrl: immobilier,
      link: "/immobilier"
    },
    {
      title: "packshot",
      imageUrl: packshot,
      link: "/packshot"
    },
    {
      title: "scolaire",
      imageUrl: scolaire,
      link: "/scolaire"
    },
    {
      title: "identite",
      imageUrl: identite,
      link: "/identite"
    },

  ] as const;

  export const storeData = [
    {
      title: "Grossesse",
      imageUrl: bonCadeau,
      price: 100 ,
      // link: "/mariage"
    },
    {
      title: "Famille",
      imageUrl: bonCadeau,
      price: 100 ,
      // link: "/grossesse"
    },
    {
      title: "Couple",
      imageUrl: bonCadeau,
      price: 100 ,
      // link: "/couple"
    },
    {
      title: "Cadre B.S.A Empire Star",
      imageUrl: cadre1,
      price: 190 ,
      // link: "/famille"
    },
    {
      title: "Cadre DS MALTTER Type G",
      imageUrl: cadre2,
      price: 190 ,
      // link: "/entreprise"
    },
    {
      title: "Cadre MATCHLESS",
      imageUrl: cadre3,
      price: 190 ,
      // link: "/immobilier"
    },
    {
      title: "Cadre NORTON ES2",
      imageUrl: cadre4,
      price: 190 ,
      // link: "/packshot"
    },
    {
      title: "Cadre NORTON M18",
      imageUrl: cadre5,
      price: 190 ,
      // link: "/scolaire"
    },
    {
      title: "NORTON M18 compo",
      imageUrl: cadre6,
      price: 190 ,
      // link: "/identite"
    },

  ] as const;

  export const prestaVideo = [
    {
      title: "entreprise",
      imageUrl: entrepriseVideoMenu,
      link: "/video-entreprise"
    },
    {
      title: "mariage",
      imageUrl: mariageVideoMenu,
      link: "/video-mariage"
    },
  ] as const;

  export const mariageCarouselPreparatif = [
    {
      imageUrl: prepa1,
    },
    {
      imageUrl: prepa2,
    },
    {
      imageUrl: prepa3,
    },
    {
      imageUrl: prepa4,
    },
    {
      imageUrl: prepa5,
    },
    {
      imageUrl: prepa6,
    },
  ] as const;

  export const mariageCarouselCouple = [
    {
      imageUrl: couple1,
    },
    {
      imageUrl: couple2,
    },
    {
      imageUrl: couple3,
    },
    {
      imageUrl: couple4,
    },
    {
      imageUrl: couple5,
    },
    {
      imageUrl: couple6,
    },
  ] as const;

  export const mariageCarouselMairie = [
    {
      imageUrl: mairie1,
    },
    {
      imageUrl: mairie2,
    },
    {
      imageUrl: mairie3,
    },
    {
      imageUrl: mairie4,
    },
    {
      imageUrl: mairie5,
    },
    {
      imageUrl: mairie6,
    },
  ] as const;

  export const mariageCarouselCeremonie = [
    {
      imageUrl: ceremonie1,
    },
    {
      imageUrl: ceremonie2,
    },
    {
      imageUrl: ceremonie3,
    },
    {
      imageUrl: ceremonie4,
    },
    {
      imageUrl: ceremonie5,
    },
    {
      imageUrl: ceremonie6,
    },
  ] as const;

  export const mariageCarouselGroupe = [
    {
      imageUrl: groupe1,
    },
    {
      imageUrl: groupe2,
    },
    {
      imageUrl: groupe3,
    },
    {
      imageUrl: groupe4,
    },
    {
      imageUrl: groupe5,
    },
  ] as const;

  export const mariageCarouselVin = [
    {
      imageUrl: vin1,
    },
    {
      imageUrl: vin2,
    },
    {
      imageUrl: vin3,
    },
    {
      imageUrl: vin4,
    },
    {
      imageUrl: vin5,
    },
    {
      imageUrl: vin6,
    },
  ] as const;

  export const mariageCarouselSoiree = [
    {
      imageUrl: soiree1,
    },
    {
      imageUrl: soiree2,
    },
    {
      imageUrl: soiree3,
    },
    {
      imageUrl: soiree4,
    },
    {
      imageUrl: soiree5,
    },
    {
      imageUrl: soiree6,
    },
  ] as const;