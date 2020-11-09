let searchForm = document.querySelector(".search-form");
let input = document.querySelector("#search");
let container = document.querySelector(".main");

function createUi(event) {
    event.preventDefault();
    let url = `https://api.github.com/users/${input.value}`;
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            if (data.message == "Not Found") {
                alert("User is not available");
            } else {
                console.log(data);
                container.innerText = "";
                createCard(data);
                let flexContainer = document.createElement("section");
                flexContainer.classList.add("flex", "flex-container", "container");
                container.append(flexContainer);
                displayRepos(data, flexContainer);
                displayFollowers(data, flexContainer);
            }
    });
}

function createCard(data) {
    let card = document.createElement("div");
    card.id = "card";

    let imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = data.avatar_url;
    img.classList.add("avatar");
    imgDiv.append(img);
    
    let infoDiv = document.createElement("div");
    infoDiv.classList.add("info-div");
    let h2 = document.createElement("h2");
    h2.innerText = data.name;

    let userName = document.createElement("span");
    userName.innerText = `@${data.login}`;
    userName.classList.add("username");
    h2.append(userName);
    infoDiv.append(h2);

    let bioArray = ["bio", "company", "location", "blog"];
    bioArray.forEach((element) => {
        let p = document.createElement("p");
        p.classList.add(element);
        p.innerText = `${data[element]}`;
        infoDiv.append(p);
    });

    let numDiv = document.createElement("div");
    numDiv.classList.add("flex", "num-div");
    infoDiv.append(numDiv);
    let infoArray = ["followers", "following", "public_repos"];
    infoArray.forEach((element) => {
        let div = document.createElement("div");
        let h4 = document.createElement("h4");
        h4.innerText = `${data[element]}`;
        let label = document.createElement("label");
        label.innerText = element;
        div.append(h4, label);
        numDiv.append(div);
    });

    card.append(imgDiv, infoDiv);
    container.append(card);
}

function displayRepos(data, parentElm) {
    fetch(data.repos_url)
        .then(res => res.json())
        .then((reposData) => {
            let reposContainer = document.createElement("div");
            reposContainer.classList.add("repos-container");
            let sectionHeading = document.createElement("h3");
            sectionHeading.classList.add("section-heading");
            sectionHeading.innerText = "Repositories";
            reposContainer.append(sectionHeading);
            reposData.forEach((element) => {
                let div = document.createElement("div");
                div.classList.add("repo");
                let h4 = document.createElement("h4");
                h4.innerText = element.name;
                h4.classList.add("repo-name");
                let span = document.createElement("span");
                span.classList.add("fork");
                span.innerText = element.fork ? "(fork)" : "";
                h4.append(span);

                let h5 = document.createElement("h5");
                h5.innerText = element.description ? element.description : "No description";
                let repoIcons = document.createElement("div");
                repoIcons.classList.add("flex", "repo-icons");
                let repoInfoArray = [
                {
                    text: "language",
                    icon: ""
                },
                {
                    text: "forks_count",
                    icon: "Forks : "
                },
                {
                    text: "stargazers_count",
                    icon: "Stars : "
                },
                {
                    text: "watchers_count",
                    icon: "Watchers : "
                }];
                repoInfoArray.forEach(value => {
                    if (element[value.text] !== null) {
                        let p = document.createElement("p");
                        p.innerText = value.icon + element[value.text];
                        repoIcons.append(p);
                    }
                });

                let lastCommit = document.createElement("p");
                lastCommit.innerText = `last push ${getLastTime(element.pushed_at)} ago`;
                let repoInfo = document.createElement("div");
                repoInfo.classList.add("flex", "repo-info");
                repoInfo.append(repoIcons, lastCommit);
                
                div.append(h4, h5, repoInfo);
                reposContainer.append(div);
            });
            parentElm.append(reposContainer);
        });
}

function getLastTime(data) {
    let date = new Date();
    if (date.getFullYear() - data.slice(0, 4)) {
        return `${date.getFullYear() - data.slice(0, 4)} years`;
    } else if (date.getMonth() + 1 - data.slice(5, 7)) {
        return `${date.getMonth() + 1 - data.slice(5, 7)} months`;
    } else if (date.getDate() - data.slice(8, 10)) {
        return `${date.getDate() - data.slice(8, 10)} days`
    } else if (date.getHours() - data.slice(11, 13)) {
        return `${date.getHours() - data.slice(11, 13)} hours`
    } else if (date.getMinutes() - data.slice(14, 16)) {
        return `${date.getMinutes() - data.slice(14, 16)} minutes`
    } else if (date.getSeconds() - data.slice(17, 19)) {
        return `${date.getSeconds() - data.slice(17, 19)} seconds`
    } else return "a few milliseconds";
}

function displayFollowers(data, parentElm) {
    fetch(data.followers_url)
        .then(res => res.json())
        .then((followersData) => {
            console.log(followersData);
            let followersContainer = document.createElement("div");
            followersContainer.classList.add("followers-container");
            let sectionHeading = document.createElement("h3");
            sectionHeading.classList.add("section-heading");
            sectionHeading.innerText = "Followers";
            let followers = document.createElement("div");
            followers.classList.add("followers");
            followersContainer.append(sectionHeading, followers);
            followersData.forEach((element) => {
                let div = document.createElement("div");
                div.classList.add("follower");
                let img = document.createElement("img");
                img.classList.add("follower-avatar");
                img.src = element.avatar_url;

                let h5 = document.createElement("h5");
                h5.innerText = element.login;
                
                div.append(img, h5);
                followers.append(div);
            });
            parentElm.append(followersContainer);
        });
}


searchForm.addEventListener("submit", createUi);