<script>
export default {
    name: 'AppLoader'
}
</script>
<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="loop cubes">
            <div class="item cubes"></div>
            <div class="item cubes"></div>
            <div class="item cubes"></div>
            <div class="item cubes"></div>
            <div class="item cubes"></div>
            <div class="item cubes"></div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.cubes {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
}

.loop {
    transform: rotateX(-35deg) rotateY(-45deg) translateZ(1.5625em);
}

@keyframes s {
    to {
        transform: scale3d(0.2, 0.2, 0.2);
    }
}

.item {
    margin: -1.5625em;
    width: 3.125em;
    height: 3.125em;
    transform-origin: 50% 50% -1.5625em;
    box-shadow: 0 0 0.125em currentColor;
    background: currentColor;
    animation: s 0.6s cubic-bezier(0.45, 0.03, 0.51, 0.95) infinite alternate;
}

.item:before,
.item:after {
    position: absolute;
    width: inherit;
    height: inherit;
    transform-origin: 0 100%;
    box-shadow: inherit;
    background: currentColor;
    content: "";
}

.item:before {
    bottom: 100%;
    transform: rotateX(90deg);
}

.item:after {
    left: 100%;
    transform: rotateY(90deg);
}

.item:nth-child(1) {
    margin-top: 6.25em;
    color: #8F2B8A;
    animation-delay: -1.2s;
}

.item:nth-child(1):before {
    color: #c26dbe;
}

.item:nth-child(1):after {
    color: #a1399c;
}

.item:nth-child(2) {
    margin-top: 3.125em;
    color: #8f42b1;
    animation-delay: -1s;
}

.item:nth-child(2):before {
    color: #c553bf;
}

.item:nth-child(2):after {
    color: #ac3ca6;
}

.item:nth-child(3) {
    margin-top: 0em;
    color: #ac2796;
    animation-delay: -0.8s;
}

.item:nth-child(3):before {
    color: #ac409a;
}

.item:nth-child(3):after {
    color: #a73193;
}

.item:nth-child(4) {
    margin-top: -3.125em;
    color: #c20b60;
    animation-delay: -0.6s;
}

.item:nth-child(4):before {
    color: #d14c8a;
}

.item:nth-child(4):after {
    color: #d13d82;
}

.item:nth-child(5) {
    margin-top: -6.25em;
    color: #c9196e;
    animation-delay: -0.4s;
}

.item:nth-child(5):before {
    color: #d6428a;
}

.item:nth-child(5):after {
    color: #d43783;
}

.item:nth-child(6) {
    margin-top: -9.375em;
    color: #CC2680;
    animation-delay: -0.2s;
}

.item:nth-child(6):before {
    color: #c93c89;
}

.item:nth-child(6):after {
    color: #ca3788;
}
</style>