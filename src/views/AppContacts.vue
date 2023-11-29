<script>
import axios from 'axios';
import AppHeader from '../components/AppHeader.vue';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: 'AppContacts',

    components: {
        AppHeader,
        AppLoader,
    },

    data() {
        return {
            contacts_api: 'http://127.0.0.1:8000/api/contacts',
            loading: false,
            name: '',
            email: '',
            phone: '',
            message: '',
            errors: [],
            success: null,
        }
    },

    methods: {
        sendForm() {
            this.loading = true;
            this.errors = [];
            this.success = null;

            const payload = {
                name: this.name,
                email: this.email,
                phone: this.phone,
                message: this.message,
            };

            console.log(payload);

            axios
                .post(this.contacts_api, payload)
                .then(response => {

                    const success = response.data.success

                    if (!success) {

                        console.log(response.data.errors);
                        this.errors = response.data.errors

                    } else {

                        this.name = '',
                            this.email = '',
                            this.phone = '',
                            this.message = '',

                            this.success = response.data.message
                    }

                    this.loading = false
                })

                .catch(error => {
                    console.error(error.message);
                })

        }
    }

}
</script>
<template>
    <div class="container">

        <div class="wrapper pb-2 d-flex justify-content-between align-items-baseline">
            <h1 class="text-light">
                Contact
            </h1>
            <AppHeader />
        </div>

        <div class="my_border_bottom mb-5"></div>

        <!-- contact me form -->
        <form action="#" @submit.prevent="sendForm" v-if="!loading" class="text-light">
            <div>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" name="name" id="name" class="form-control" aria-describedby="nameHelper"
                        v-model="name" :class="{ 'is-invalid': errors.name }">

                    <div class="alert alert-danger mt-3" role="alert" v-if="errors.name">
                        <strong>Error!</strong>

                        <ul>
                            <li v-for="message in errors.name">{{ message }}</li>
                        </ul>

                    </div>

                </div>

                <div class="mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="tel" name="phone" id="phone" class="form-control" aria-describedby="phoneHelper"
                        v-model="phone" :class="{ 'is-invalid': errors.phone }">

                    <div class="alert alert-danger mt-3" role="alert" v-if="errors.phone">
                        <strong>Error!</strong>

                        <ul>
                            <li v-for="message in errors.phone">{{ message }}</li>
                        </ul>

                    </div>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="text" name="email" id="email" class="form-control" aria-describedby="emailHelper"
                        v-model="email" :class="{ 'is-invalid': errors.email }">

                    <div class="alert alert-danger mt-3" role="alert" v-if="errors.email">
                        <strong>Error!</strong>

                        <ul>
                            <li v-for="message in errors.email">{{ message }}</li>
                        </ul>

                    </div>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-control" name="message" id="message" rows="3" placeholder="Your message here..."
                        v-model="message" :class="{ 'is-invalid': errors.message }"></textarea>

                    <div class="alert alert-danger mt-3" role="alert" v-if="errors.message">
                        <strong>Error!</strong>

                        <ul>
                            <li v-for="message in errors.message">{{ message }}</li>
                        </ul>

                    </div>
                </div>

                <button type="submit" class="btn btn-info my_bg mb-3" :disabled="loading">

                    <span v-if="loading">Sending <i class="fa-solid fa-circle-notch fa-spin"></i></span>

                    <span v-else>Send <i class="fa-solid fa-paper-plane"></i></span>

                </button>
                <span v-if="success" class="text-success text-capitalize mx-3"> {{ success }}</span>
            </div>


        </form>

        <div v-else>
            <AppLoader />
        </div>


    </div>
</template>
<style lang="scss" scoped></style>