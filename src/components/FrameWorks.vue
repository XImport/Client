<template>
  <section id="contentid">
    <div class="header3">
      <p>Complete package</p>
      <h1>From product design to software continuous delivery</h1>
    </div>
    <div class="row1-container">
      <div
        class="box box-down cyan"
        data-aos="slide-right"
        data-aos-duration="4000"
      >
        <h2>ReactJs</h2>
        <p>
          User-centred Javascript framework for crafting real time-interfaces
        </p>
        <img src="../assets/icons8-react.svg" alt="" />
      </div>

      <div class="box red" data-aos="fade-in" data-aos-duration="4000">
        <h2>Angular</h2>
        <p>
          Angular is a TypeScript-based free and open-source web application
          framework led by the Angular Team
        </p>
        <img src="../assets/angularjs.svg" alt="" />
      </div>

      <div
        class="box box-down green"
        data-aos="slide-left"
        data-aos-duration="4000"
      >
        <h2>Vuejs</h2>
        <p>
          Vue.js is an open-source model–view–viewmodel front end JavaScript
          framework for building user interfaces and single-page applications
        </p>
        <img src="../assets/icons8-vue-js.svg" alt="" />
      </div>
    </div>
    <div class="row2-container">
      <div class="box orange" data-aos="fade-in" data-aos-duration="4000">
        <h2>Python</h2>
        <p>
          Python is an interpreted high-level general-purpose programming
          language For managing the whole backend magic
        </p>
        <img src="../assets/python.svg" alt="" />
        <br /><br /><br /><br />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
section {
  --red: hsl(0, 78%, 62%);
  --cyan: hsl(180, 62%, 55%);
  --orange: hsl(34, 97%, 64%);
  --blue: hsl(212, 86%, 64%);
  --green: rgb(63, 185, 132);
  --varyDarkBlue: hsl(234, 12%, 34%);
  --grayishBlue: hsl(229, 6%, 66%);
  --veryLightGray: hsl(0, 0%, 98%);
  --weight1: 200;
  --weight2: 400;
  --weight3: 600;
  margin-top: 0%;
  overflow: hidden;
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

h1:first-of-type {
  font-weight: var(--weight1);
  color: var(--varyDarkBlue);
}

h1:last-of-type {
  color: var(--varyDarkBlue);
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
}

.header3 {
  text-align: center;
  line-height: 0.8;
  margin-bottom: 50px;
  margin-top: 1px;
}

.header3 p {
  margin: 0 auto;
  line-height: 2;
  color: var(--grayishBlue);
}

.box p {
  color: var(--grayishBlue);
}

.box {
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px var(--grayishBlue);
  padding: 30px;
  margin: 20px;
}

img {
  float: right;
}

@media (max-width: 450px) {
  .box {
    height: 200px;
  }
}

@media (max-width: 950px) and (min-width: 450px) {
  .box {
    text-align: center;
    height: 180px;
  }
}

.cyan {
  border-top: 3px solid var(--cyan);
  transition: all 0.5s ease-in;
}
.red {
  border-top: 3px solid var(--red);
  transition: all 0.5s ease-in;
}
.blue {
  border-top: 3px solid var(--blue);
  transition: all 0.5s ease-in;
}
.orange {
  border-top: 3px solid var(--orange);
  transition: all 0.5s ease-in;
}
.green {
  border-top: 3px solid var(--green);
  transition: all 0.5s ease-in;
}

.cyan:hover {
  box-shadow: 0px 30px 40px -20px var(--cyan);
}
.red:hover {
  box-shadow: 0px 30px 40px -20px var(--red);
}

.blue:hover {
  box-shadow: 0px 30px 40px -20px var(--grayishBlue);
}
.orange:hover {
  box-shadow: 0px 30px 40px -20px var(--orange);
}
.green:hover {
  box-shadow: 0px 30px 40px -20px var(--green);
}

h2 {
  color: var(--varyDarkBlue);
  font-weight: var(--weight3);
}

@media (min-width: 950px) {
  .row1-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row2-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box-down {
    position: relative;
    top: 150px;
  }
  .box {
    width: 20%;
  }
  .header3 p {
    width: 30%;
  }
}
</style>
