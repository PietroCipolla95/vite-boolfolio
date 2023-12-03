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


        <div class="row">

            <!-- contact me form -->
            <div class="col-8">
                <form action="#" @submit.prevent="sendForm" v-if="!loading" class="text-light w-75">
                    <div>
                        <!-- name input -->
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" name="name" id="name" class="form-control" placeholder="Type your name"
                                aria-describedby="nameHelper" v-model="name" :class="{ 'is-invalid': errors.name }">

                            <div class="alert alert-danger mt-3" role="alert" v-if="errors.name">
                                <strong>Error!</strong>

                                <ul>
                                    <li v-for="message in errors.name">{{ message }}</li>
                                </ul>

                            </div>

                        </div>

                        <!-- phone input -->
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone</label>
                            <input type="tel" name="phone" id="phone" class="form-control"
                                placeholder="Type your phone number" aria-describedby="phoneHelper" v-model="phone"
                                :class="{ 'is-invalid': errors.phone }">

                            <div class="alert alert-danger mt-3" role="alert" v-if="errors.phone">
                                <strong>Error!</strong>

                                <ul>
                                    <li v-for="message in errors.phone">{{ message }}</li>
                                </ul>
                            </div>
                        </div>

                        <!-- email input -->
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="text" name="email" id="email" class="form-control" placeholder="Type your email"
                                aria-describedby="emailHelper" v-model="email" :class="{ 'is-invalid': errors.email }">

                            <div class="alert alert-danger mt-3" role="alert" v-if="errors.email">
                                <strong>Error!</strong>

                                <ul>
                                    <li v-for="message in errors.email">{{ message }}</li>
                                </ul>

                            </div>
                        </div>

                        <!-- message area -->
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" name="message" id="message" rows="5"
                                placeholder="Your message here..." v-model="message"
                                :class="{ 'is-invalid': errors.message }"></textarea>

                            <div class="alert alert-danger mt-3" role="alert" v-if="errors.message">
                                <strong>Error!</strong>

                                <ul>
                                    <li v-for="message in errors.message">{{ message }}</li>
                                </ul>

                            </div>
                        </div>

                        <!-- submit button -->
                        <button type="submit" class="send_button my_bg" :disabled="loading">

                            <span>Send <i class="fa-solid fa-paper-plane ps-2"></i></span>

                        </button>

                        <span v-if="success"
                            class="text-success text-capitalize fs-5 ms-5 p-2 border-bottom border-success"> {{ success }}
                        </span>

                    </div>


                </form>

                <!-- loader -->
                <div v-else>
                    <AppLoader />
                </div>


            </div>

            <!-- column with infos -->
            <div class="col-4">
                <div class="contact_section text-lightd-flex justify-content-center">
                    <p class="ps-4 py-4 text-light fs-5">
                        For any information and/or collaborations <strong class="my_color">contact me!</strong>
                    </p>
                    <div id="info_wrapper" class="pb-4 ps-4">
                        <p>
                            <i class="fa-brands fa-linkedin fa-xl my_color"></i>
                            <a href="https://www.linkedin.com/in/pietro-cipolla-7580a6229/" target="_blank">Pietro
                                Cipolla</a>
                        </p>
                        <p>
                            <i class="fa-brands fa-github fa-xl my_color"></i>
                            <a href="https://github.com/PietroCipolla95" target="_blank">PietroCipolla95</a>
                        </p>
                        <p>
                            <i class="fa-solid fa-at fa-xl my_color"></i>
                            <a href="mailto:pietro.cipolla.95@gmail.com" target="_blank">pietro.cipolla.95@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
form {

    input,
    textarea {
        border: 0;
        border-bottom: 4px solid #CC2680;
        background-color: #0C0D0E;
        color: white !important;
        padding: .4rem .5rem;

        &:focus {
            background-color: #0C0D0E;
            border: 0;
            border-bottom: 4px solid #7F2C8D;
            -webkit-box-shadow: none;
            box-shadow: none;
        }

        &::placeholder {
            color: grey;
        }

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: background-color 50000s ease-in-out 0s !important;
            -webkit-text-fill-color: #fff !important;
        }

    }

    .send_button {
        margin-top: .8rem;
        padding: .6rem 1.5rem;
        color: #0C0D0E;
        border-radius: 10px;
        border: 1px solid #0C0D0E;
        font-weight: 600;
        transition: .3s ease-in-out;

        &:hover {
            background-color: #0C0D0E;
            border: 1px solid #CC2680;
            color: #CC2680;
        }

    }
}


.contact_section {
    border: 1px solid #CC2680;
    border-left: 1px solid #7F2C8D;
    box-shadow: 0px 0px 15px 11px #000000;
    background-color: #0C0D0E;

    a {
        margin-left: 1rem;
        text-decoration: none;
        color: white;

        &:hover {
            color: #CC2680;
        }
    }
}
</style>