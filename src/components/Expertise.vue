<template>
  <div class="max-w-6xl mx-auto px-4 w-full pt-24 md:pt-0">
    <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center text-[#004732]">
      Nos Services Clés
    </h2>
    <p class="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
      De la gestion de la paie au conseil stratégique, nous transformons vos RH en <strong class="text-[#00a86b]">levier de performance</strong>.
    </p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      <div
          v-for="(item, index) in expertise"
          :key="index"
          @click="openModal(item)"
          class="aspect-square p-4 md:p-6 rounded-2xl border border-[#f8faf9] bg-[#f8faf9] hover:border-[#00a86b] hover:bg-white hover:shadow-xl transition-all duration-500 group flex flex-col items-center justify-center text-center cursor-pointer relative"
      >
        <div class="text-[#00a86b] mb-3 md:mb-5 group-hover:scale-110 transition-transform" v-html="item.icon"></div>
        <h3 class="font-bold text-xs md:text-base uppercase tracking-wider text-[#004732] mb-2">{{ item.title }}</h3>
        <p class="hidden md:block text-xs text-slate-500 leading-tight px-2">
          {{ item.shortDesc }}
        </p>
        <span class="md:hidden text-[10px] text-white bg-[#00a86b] px-2 py-1 rounded-full font-bold mt-2 shadow-sm">
          Voir le détail
        </span>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="selectedItem" class="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-[#004732]/70 backdrop-blur-sm" @click="closeModal"></div>

        <div class="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl relative z-10 overflow-y-auto max-h-[90vh] border-t-4 border-[#00a86b] flex flex-col">

          <button @click="closeModal" class="absolute top-4 right-4 text-slate-400 hover:text-[#004732] bg-slate-100 hover:bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center transition">✕</button>

          <div class="flex items-center gap-4 mb-6">
            <div class="p-3 bg-[#f8faf9] rounded-xl text-[#00a86b]" v-html="selectedItem.icon"></div>
            <div>
              <h3 class="text-xl md:text-2xl font-bold text-[#004732] leading-tight">{{ selectedItem.fullTitle }}</h3>
              <p class="text-sm text-[#00a86b] font-bold uppercase tracking-wide">Notre engagement</p>
            </div>
          </div>

          <p class="text-slate-600 mb-6 leading-relaxed text-base md:text-lg border-l-4 border-[#00a86b]/20 pl-4 italic">
            <span v-html="selectedItem.description"></span>
          </p>

          <div class="bg-[#f8faf9] p-6 rounded-2xl">
            <h4 class="font-bold text-[#004732] text-sm uppercase tracking-wide mb-4 border-b border-slate-200 pb-2">
              Détail de nos missions :
            </h4>
            <div class="grid md:grid-cols-2 gap-3">
              <div v-for="point in selectedItem.points" :key="point" class="flex items-start gap-2">
                <span class="text-[#00a86b] font-bold mt-0.5">✓</span>
                <span class="text-slate-700 font-medium text-sm md:text-base leading-snug">{{ point }}</span>
              </div>
            </div>
          </div>

          <button @click="closeModal" class="mt-8 w-full py-3 bg-[#004732] text-white rounded-xl font-bold hover:bg-[#00a86b] transition shadow-lg shadow-[#00a86b]/20">
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
    fullTitle: "Gestion Intégrale de la Paie",
    shortDesc: "Externalisation complète, fiable et sécurisée.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>`,
    description: "Nous assurons une gestion <strong>complète et fiable</strong>. Fini le stress des erreurs : nous garantissons des bulletins conformes aux conventions collectives pour vous et vos salariés, livrés en temps et en heure.",
    points: [
      "Collecte et contrôle des variables",
      "Bulletins & DSN sous 48h",
      "Télépaiements aux caisses",
      "Suivi des congés & absences",
      "Mise à jour conventionnelle auto",
      "Coffre-fort numérique salarié"
    ]
  },
  {
    title: "Juridique & Social",
    fullTitle: "Conseil Juridique & Droit Social",
    shortDesc: "Sécurisez vos décisions, évitez les risques.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    description: "Le droit du travail est complexe et risqué. Nous vous aidons à prendre les <strong>bonnes décisions</strong>, au bon moment, pour sécuriser votre entreprise face aux Prud'hommes ou contrôles.",
    points: [
      "Rédaction de contrats (CDI/CDD)",
      "Gestion des licenciements",
      "Ruptures conventionnelles",
      "Veille juridique permanente",
      "Sanctions disciplinaires",
      "Audit de conformité légale"
    ]
  },
  {
    title: "Accompagnement RH",
    fullTitle: "Organisation & Suivi RH",
    shortDesc: "Structurez vos RH, gagnez du temps.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    description: "Nous vous aidons à structurer votre quotidien. L'objectif : des ressources humaines bien gérées pour vous faire <strong>gagner du temps</strong> et de la sérénité administrative.",
    points: [
      "Entrées/Sorties (Onboarding)",
      "Affiliations Mutuelle/Prévoyance",
      "Organisation temps de travail",
      "Mise en place du CSE",
      "Règlement intérieur",
      "Médecine du travail"
    ]
  },
  {
    title: "Conseil Stratégique",
    fullTitle: "Stratégie RH & Audit",
    shortDesc: "Transformez vos RH en levier de croissance.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V7a5 5 0 0 1 10 0v4"/><rect x="2" y="11" width="20" height="8" rx="2"/><path d="M12 15h.01"/></svg>`,
    description: "Plus qu'un prestataire, nous sommes votre <strong>partenaire business</strong>. Nous analysons votre organisation pour anticiper vos besoins futurs et optimiser vos coûts.",
    points: [
      "Assistance contrôle URSSAF",
      "Accords d'intéressement",
      "Epargne salariale (PEE/PERCO)",
      "Optimisation des coûts sociaux",
      "Négociations annuelles (NAO)",
      "Audit social complet"
    ]
  }
];
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: scale(0.95); }
</style>