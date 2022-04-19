let elList = document.querySelector(".hero__list");

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => {
    showHTML(data);
  });  

function showHTML(elData){
  elData.data.forEach((element) => {
    let elItem = document.createElement("li");
    elItem.className = "hero__item col-12 col-md-6 col-lg-4 position-relative animate__animated animate__fadeInDown";

    elItem.innerHTML = `
      <div class="hero__border-item">
        <div class="hero__img-info d-flex align-items-center">
          <div class="hero__img-box">
            <img src="${element.avatar}" alt="user icon">
          </div>
          <div class="hero__name-box">
            <h2 class="hero__name">
              ${element.first_name}
            </h2>
            <p class="hero__full-name">
              ${element.first_name + ' ' + element.last_name}
            </p>
          </div>
        </div>
        <ul class="hero__inner-list">
          <li class="hero__inner-item d-flex align-items-center justify-content-between">
            <p class="hero__inner-title">
              company
            </p>
            <p class="hero__inner-text">
              Romaguera-Crona
            </p>
          </li>
          <li class="hero__inner-item d-flex align-items-center justify-content-between">
            <p class="hero__inner-title">
              email
            </p>
            <p class="hero__inner-text">
              ${element.email}
            </p>
          </li>
          <li class="hero__inner-item d-flex align-items-center justify-content-between">
            <p class="hero__inner-title">
              phone
            </p>
            <p class="hero__inner-text">
              1-770-736-8031 x56442
            </p>
          </li>
          <li class="hero__inner-item d-flex align-items-center justify-content-between">
            <p class="hero__inner-title">
              website
            </p>
            <p class="hero__inner-text">
              hildegard.org
            </p>
          </li>
        </ul>
      </div>
      <button class="hero__btn btn btn-danger">
        remove user
      </button>
    `;

    elList.appendChild(elItem);
  });

  let elBtns = document.querySelectorAll(".hero__btn");
  deleteIt(elBtns);
}

function deleteIt(elBtns){
  elBtns.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });
  }); 
}
