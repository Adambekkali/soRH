<template>
  <div class="w-full text-center relative z-10 px-4 md:px-0">
    <h2 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-[#004732]">
      Nos Services Clés
    </h2>
    <p class="text-slate-800 font-medium mb-8 md:mb-10 max-w-2xl mx-auto text-base md:text-lg">
      De la gestion de la paie au conseil stratégique, nous transformons vos RH en <strong class="text-[#FFBD59] font-bold">levier de performance</strong>.
    </p>

    <div class="relative">
      <!-- Le Carrousel (Ajout de ref="carousel") -->
      <div ref="carousel" class="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:pb-8 md:grid md:grid-cols-3 md:gap-8 max-w-5xl mx-auto hide-scrollbar scroll-smooth px-4 md:px-0 -mx-4 md:mx-auto">
        <div
            v-for="(item, index) in expertise"
            :key="index"
            @click="openModal(item)"
            class="w-[85vw] flex-shrink-0 snap-center md:w-auto p-8 rounded-3xl border border-slate-100 bg-white/95 backdrop-blur-md shadow-md hover:border-[#FFBD59] hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer relative h-auto"
        >
          <div class="text-[#00a86b] group-hover:text-[#FFBD59] mb-5 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" v-html="item.icon"></div>
          <h3 class="font-bold text-lg uppercase tracking-wider text-[#004732] mb-3">{{ item.title }}</h3>
          <p class="text-sm text-slate-600 leading-relaxed px-1 flex-grow">
            {{ item.shortDesc }}
          </p>

          <span class="mt-6 text-xs text-[#004732] border border-[#004732]/20 px-6 py-3 rounded-full font-bold uppercase tracking-wider group-hover:bg-[#FFBD59] group-hover:text-white group-hover:border-[#FFBD59] transition-all duration-300 flex items-center gap-2 bg-white shadow-sm w-full justify-center md:w-auto">
            En savoir +
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>

      <!-- NOUVEAU : Les flèches de navigation mobile -->
      <div class="md:hidden flex justify-center items-center gap-6 mt-2 mb-6">
        <!-- Flèche Gauche -->
        <button @click="scrollLeft" class="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-md border border-slate-100 text-[#004732] flex items-center justify-center hover:bg-[#00a86b] hover:text-white hover:border-[#00a86b] transition-all active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <!-- Flèche Droite -->
        <button @click="scrollRight" class="w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-md border border-slate-100 text-[#004732] flex items-center justify-center hover:bg-[#00a86b] hover:text-white hover:border-[#00a86b] transition-all active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Modale (Pop-up) -->
    <Transition name="fade">
      <div v-if="selectedItem" class="fixed inset-0 z-[9999] flex items-center justify-center p-4 text-left">
        <div class="absolute inset-0 bg-[#004732]/80 backdrop-blur-sm" @click="closeModal"></div>

        <div class="bg-white rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl relative z-10 overflow-y-auto max-h-[85vh] border-t-4 border-[#FFBD59] flex flex-col">
          <button @click="closeModal" class="absolute top-4 right-4 text-slate-400 hover:text-[#004732] bg-slate-100 hover:bg-slate-200 rounded-full w-10 h-10 md:w-8 md:h-8 flex items-center justify-center transition">✕</button>

          <div class="flex items-center gap-4 mb-6 pr-8 mt-2">
            <div class="p-3 bg-[#f8faf9] rounded-xl text-[#00a86b] flex-shrink-0" v-html="selectedItem.icon"></div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-[#004732] leading-tight">{{ selectedItem.fullTitle }}</h3>
              <p class="text-xs md:text-sm text-[#FFBD59] font-bold uppercase tracking-wide mt-1">Notre engagement</p>
            </div>
          </div>

          <p class="text-slate-700 mb-8 leading-relaxed text-sm md:text-lg border-l-4 border-[#FFBD59]/40 pl-4 italic">
            <span v-html="selectedItem.description"></span>
          </p>

          <div class="bg-[#f8faf9] p-5 md:p-6 rounded-2xl">
            <h4 class="font-bold text-[#004732] text-xs md:text-sm uppercase tracking-wide mb-4 border-b border-slate-200 pb-2">
              Détail de nos missions :
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div v-for="point in selectedItem.points" :key="point" class="flex items-start gap-2">
                <span class="text-[#00a86b] font-bold mt-0.5">✓</span>
                <span class="text-slate-700 font-medium text-sm md:text-base leading-snug">{{ point }}</span>
              </div>
            </div>
          </div>

          <button @click="closeModal" class="mt-8 w-full py-4 bg-[#004732] text-white rounded-xl font-bold hover:bg-[#FFBD59] transition shadow-lg shadow-[#004732]/20 text-sm md:text-base">
            Fermer la fenêtre
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedItem = ref(null);
// NOUVEAU : Référence pour manipuler le scroll du carrousel
const carousel = ref(null);

const scrollLeft = () => {
  if (carousel.value) {
    // Défile vers la gauche de la largeur approximative d'une carte
    carousel.value.scrollBy({ left: -window.innerWidth * 0.85, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (carousel.value) {
    // Défile vers la droite de la largeur approximative d'une carte
    carousel.value.scrollBy({ left: window.innerWidth * 0.85, behavior: 'smooth' });
  }
};

const openModal = (item) => {
  selectedItem.value = item;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedItem.value = null;
  document.body.style.overflow = '';
};

const expertise = [
  {
    title: "Gestion Paie",
    fullTitle: "Externalisation complète de la paie",
    shortDesc: "Une paie fiable, conforme et parfaitement sécurisée.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
    description: "Nous prenons en charge l’ensemble de votre cycle de paie avec la plus grande rigueur.",
    points: [
      "Établissement des bulletins de salaire",
      "Déclarations sociales (DSN)",
      "Gestion des charges sociales",
      "Gestion des entrées et sorties salariés"
    ],
  },
  {
    title: "Gestion RH",
    fullTitle: "Gestion administrative des ressources humaines",
    shortDesc: "Une gestion fluide et maîtrisée de vos équipes.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    description: "Nous structurons et sécurisons votre organisation sociale pour vous libérer des contraintes RH.",
    points: [
      "Rédaction des contrats de travail",
      "DPAE (Déclaration Préalable)",
      "Suivi administratif des salariés",
      "Gestion rigoureuse des absences"
    ]
  },
  {
    title: "Conseil",
    fullTitle: "Conseil & accompagnement stratégique",
    shortDesc: "Une vision claire et sécurisée de vos obligations.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    description: "Nous vous accompagnons dans vos enjeux RH complexes avec une approche stratégique et sécuritaire.",
    points: [
      "Audit complet de paie",
      "Mise en conformité légale",
      "Assistance en cas de contrôle URSSAF",
      "Conseil juridique personnalisé"
    ]
  }
];
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: scale(0.95); }

/* On masque la vilaine barre de défilement sur le swipe mobile */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>