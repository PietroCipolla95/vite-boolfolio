<script>

import AppHeader from '../components/AppHeader.vue';

export default {
    name: 'AppAbout',

    components: {
        AppHeader,
    }

}
</script>
<template>
    <div class="container">

        <div class="wrapper pb-2 d-flex justify-content-between align-items-baseline">
            <h1 class="text-light">
                About Me
            </h1>
            <AppHeader />
        </div>

        <div class="my_border_bottom mb-5"></div>


        <div class="row">
            <div class="col-6 d-flex flex-column">

                <img id="profile_pic" src="../assets/images/pietro-cipolla-photo.png" alt="pietro cipolla photo">

                <span class="my-5">
                    <a id="curriculum" href="../assets/cv/Pietro-Cipolla-cv.pdf" download>
                        Download CV
                    </a>
                </span>

            </div>
            <div class="col-6">
                <p id="about_me">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eos qui reprehenderit ducimus
                    dolorem maxime alias rerum, hic laboriosam tenetur ab, dicta nam maiores voluptatibus, et natus
                    architecto numquam quaerat quibusdam voluptas? Quae ea deleniti illum inventore, recusandae nemo beatae
                    perspiciatis soluta explicabo suscipit! Culpa quod quas commodi est voluptatum voluptas officiis,
                    nesciunt blanditiis minima. Amet, hic provident! Earum temporibus libero, asperiores suscipit veniam,
                    molestias dolorem numquam ipsa vero in magni quisquam dolor neque recusandae. Vero corrupti ipsum,
                    facilis, autem laborum iste reprehenderit maiores, esse nemo magni doloribus atque aliquam! Beatae
                    aperiam sit amet officia possimus. Libero distinctio temporibus unde?
                </p>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
#profile_pic {
    width: 85%;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to left, rgba(228, 36, 123, 1) 29%, rgba(126, 44, 141, 1) 70%) 1;
}

#about_me {
    color: white;
    background-color: #0C0D0E;
    line-height: 2rem;
    padding: 2rem;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to right, rgba(228, 36, 125, 1) 29%, rgba(126, 44, 141, 1) 70%) 1;
}

#curriculum {
    text-decoration: none;
    border: 2px solid transparent;
    background: linear-gradient(#0C0D0E, #0C0D0E) padding-box,
        linear-gradient(to left, rgba(228, 36, 125, 1) 29%, rgba(126, 44, 141, 1) 70%) border-box;
    color: #CC2680;
    font-weight: 700;
    padding: 1.3rem;
    transition: .3s ease-in-out;

    &:hover {
        color: #7F2C8D;
        background: linear-gradient(#0C0D0E, #0C0D0E) padding-box,
            linear-gradient(to right, rgba(228, 36, 125, 1) 29%, rgba(126, 44, 141, 1) 70%) border-box;
        border-radius: 20px;
    }
}
</style>