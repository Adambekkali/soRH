<template>
  <div class="max-w-6xl mx-auto px-4 w-full pt-24 md:pt-0">
    <h2 class="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center text-[#004732]">
      Notre Expertise
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
      <div
          v-for="(item, index) in expertise"
          :key="index"
          @click="selectedItem = item"
          class="aspect-square p-4 md:p-8 rounded-2xl border border-[#f8faf9] bg-[#f8faf9] hover:border-[#00a86b] hover:bg-white hover:shadow-xl transition-all duration-500 group flex flex-col items-center justify-center text-center cursor-pointer"
      >
        <div class="text-[#00a86b] mb-3 md:mb-6 group-hover:scale-110 transition-transform" v-html="item.icon"></div>
        <h3 class="font-bold text-xs md:text-lg uppercase tracking-wider text-[#004732]">{{ item.title }}</h3>
        <p class="hidden md:block text-sm text-slate-500 mt-2">Cliquez pour en savoir plus</p>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="selectedItem" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-[#004732]/40 backdrop-blur-sm" @click="selectedItem = null"></div>

        <div class="bg-white rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-2xl relative z-10 overflow-y-auto max-h-[90vh]">
          <button @click="selectedItem = null" class="absolute top-4 right-4 text-slate-400 hover:text-[#004732] text-2xl">✕</button>

          <div class="text-[#00a86b] mb-4" v-html="selectedItem.icon"></div>
          <h3 class="text-2xl md:text-3xl font-bold text-[#004732] mb-4">{{ selectedItem.fullTitle }}</h3>

          <p class="text-slate-600 mb-6 leading-relaxed text-lg">
            {{ selectedItem.description }}
          </p>

          <div class="space-y-4">
            <div v-for="point in selectedItem.points" :key="point" class="flex items-start gap-3">
              <span class="text-[#00a86b] font-bold">✓</span>
              <span class="text-slate-700 font-medium">{{ point }}</span>
            </div>
          </div>

          <button @click="selectedItem = null" class="mt-8 w-full py-4 bg-[#00a86b] text-white rounded-xl font-bold hover:bg-[#004732] transition">
            Fermer
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedItem = ref(null);

const expertise = [
  {
    title: "Paie",
    fullTitle: "Gestion Intégrale & Conformité",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
    description: "Nous assurons une production de paie rigoureuse et sécurisée, adaptée aux spécificités de votre secteur.",
    points: [
      "Production des bulletins et DSN sous 48h",
      "Veille constante des obligations conventionnelles",
      "Outils collaboratifs pour un suivi en temps réel"
    ]
  },
  {
    title: "RH",
    fullTitle: "Administration & Vie du Salarié",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    description: "De l'embauche au départ du salarié, nous sécurisons chaque étape administrative de votre gestion sociale.",
    points: [
      "Rédaction de contrats et avenants sur-mesure",
      "Gestion des affiliations (Mutuelle, Prévoyance)",
      "Mise en place du CSE et règlement intérieur"
    ]
  },
  {
    title: "Conseil",
    fullTitle: "Expertise Stratégique & Audit",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    description: "Un accompagnement de haut niveau pour protéger votre entreprise face aux risques sociaux.",
    points: [
      "Assistance dédiée en cas de contrôle URSSAF",
      "Accords d'intéressement et participation",
      "Conseil expert en ruptures de contrat et licenciements"
    ]
  }
];
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
