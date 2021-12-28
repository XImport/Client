<template>
  <header class="header2">
    <a href="" class="logo">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
        alt=""
        width="40"
        height="40"
        class="d-inline-block align-text-top"
      />
    </a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"
      ><span class="navicon"></span
    ></label>
    <ul class="menu animate__animated animate__fadeInUp">
      <li><a href="#work" class="home ">Home</a></li>
      <li><a href="#about" class="About">About</a></li>
      <li><a href="#careers" class="Services">Services</a></li>
      <li><a href="#contact" class="Contact">Contact</a></li>
    </ul>
  </header>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 600) {
        $(".header2").css(
          { "background-color": "black" },
          { "box-shadow": "5px -1px 12px -5px black " }
        );
        $(".header2").fadeIn("slow");

        $(".home").css({ color: "white" });
        $(".About").css({ color: "white" });
        $(".Services").css({ color: "white" });
        $(".Contact").css({ color: "white" });

        $(".home").hover(function () {
          $(this).css("color", "#aaa");
        });
        // console.log($(window))
      } else if ($(window).scrollTop() < 600) {
        $(".header2").css({ "background-color": "transparent" });
        $(".home").css({ color: "black" });
        $(".About").css({ color: "black" });
        $(".Services").css({ color: "black" });
        $(".Contact").css({ color: "black" });
      }
    });
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Helvetica, sans-serif;
  background-color: #f4f4f4;
}

a {
  color: #000;
}

/* header */

.header2 {
  /* box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1); */
  margin-top: 0%;
  position: fixed;
  width: 100%;
  z-index: 3;
  -webkit-transition: all 0.5s ease-in-out;
  -moz-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
}

.header2 ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.header2 li a {
  display: block;
  padding: 20px 20px;
  /* border-right: 1px solid #f4f4f4; */
  text-decoration: none;
}

.header2 .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header2 .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header2 .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header2 .menu-icon .navicon {
  background: #333;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header2 .menu-icon .navicon:before,
.header2 .menu-icon .navicon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header2 .menu-icon .navicon:before {
  top: 5px;
}

.header2 .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header2 .menu-btn {
  display: none;
}

.header2 .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header2 .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header2 .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header2 .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header2 .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header2 .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header2 li {
    float: left;
  }
  .header2 li a {
    padding: 20px 30px;
  }
  .header2 .menu {
    clear: none;
    float: right;
    max-height: none;
  }
  .header2 .menu-icon {
    display: none;
  }
}
</style>
