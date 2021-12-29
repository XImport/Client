<template>
  <AppNav />

  <!-- Page Header-->
  <header
    class="masthead"
    style="
      background-image: url(https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80);
    "
  >
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="page-heading animate__animated animate__fadeInUp">
            <h1>About US</h1>
            <span class="subheading">Who Are We ... ?! </span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7  animate__animated animate__fadeInUp">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
            sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
            consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            praesentium recusandae illo eaque architecto error, repellendus
            iusto reprehenderit, doloribus, minus sunt. Numquam at quae
            voluptatum in officia voluptas voluptatibus, minus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
            quae optio aperiam soluta voluptatibus corporis atque iste neque sit
            tempora!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
            quae optio aperiam soluta voluptatibus corporis atque iste neque sit
            tempora!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
            sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
            consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            praesentium recusandae illo eaque architecto error, repellendus
            iusto reprehenderit, doloribus, minus sunt. Numquam at quae
            voluptatum in officia voluptas voluptatibus, minus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
            quae optio aperiam soluta voluptatibus corporis atque iste neque sit
            tempora!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
            quae optio aperiam soluta voluptatibus corporis atque iste neque sit
            tempora!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis
            sit soluta odio, adipisci quas excepturi maxime quae totam ducimus
            consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            praesentium recusandae illo eaque architecto error, repellendus
            iusto reprehenderit, doloribus, minus sunt. Numquam at quae
            voluptatum in officia voluptas voluptatibus, minus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
            quae optio aperiam soluta voluptatibus corporis atque iste neque sit
            tempora!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            consequuntur magnam, excepturi aliquid ex itaque esse est vero natus
            quae optio aperiam soluta voluptatibus corporis atque iste neque sit
            tempora!
          </p>
        </div>
      </div>
    </div>
  </main>
  <AppFooter />
</template>
<script>
import AppFooter from "@/components/FooTer";
import AppNav from "@/components/NavBar.vue";
export default {
  components: {
    AppNav,
    AppFooter,
  },
};
</script>

<style scoped>
header.masthead {
  position: relative;
  margin-bottom: 3rem;
  padding-top: calc(8rem + 57px);
  padding-bottom: 8rem;
  background: no-repeat center center;
  background-color: #6c757d;
  background-size: cover;
  background-attachment: scroll;
}
header.masthead:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #212529;
  opacity: 0.5;
}
header.masthead .page-heading,
header.masthead .post-heading,
header.masthead .site-heading {
  color: #fff;
}
header.masthead .page-heading,
header.masthead .site-heading {
  text-align: center;
}
header.masthead .page-heading h1,
header.masthead .page-heading .h1,
header.masthead .site-heading h1,
header.masthead .site-heading .h1 {
  font-size: 3rem;
}
header.masthead .page-heading .subheading,
header.masthead .site-heading .subheading {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.1;
  display: block;
  margin-top: 0.625rem;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
header.masthead .post-heading h1,
header.masthead .post-heading .h1 {
  font-size: 2.25rem;
}
header.masthead .post-heading .meta,
header.masthead .post-heading .subheading {
  line-height: 1.1;
  display: block;
}
header.masthead .post-heading .subheading {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0.75rem 0 2rem;
  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
header.masthead .post-heading .meta {
  font-size: 1.25rem;
  font-weight: 300;
  font-style: italic;
  font-family: "Lora", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
}
header.masthead .post-heading .meta a {
  color: #fff;
}
@media (min-width: 992px) {
  header.masthead {
    padding-top: 12.5rem;
    padding-bottom: 12.5rem;
  }
  header.masthead .page-heading h1,
  header.masthead .page-heading .h1,
  header.masthead .site-heading h1,
  header.masthead .site-heading .h1 {
    font-size: 5rem;
  }
  header.masthead .post-heading h1,
  header.masthead .post-heading .h1 {
    font-size: 3.5rem;
  }
  header.masthead .post-heading .subheading {
    font-size: 1.875rem;
  }
}
</style>
