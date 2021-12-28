<template>
  <div class="jumbotron bg-custom text-center">
    <p class="lead">Is software important for your business ?</p>
    <h1 class="display-2" data-aos="fade-in" data-aos-duration="4000">
      Join Us Now!
    </h1>

    <hr class="my-4" />
    <p>
      Make the World More connected By Building with us More Flexible Secure
      Responsive Web Applications.
    </p>
    <p class="lead">
      <a
        class="btn btn-primary btn-lg rounded btn-more"
        href="#"
        role="button"
        data-aos="fade-up"
        data-aos-duration="4000"
        >Learn More
      </a>
    </p>
  </div>
  <div style="margin-bottom: 20%"></div>
</template>

<style scoped>
.bg-custom {
  margin-top: 15%;
  background-image: url("../assets/background.svg");
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-position: center;
  padding: 10%;
}

.btn-more {
  width: 20%;
  border-radius: 3% !important   ;
}

@media only screen and (max-width: 600px) {
  .btn-more {
    left: 0%;
    margin: auto;
    /* right: 10%; */
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  /* margin-right: 10%; */
}
</style>
