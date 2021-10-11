<template>
  <div class="container">
    <h2 class="text-center py-5">ADD NEW CONTACT</h2>
    <form @submit.prevent="saveContact">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input
          v-model="contact.name"
          autocomplete="off"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          v-model="contact.email"
          autocomplete="off"
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="email@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Designation</label
        >
        <input
          v-model="contact.designation"
          autocomplete="off"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Designation"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Contact Number</label
        >
        <input
          v-model="contact.contact_no"
          autocomplete="off"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Contact Number"
        />
      </div>
      <button class="btn btn-success">Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      name: "",
      email: "",
      designation: "",
      contact_no: "",
      contact: {},
      errors: [],
    };
  },
  methods: {
    saveContact() {
      this.errors = [];
      if (!this.errors.length) {
        axios
          .post("/api/contacts", this.contact)
          .then((response) => {
            if (response.status == 201) {
              this.$utils.timerMessage("", "Add contact successfully!", 1500);
              setTimeout(() => this.$router.push({ name: "contacts" }), 2000);
            } else {
              this.$utils.showError("error", response.message);
            }
          })
          .catch((error) => {
            this.errors.push(error.response.data.error);
          });
      }
    },
  },
};
</script>
