import mariage from "@/public/images/prestations/menu/mariage.jpg"
import grossesse from "@/public/images/prestations/menu/grossesse.jpg"
import couple from "@/public/images/prestations/menu/couple.jpg"
import famille from "@/public/images/prestations/menu/famille.jpg"
import entreprise from "@/public/images/prestations/menu/entreprise.jpg"
import immobilier from "@/public/images/prestations/menu/immobilier.jpg"
import packshot from "@/public/images/prestations/menu/packshot.jpg"
import scolaire from "@/public/images/prestations/menu/scolaire.jpg"
import identite from "@/public/images/prestations/menu/identite.jpg"
import entrepriseVideoMenu from "@/public/images/prestations/video/presta-video1.png";
import mariageVideoMenu from "@/public/images/prestations/video/presta-video2.png";

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