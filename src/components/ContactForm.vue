<template>
  <!-- Ajout de name="contact" et data-netlify="true" -->
  <form name="contact" data-netlify="true" @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">

    <!-- CHAMP CACHÉ OBLIGATOIRE POUR NETLIFY + VUE.JS -->
    <input type="hidden" name="form-name" value="contact" />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Ajout des attributs 'name' et 'required' -->
      <input
          type="text"
          name="prenom"
          required
          placeholder="Prénom"
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
      Demander un audit gratuit
    </button>
  </form>
</template>

<script setup>
const handleSubmit = async (event) => {
  const form = event.target;
  // Récupère toutes les données des champs qui ont un attribut 'name'
  const formData = new FormData(form);

  try {
    // Envoi silencieux à Netlify via Fetch
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });

    if (response.ok) {
      alert("Merci ! Notre équipe vous contactera le plus rapidement possible.");
      form.reset(); // Vide les champs après le succès
    } else {
      alert("Une erreur est survenue lors de l'envoi du message.");
    }
  } catch (error) {
    alert("Erreur de connexion. Veuillez réessayer.");
  }
}
</script>