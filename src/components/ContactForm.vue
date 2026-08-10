<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <input
          type="text"
          placeholder="Prénom"
          class="bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-so-emerald outline-none"
      />
      <input
          type="email"
          placeholder="Adresse e-mail"
          class="bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-so-emerald outline-none"
      />
    </div>
    <textarea
        placeholder="Comment pouvons-nous vous aider ?"
        rows="4"
        class="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-so-emerald outline-none"
    ></textarea>
    <button
        type="submit"
        class="w-full bg-so-emerald text-white font-bold py-4 rounded-xl hover:bg-so-forest transition-colors shadow-lg shadow-so-emerald/20"
    >
      Demander un audit gratuit
    </button>
  </form>
</template>

<script setup>
const handleSubmit = () => {
  alert('Merci ! Notre équipe vous dans le plus rapidement possible.');

}
</script>