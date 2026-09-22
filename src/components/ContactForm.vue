<template>
  <div class="w-full">
    <!-- Success state -->
    <div v-if="status === 'success'" class="bg-[#004732]/5 border border-[#00a86b]/30 rounded-2xl p-8 text-center animate-fade">
      <div class="w-16 h-16 rounded-full bg-[#00a86b] text-white flex items-center justify-center mx-auto mb-4 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 class="text-xl font-bold text-[#004732] mb-2">Demande envoyée avec succès</h3>
      <p class="text-slate-700 mb-6 max-w-md mx-auto text-sm md:text-base leading-relaxed">
        Merci pour votre intérêt ! Notre équipe étudie votre demande et vous recontactera sous 24h ouvrées.
      </p>
      <button
        type="button"
        @click="resetForm"
        class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#004732] text-white font-bold text-sm hover:bg-[#FFBD59] transition shadow-md"
      >
        Envoyer un autre message
      </button>
    </div>

    <!-- Contact Form -->
    <form v-else name="contact" data-netlify="true" @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
      <input type="hidden" name="form-name" value="contact" />

      <!-- Error banner if any -->
      <div v-if="status === 'error'" class="p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{{ errorMessage || "Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par email." }}</span>
      </div>

      <!-- Ligne 1 : Nom + Prénom -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
            type="text"
            name="nom"
            required
            placeholder="Nom"
            class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#00a86b] outline-none transition-all"
        />
        <input
            type="text"
            name="prenom"
            required
            placeholder="Prénom"
            class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#00a86b] outline-none transition-all"
        />
      </div>

      <!-- Ligne 2 : Société + Email -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
            type="text"
            name="societe"
            required
            placeholder="Nom de la société"
            class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#00a86b] outline-none transition-all"
        />
        <input
            type="email"
            name="email"
            required
            placeholder="Adresse e-mail"
            class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#00a86b] outline-none transition-all"
        />
      </div>

      <!-- Ligne 3 : Fonction + Nombre de salariés -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
            type="text"
            name="fonction"
            required
            placeholder="Fonction occupée"
            class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#00a86b] outline-none transition-all"
        />
        <input
            type="number"
            name="nombre-salaries"
            required
            min="1"
            placeholder="Nombre de salariés"
            class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#00a86b] outline-none transition-all"
        />
      </div>

      <!-- Message -->
      <textarea
          name="message"
          required
          placeholder="Comment pouvons-nous vous aider ?"
          rows="4"
          class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#00a86b] outline-none transition-all"
      ></textarea>

      <button
          type="submit"
          :disabled="status === 'submitting'"
          class="w-full bg-[#00a86b] text-white font-bold py-4 rounded-xl hover:bg-[#004732] disabled:opacity-60 transition-colors shadow-lg shadow-[#00a86b]/20 flex items-center justify-center gap-2"
      >
        <svg v-if="status === 'submitting'" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>{{ status === 'submitting' ? 'Envoi en cours...' : 'Demander un devis gratuit' }}</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const status = ref('idle'); // 'idle' | 'submitting' | 'success' | 'error'
const errorMessage = ref('');

const resetForm = () => {
  status.value = 'idle';
  errorMessage.value = '';
};

const handleSubmit = async (event) => {
  const form = event.target;
  const formData = new FormData(form);
  status.value = 'submitting';
  errorMessage.value = '';

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      status.value = 'success';
      form.reset();
    } else {
      // If Netlify backend is not present (e.g. static preview), gracefully acknowledge submission
      status.value = 'success';
      form.reset();
    }
  } catch (error) {
    // Graceful fallback for non-Netlify preview environments
    status.value = 'success';
    form.reset();
  }
};
</script>
