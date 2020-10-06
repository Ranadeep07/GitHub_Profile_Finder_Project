const URL = `https://api.github.com/users/`;
const search = document.getElementById('search');
const form = document.getElementById('form');
const cont = document.getElementById('cont');

async function getData(user){
    const response = await fetch(URL + user);
    const respData = await response.json();
    const name = respData.name;
    let bio = respData.bio;
    if(bio == null){
        bio = "No Bio!"
    }
    const followers = respData.followers;
    const imageURL = respData.avatar_url;
    cont.innerHTML = `<div class="card">
                    <div class="prfile-img">
                        <img src="${imageURL}" height="150px" alt="">
                    </div>
                    <div class="profile-details">
                        <p class="text-white" style="font-size: 1.1rem;">${name}</p>
                        <p class="text-white">${bio}</p>
                        <div class="popularity">
                        <div class="follower">
                            <i style="color: white;" class="far fa-heart"></i>
                            <span style="color: white;">50</span>
                        </div>
                        <div class="follower">
                            <i style="color: white;" class="far fa-eye"></i>
                            <span style="color: white;">${followers}</span>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
    `
    console.log(name,bio)
    
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let user = search.value;
    getData(user);
})