<template>
  <!-- Full Page Image Header with Vertically Centered Content -->
  <header class="masthead section-height">
    <div class="container h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 text-center">
          <h1 class="fw-light text-dark text-style">
            We're  a digital agency
          </h1>
          <br>
          <p class="lead text-dark text-style-span">
            A great Place to Grow Your Bussness Up Level 
          </p>
          <button class="btn btn-entry">Learn More</button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap');
.masthead {
  height: 100vh;
  min-height: 300px;
  background-image: url("https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.section-height {
  height: 600px;
}


.text-style{
    background-color: rgb(192, 192, 192, 0.3);
    padding: 20px;
    border-radius: 10px;
    font-weight: 700;
    font-family: 'Yusei Magic', sans-serif;
  }

.text-style-span{
    align-content: center;
    justify-content: center;
    display: block;
    padding: 20px;
    border-radius: 10px;
    font-weight: 700;
    font-family: 'Yusei Magic', sans-serif;
  }
.btn-entry{
    background-color: rgb(193, 184, 184,0.8);
    border-radius: 20px;
    padding: 10px 40px 10px 40px;
  }

</style>
