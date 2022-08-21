<template>
  <b-container class="bv-example-row">
    <b-row class="justify-content-center align-items-center">
      <b-col cols="8">
        <h1 class="page-title">Customers Data</h1>

        <!-- customers data table -->
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Avatar</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in listingData" :key="index">
              <th scope="row">{{ item.id }}</th>
              <td><img :src="item.avatar" /></td>
              <td>{{ item.first_name }}</td>
              <td>{{ item.last_name }}</td>
              <td>{{ item.email }}</td>
              <td>
                <b-button
                  @click="updateCustomer(item.id)"
                  variant="primary"
                  class="btn"
                  >Update</b-button
                >
              </td>
              <td>
                <b-button
                  @click="deleteCustomer(item.id)"
                  variant="danger"
                  class="btn"
                  >Delete</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>

        <!-- model for delete confirmation -->
        <div class="modal-layer" v-if="isDeleteModal">
          <div class="modal-content">
            <h3 class="modal-description">
              Are you make sure of deleting this customer ?
            </h3>
            <div class="modal-options">
              <button class="btn btn-secondary" @click="isDeleteModal = false">
                Close
              </button>
              <button class="btn btn-danger" @click="deleteConfirmation">
                Delete
              </button>
            </div>
          </div>
        </div>

        <!-- model for update customer -->
        <div class="modal-layer" v-if="isUpdateModal">
          <div class="modal-content">
            <h3 class="modal-description">Update Customer Information</h3>
            <div>
              <b-form-group
                id="input-group-1"
                label="First Name:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model.trim="updateForm.first_name"
                  type="text"
                  placeholder="Enter first name"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Last Name:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model.trim="updateForm.last_name"
                  type="text"
                  placeholder="Enter last name"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Email:"
                label-for="input-3"
              >
                <b-form-input
                  id="input-3"
                  v-model.trim="updateForm.email"
                  type="email"
                  placeholder="Enter email"
                  required
                ></b-form-input>
              </b-form-group>
            </div>
            <div class="modal-options">
              <button class="btn btn-secondary" @click="isUpdateModal = false">
                Close
              </button>
              <button class="btn btn-primary" @click="updateConfirmation">
                Update
              </button>
            </div>
          </div>
        </div>

        <!-- loading indicator -->
        <p v-if="isLoading" class="loading">Loading...</p>

        <!-- button to get more customers data -->
        <b-button
          @click="getMore"
          v-if="isThierMoreData"
          variant="primary"
          class="more-btn"
          >More</b-button
        >

        <!-- No more data message -->
        <p
          v-if="!isThierMoreData || listingData.length == 0"
          class="no-more-data"
        >
          No more customers data
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeComponent",
  data() {
    return {
      listingData: [],
      isThierMoreData: true,
      isLoading: false,
      listingPageNumber: 1,
      customerId: 0,
      isDeleteModal: false,
      isUpdateModal: false,
      updateForm: {
        first_name: "",
        last_name: "",
        email: "",
      },
    };
  },
  methods: {
    getCustomersListingData() {
      this.isLoading = true;
      axios
        .get(`${process.env.VUE_APP_URL}/users?page=${this.listingPageNumber}`)
        .then((res) => {
          if (res.data.data != null && res.data.data.length != 0) {
            if (this.listingPageNumber == 1) {
              this.listingData = res.data.data;
            } else {
              this.listingData = [...this.listingData, ...res.data.data];
            }
          } else {
            if (this.listingPageNumber == 1) {
              this.listingData = [];
            }
            this.isThierMoreData = false;
          }
          this.isLoading = false;
        });
    },
    updateCustomer(id) {
      this.customerId = id;
      this.isUpdateModal = true;
    },
    updateConfirmation() {
      axios
        .put(
          `${process.env.VUE_APP_URL}/users/${this.customerId}`,
          this.updateForm
        )
        .then((res) => {
          if (res.status == 200) {
            this.listingData = this.listingData.filter((item) => {
              if (item.id == this.customerId) {
                for (let key in this.updateForm) {
                  if (
                    this.updateForm[key] != "" &&
                    this.updateForm[key] != null
                  ) {
                    item[key] = res.data[key];
                  }
                }

                for (let key in this.updateForm) {
                  this.updateForm[key] = "";
                }
              }
              return item;
            });
            this.isUpdateModal = false;
          } else {
            alert("Try again later");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCustomer(id) {
      this.customerId = id;
      this.isDeleteModal = true;
    },
    deleteConfirmation() {
      axios
        .delete(`${process.env.VUE_APP_URL}/users/${this.customerId}`)
        .then((res) => {
          if (res.status == 204) {
            this.listingData = this.listingData.filter(
              (item) => item.id !== this.customerId
            );
            this.isDeleteModal = false;
          } else {
            alert("Try again later");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getMore() {
      if (!this.isLoading && this.isThierMoreData) {
        this.listingPageNumber += 1;
        this.getCustomersListingData();
      }
    },
  },
  created() {
    this.getCustomersListingData();
  },
};
</script>

<style lang="scss">
.page-title {
  text-align: center;
  margin-bottom: 40px;
}

table {
  tbody {
    tr {
      td,
      th {
        vertical-align: middle;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }
      }
    }
  }
}

.modal-layer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);

  .modal-content {
    background-color: #fff;
    padding: 25px;
    border-radius: 15px;
    width: 35%;

    .modal-description {
      font-size: 20px;
      margin-bottom: 25px;
    }

    .modal-options {
      display: flex;
      justify-content: flex-end;

      .btn-danger,
      .btn-primary {
        margin-left: 10px;
      }
    }
  }
}

.loading {
  display: flex;
  justify-content: center;
  font-size: 20px;
}

.more-btn {
  width: 100%;
  padding: 20px !important;
  margin-top: 40px;
}

.no-more-data {
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
}
</style>
