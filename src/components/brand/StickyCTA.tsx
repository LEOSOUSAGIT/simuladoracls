"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

/**
 * Barra de conversão fixa no mobile.
 *
 * Grande parte do tráfego pago chega pelo celular, onde o CTA do Hero sai da
 * tela nos primeiros segundos de scroll. A barra aparece depois do Hero e
 * some ao chegar na seção de oferta, para não competir com o botão principal.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const offer = document.getElementById("oferta");

    function onScroll() {
      const passedHero = window.scrollY > window.innerHeight * 0.9;
      const atOffer = offer ? offer.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(passedHero && !atOffer);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/12 bg-bone/95 px-4 py-3 backdrop-blur-md sm:hidden"
        >
          <a
            href={site.brand.checkoutUrl}
            className="flex h-13 w-full items-center justify-center bg-red text-[0.9375rem] font-medium text-bone"
          >
            {site.hero.ctaPrimary}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
