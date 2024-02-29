fetch(
  `https://inshorts.com/api/en/search/trending_topics/all?page=2&type=NEWS_CATEGORY`
)
  .then((response) => {
    return response.json();
  })

  .then((response) => {
    let article_info = document.getElementById("article-container");
    let html = "";
    for (let i = 0; i < response.data.news_list.length; i++) {
      let title = response.data.news_list[i].news_obj.title;
      let author = response.data.news_list[i].news_obj.author_name;
      let content = response.data.news_list[i].news_obj.content;
      let image = response.data.news_list[i].news_obj.image_url;
      let source_url = response.data.news_list[i].news_obj.source_url;
      html += `  <div class="container mt-5 shadow p-3 mb-5 bg-body rounded" id="article-data">
      <div class="row">
          <div class="col-lg-4 col-md-4">
              <div class="mb-3 card border border-3 m-3">
                  <img src="${image}" height="300px" width="100%" alt="">
              </div>
          </div>
          <div class="col-lg-8 col-md-8">
              <div class="card-body" style="padding:2px">
                  <h3 id="article-heading">${title}</h3>
                  <span id="article-span">Short by: </span> 
                  <span>${author}</span>
                  <p id="article-info">${content}</p>
                  <a href="${source_url}" target="_blank" type="button" class="btn" id="article-links">Read More <i class="fa-solid fa-angles-right"></i></a>
              </div>
          </div>
      </div>
  </div>`;
    }
    article_info.innerHTML = html;
  });

// Display Data Category Wise
function renderData(category) {
  fetch(
    `https://inshorts.com/api/en/search/trending_topics/${category}?page=2&type=NEWS_CATEGORY`
  )
    .then((response) => response.json())
    .then((response) => {
      let article_info = document.getElementById("article-container");
      let html = "";
      for (let i = 0; i < response.data.news_list.length; i++) {
        let title = response.data.news_list[i].news_obj.title;
        let author = response.data.news_list[i].news_obj.author_name;
        let content = response.data.news_list[i].news_obj.content;
        let image = response.data.news_list[i].news_obj.image_url;
        let source_url = response.data.news_list[i].news_obj.source_url;
        html += `  <div class="container mt-5 shadow p-3 mb-5 bg-body rounded" id="article-data">
        <div class="row">
            <div class="col-lg-4 col-md-4">
                <div class="mb-3 card border border-3 m-3">
                    <img src="${image}" height="300px" width="100%" alt="">
                </div>
            </div>
            <div class="col-lg-8 col-md-8">
                <div class="card-body" style="padding:2px">
                    <h3 id="article-heading">${title}</h3>
                    <span id="article-span">Short by: </span> 
                    <span>${author}</span>
                    <p id="article-info">${content}</p>
                    <a href="${source_url}" target="_blank" type="button" class="btn" id="article-links">Read More <i class="fa-solid fa-angles-right"></i></a>
                </div>
            </div>
        </div>
    </div>`;
      }
      article_info.innerHTML = html;
    })
    .catch((error) => console.error("Error fetching news:", error));
}
