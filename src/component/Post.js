const Post = (item) => {
  return `
        <div id="post" class="col-12 col-md-3 mt-5">
            <div class="card app-border-radius p-2 border border-0">
              <div class="col">
                <img
                  class="img-fluid w-100 app-border-radius"
                  src="${item.image}"
                  alt="Post Image"
                />
              </div>
              <div class="col mt-3">
                <span class="fw-bold fs-5">
                  ${item.title}
                </span>
              </div>
              <div class="col mt-2">
                <span class="text-secondary fs-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis fugit nam aut impedit ex?
                </span>
              </div>
              <div class="col mt-3">
                <div
                  class="card app-border-radius bg-body-secondary border border-0 p-3"
                >
                  <div class="row d-flex justify-content-between">
                    <div class="col-2">
                      <img
                        class="app-border-radius avatar"
                        src="${item.avatar}"
                        alt="Post Image"
                      />
                    </div>
                    <div class="col-8">
                      <div class="row">
                        <div class="col-12">
                          <span class="fw-bold">John doe</span>
                        </div>
                        <div class="col-12">
                          <span class="fs-7">August 08, 2023</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-2 d-flex justify-content-center align-items-center"
                    >
                      <i class="fa fa-regular fa-bookmark fs-4"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    `;
};
