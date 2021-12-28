<template>
  <br /><br />
  <div class="text-justify text-center" style="overflow: hidden">
    <p>Quality</p>
    <br />
    <h1 data-aos="fade-in" data-aos-duration="4000">
      98% of clients recommend us
    </h1>
    <div class="mg-card">
      <div class="container">
        <div class="card">
          <img
            src="https://tsh.io/wp-content/uploads/2019/09/home-quality-strategic-partnership.svg
"
          />
          <h4></h4>
          <p>21% Active strategic partnerships.</p>

          <a href="#">Learn more</a>
        </div>
        <div class="card">
          <img
            src="
https://tsh.io/wp-content/uploads/2019/09/home-quality-willing-to-refer.svg"
          />
          <h4></h4>
          <p>98% Watch one of the success stories.</p>
          <a href="#">Learn more</a>
        </div>
        <div class="card">
          <img
            src="https://tsh.io/wp-content/uploads/2019/09/home-quality-clutch-reviews.svg
"
          />
          <h4></h4>
          <p>Five-star reviews on Clutch.co.</p>
          <a href="#">Learn more</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
p {
  margin: 0 auto;
  line-height: 2;
  color: rgb(92, 92, 92);
}
.center {
  width: 100%;
  height: 100%;
  font-family: "Open Sans", "open-sans", sans-serif;
  align-content: center !important;
  align-items: center !important;
  letter-spacing: 0.03em;
  line-height: 1.6;
  color: #000000;
  padding-top: 10%;
  /* margin-top */
  /* background-color: rgb(229,230,232,0.1); */
}
body {
  width: 100%;
  height: 100%;
  font-family: "Open Sans", "open-sans", sans-serif;
  letter-spacing: 0.03em;
  line-height: 1.6;
  color: #000000;
}
.mg-card {
  margin-top: 10%;
  margin-left: 10%;
}
.container .card {
  width: 330px;
  height: 90%;
  float: left;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  top: 0;
  text-align: center;
  transition: all 0.25s;
}
.container .card:nth-child(2) {
  margin: 0 50px;
}
.container .card:hover {
  top: -15px;
  box-shadow: 0 12px 16px rgba(0, 0, 255, 0.2);
  border: 1px solid blue;
}
.container .card h4 {
  font-weight: 600;
}
.container .card p {
  padding: 0 1rem;
  font-size: 16px;
  font-weight: 300;
}
.container .card a {
  font-weight: 500;
  text-decoration: none;
  color: #3498db;
}
@media only screen and (max-width: 600px) {
  .mg-card {
    margin-left: 0%;
    width: 100%;
    padding-left: 0px;
  }
}

.container .card2 {
  width: 330px;
  height: 100%;
  float: left;
  border-radius: 8px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  top: 0;
  text-align: center;
  transition: all 0.25s;
}
.container .card2:nth-child(2) {
  margin: 0 50px;
}
.container .card2:hover {
  top: -15px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
}
.container .card2 h4 {
  font-weight: 600;
}
.container .card2 p {
  padding: 0 1rem;
  font-size: 16px;
  font-weight: 300;
}
.container .card2 a {
  font-weight: 500;
  text-decoration: none;
  color: #3498db;
}

@media only screen and (max-width: 600px) {
  .card {
    margin-left: 0% !important;
    width: 80% !important;
    height: 60% !important;
    display: flex !important;
    padding-left: 0px !important;
    margin-left: 10% !important;
  }
}
</style>
