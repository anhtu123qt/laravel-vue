<template>
  <div class="container">
    <h2 class="text-center py-5">CONTACTS</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Designation</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="(contact, index) in contacts" :key="index">
        <tr>
          <th scope="row">{{ contact.id }}</th>
          <td>{{ contact.name }}</td>
          <td>{{ contact.email }}</td>
          <td>{{ contact.designation }}</td>
          <td>{{ contact.contact_no }}</td>
          <td>
            <router-link
              class="btn btn-dark btn-sm"
              :to="{ name: 'edit-contact', params: { id: contact.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="deleteContact(contact.id)"
              class="btn btn-default btn-danger btn-sm"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      contact: "",
      contacts: [],
    };
  },
  methods: {
    loadData() {
      axios.get("/api/contacts").then((response) => {
        this.contacts = response.data.data;
      });
    },
    deleteContact(id) {
      axios.delete("/api/contacts/" + id).then((response) => {
        if (response.status == "200") {
          this.$utils.showSuccess("Success", "Contact deleted successfully!");
          this.loadData();
        } else {
          this.$utils.showError("error", response.message);
        }
      });
    },
    editContact(id) {
      this.$router.push({ name: "edit-contact" });
    },
  },
  created() {
    this.loadData();
  },
};
</script>
