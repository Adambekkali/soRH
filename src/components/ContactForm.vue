<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
    <!-- FIX : grid-cols-1 sur mobile pour empiler, md:grid-cols-2 sur PC -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
          type="text"
          placeholder="Prénom"
          class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#FFBD59] outline-none transition-all"
      />
      <input
          type="email"
          placeholder="Adresse e-mail"
          class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#FFBD59] outline-none transition-all"
      />
    </div>
    <textarea
        placeholder="Comment pouvons-nous vous aider ?"
        rows="4"
        class="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl focus:ring-2 focus:ring-[#FFBD59] outline-none transition-all"
    ></textarea>
    <button
        type="submit"
        class="w-full bg-[#00a86b] text-white font-bold py-4 rounded-xl hover:bg-[#004732] transition-colors shadow-lg shadow-[#00a86b]/20"
    >
      Demander un audit gratuit
    </button>
  </form>
</template>

<script setup>
const handleSubmit = () => {
  // Correction de la phrase
  alert('Merci ! Notre équipe vous contactera le plus rapidement possible.');
}
</script>