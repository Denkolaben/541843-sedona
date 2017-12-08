var form = document.querySelector(".hotel-search-form");
var form_visible = document.querySelector(".form-visible");
var form_validation = document.querySelector("form-visible-animation");
var start_date = document.querySelector("[name=start-date]");
var finish_date = document.querySelector("[name=finish-date]");

form.addEventListener("click", function (evt) {
  evt.preventDefault();
  form_visible.classList.toggle("form");
  form_visible.classList.toggle("form-visible-animation");
 });

form_visible.addEventListener("submit", function (evt) {
  if (!start_date.value || !finish_date.value) {
  evt.preventDefault ();
  form_visible.classList.remove("form-error");
  form_visible.offsetWidth = form_visible.offsetWidth;
  form_visible.classList.add("form-error");
  }
 });

  form_visible.classList.toggle("form-visible");
  form_visible.classList.toggle("form");