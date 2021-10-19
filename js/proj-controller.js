'use strict';

function onInit() {
    renderProjs();
}

function renderProjs() {
    const projs = getProjs();
    var strHtml = projs.map((proj) => {
        return `
    <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')">
    <div class="portfolio-hover">
    <div class="portfolio-hover-content">
    <i class="fa fa-plus fa-3x"></i>
    </div>
      </div>
      <img class="img-fluid"
       src="${proj.img}" 
       alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
      </div>
      </div>
    `;
    });
    const elGallery = document.querySelector('.portfolio-container');
    elGallery.innerHTML = strHtml.join('');
}

function renderModal(projId) {
    const proj = getProjById(projId);
    console.log(proj);
    var strHtml = `
    <div class="modal-dialog">
            <div class="modal-content bg-info">
    <div class="close-modal" data-dismiss="modal">
      <div class="lr">
        <div class="rl"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="modal-body">
            <!-- Project Details Go Here -->
            <h2>${proj.name}</h2>
            <h6 class="item-intro text-dark">
              ${proj.title}
            </h6>
            <img
              class="img-fluid d-block mx-auto"
              src="${proj.img}"
              alt=""
            />
            <p>
            ${proj.desc}
            </p>
            <ul class="list-inline">
              <li>published At :${proj.publishedAt}</li>
            </ul>
            <button class="btn btn-primary" onclick="window.open('${proj.url}')">Check it out</button>
            <button
              class="btn btn-secondary"
              data-dismiss="modal"
              type="button"
            >
              <i class="fa fa-times"></i>
              Close Project
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`;
    var elModal = document.querySelector('.portfolio-modal');
    elModal.innerHTML = strHtml;
}
