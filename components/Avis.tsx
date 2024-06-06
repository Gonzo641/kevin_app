"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

export function Avis() {
  return (
    <div className="h-[35rem] rounded-md flex flex-col antialiased bg-kev bg-fixed bg-center bg-cover items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Kevin a fait un travail d'orfèvre. C'est un photographe de talent qui a rendu réelles toutes nos attentes. Même dans nos rêves les plus fous nous n'aurions jamais pensé recevoir des photos aussi belles... Il a sublimé notre mariage. Un grand merci à lui.",
    name: "Sélène",
  },
  {
    quote:
      "Nous avons choisi Kévin comme photographe pour notre mariage et nous avons été ravi de notre choix. Kévin s'intègre parfaitement aux invités, afin de capter des moments spontanés. Il a su par sa gentillesse et sa compréhension, mettre tout le monde à l'aise pour les séances de photos. Ses photos sont magnifiques, c'est à retour en arrière qui nous fait remonter toute l'émotion de ce grand jour. Nous avons eu que des éloges de la part de nos invités, de sa prestation le jour j, et du résultat des photos. Vous pouvez le choisir les yeux fermés ! Merci à toi Kévin pour ces magnifiques souvenirs. Christelle et Eric",
    name: "Christelle",
  },
  {
    quote:
      "Nous avons choisi Kévin pour être le photographe de notre mariage et cela a été un super choix ! Il a su rester discret pour capturer tous les plus beaux moments de cette journée ce qui a été très apprécié des invités. Dynamique, à l'écoute, créatif, c'est un photographe très professionnel qui a su nous mettre à l'aise devant l'objectif. En résumé, c'est un photographe au top que je vous recommande fortement ! Encore merci pour ces magnifiques souvenirs qui resterons pour toujours grâce à tes photos !",
    name: "Amandine",
  },
  // {
  //   quote:
  //     "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
  //   name: "Jane Austen",
  //   title: "Pride and Prejudice",
  // },
  // {
  //   quote:
  //     "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
  //   name: "Herman Melville",
  //   title: "Moby-Dick",
  // },
];
