const URL = `https://api.github.com/users/`;
const search = document.getElementById("search");
const form = document.getElementById("form");
const cont = document.getElementById("cont");

async function getData(user) {
  const response = await fetch(URL + user);
  const respData = await response.json();
  const name = respData.name;
  let bio = respData.bio;
  if (bio == null) {
    bio = "No Bio!";
  }

  cont.innerHTML = `<div class="card">
                    <div class="prfile-img">
                        <img src="${respData?.avatar_url}" height="150px" alt="">
                    </div>
                    <div class="profile-details">
                        <p class="text-white" style="font-size: 1.1rem;">${name}</p>
                        <div>
                            <i class="fa-solid fa-location-dot" style="color: #ffffff;"></i>
                            <span class="text-white" style="font-size: 1.1rem;">${respData?.location}</span>
                        </div>
                        <p class="text-white my-2">${bio}</p>
                        <div class="popularity">
                        <div class="follower">
                        <i class="fa-solid fa-user-plus" style="color: #ffffff;"></i>
                        <span style="color: white;">${respData?.followers}</span>
                        </div>
                        <div class="follower">
                            <i class="fa-solid fa-database" style="color: #ffffff;"></i>
                            <span style="color: white;">${respData?.public_repos}</span>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
    `;
  console.log(name, bio);
}

getData("Ranadeep07");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = search.value;
  getData(user);
});
