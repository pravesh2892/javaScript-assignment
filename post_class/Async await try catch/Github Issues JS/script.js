// javascript code goes here
const pageIndicator = document.getElementById('page_indicator');
const issueContainer = document.getElementById('issue_container');
const prevButton = document.getElementById('load_prev');
const nextButton = document.getElementById('load_next');

let pageNumber = 1;

async function fetchAPI(pageNumber){
  const apiData = await fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
  .then(response => response.json())
  .then(data => data);
  pageIndicator.textContent = `Page number ${pageNumber}`;
  issueContainer.innerHTML = '';
  apiData.forEach(issue =>{
    issueContainer.innerHTML +=`<li>${issue.title}</li>`;

  });
  console.log(apiData);
}
fetchAPI(pageNumber);

nextButton.addEventListener('click', ()=>{
  pageNumber++;
  fetchAPI(pageNumber);
});

prevButton.addEventListener('click', ()=>{
  if(pageNumber <=1) return;
  pageNumber--;
  fetchAPI(pageNumber);
});