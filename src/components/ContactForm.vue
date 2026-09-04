<template>
  <form name="contact" data-netlify="true" @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">

    <input type="hidden" name="form-name" value="contact" />

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
        class="w-full bg-[#00a86b] text-white font-bold py-4 rounded-xl hover:bg-[#004732] transition-colors shadow-lg shadow-[#00a86b]/20"
    >
      Demander un devis
    </button>
  </form>
</template>

<script setup>
const handleSubmit = async (event) => {
  const form = event.target;
  const formData = new FormData(form);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      alert("Merci ! Notre équipe vous contactera le plus rapidement possible.");
      form.reset();
    } else {
      alert("Une erreur est survenue lors de l'envoi du message.");
    }
  } catch (error) {
    alert("Erreur de connexion. Veuillez réessayer.");
  }
}
</script>
