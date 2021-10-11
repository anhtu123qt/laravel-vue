<template>
  <div class="container">
    <h2 class="text-center py-5">EDIT CONTACT</h2>
    <form>
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
      <button
        @click.prevent="updateContact(contact.id)"
        class="btn btn-success"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      contact: {},
    };
  },
  methods: {
    loadSingleData() {
      axios.get("/api/contacts/" + this.$route.params.id).then((response) => {
        this.contact = response.data;
      });
    },
    updateContact(id) {
      axios.put("/api/contacts/" + id, this.contact).then((response) => {
        this.$utils.timerMessage("", "Updated Successfully!", 1500);
        setTimeout(() => this.$router.push({ name: "contacts" }), 2000);
      });
    },
  },
  created() {
    this.loadSingleData();
  },
};
</script>
