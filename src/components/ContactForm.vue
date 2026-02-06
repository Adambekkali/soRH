<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="First Name"
        class="bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-so-emerald outline-none"
      />
      <input
        type="email"
        placeholder="Email Address"
        class="bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-so-emerald outline-none"
      />
    </div>
    <textarea
      placeholder="How can we help?"
      rows="4"
      class="w-full bg-slate-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-so-emerald outline-none"
    ></textarea>
    <button
      type="submit"
      class="w-full bg-so-emerald text-white font-bold py-4 rounded-xl hover:bg-so-forest transition-colors shadow-lg shadow-so-emerald/20"
    >
      Request a Free Audit
    </button>
  </form>
</template>

<script setup>
const handleSubmit = () => {
  alert('Thank you! Our team will contact you within 24 hours.');
}
</script>