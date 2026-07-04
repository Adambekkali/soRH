<template>
  <!-- Le conteneur principal -->
  <div class="max-w-6xl mx-auto px-4 w-full pt-24 md:pt-0 text-center relative z-10">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-[#004732]">
      Nos Services Clés
    </h2>
    <p class="text-slate-700 font-medium mb-10 max-w-2xl mx-auto">
      De la gestion de la paie au conseil stratégique, nous transformons vos RH en <strong class="text-[#00a86b] font-bold">levier de performance</strong>.
    </p>

    <!-- FIX : md:grid-cols-3 au lieu de 4. Et grid-cols-1 sur mobile pour un bel alignement -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
      <div
          v-for="(item, index) in expertise"
          :key="index"
          @click="openModal(item)"
          class="aspect-square md:aspect-auto md:h-64 p-6 rounded-2xl border border-slate-100 bg-white/90 backdrop-blur-sm shadow-md hover:border-[#00a86b] hover:bg-white hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center text-center cursor-pointer relative"
      >
        <div class="text-[#00a86b] mb-4 group-hover:scale-110 transition-transform duration-300" v-html="item.icon"></div>
        <h3 class="font-bold text-lg uppercase tracking-wider text-[#004732] mb-3">{{ item.title }}</h3>
        <p class="text-sm text-slate-600 leading-relaxed px-2">
          {{ item.shortDesc }}
        </p>
        <span class="text-xs text-white bg-[#004732] px-3 py-1.5 rounded-full font-bold mt-4 shadow-sm">
          En savoir +
        </span>
      </div>
    </div>

    <!-- Modale (Pop-up) -->
    <Transition name="fade">
      <div v-if="selectedItem" class="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-[#004732]/80 backdrop-blur-sm" @click="closeModal"></div>

        <div class="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative z-10 overflow-y-auto max-h-[90vh] border-t-4 border-[#00a86b] flex flex-col">
          <button @click="closeModal" class="absolute top-4 right-4 text-slate-400 hover:text-[#004732] bg-slate-100 hover:bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center transition">✕</button>

          <div class="flex items-center gap-4 mb-6">
            <div class="p-3 bg-[#f8faf9] rounded-xl text-[#00a86b]" v-html="selectedItem.icon"></div>
            <div class="text-left">
              <h3 class="text-xl md:text-2xl font-bold text-[#004732] leading-tight">{{ selectedItem.fullTitle }}</h3>
              <p class="text-sm text-[#00a86b] font-bold uppercase tracking-wide">Notre engagement</p>
            </div>
          </div>

          <p class="text-slate-700 mb-6 leading-relaxed text-base md:text-lg border-l-4 border-[#00a86b]/40 pl-4 italic text-left">
            <span v-html="selectedItem.description"></span>
          </p>

          <div class="bg-[#f8faf9] p-6 rounded-2xl text-left">
            <h4 class="font-bold text-[#004732] text-sm uppercase tracking-wide mb-4 border-b border-slate-200 pb-2">
              Détail de nos missions :
            </h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div v-for="point in selectedItem.points" :key="point" class="flex items-start gap-2">
                <span class="text-[#00a86b] font-bold mt-0.5">✓</span>
                <span class="text-slate-700 font-medium text-sm md:text-base leading-snug">{{ point }}</span>
              </div>
            </div>
          </div>

          <button @click="closeModal" class="mt-8 w-full py-4 bg-[#004732] text-white rounded-xl font-bold hover:bg-[#00a86b] transition shadow-lg shadow-[#004732]/20">
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

const openModal = (item) => {
  selectedItem.value = item;
  // Bloque le scroll de la page derrière
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedItem.value = null;
  // Réactive le scroll
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
];</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: scale(0.95); }
</style>