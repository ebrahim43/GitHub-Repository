let theInput = document.querySelector(".get-repos input")
let getButton = document.querySelector(".get-repos .get-button")
let reposData = document.querySelector(".show-data")

window.onload = function () {
    theInput.focus()
}

getButton.onclick = getRepos;

// Get Repos Function
function getRepos() {

    //If Value Is Empty
    if (theInput.value === '') {
        reposData.innerHTML = "<span>Write Github Username</span>";
    } else {
        fetch(`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => response.json())

        .then((repositories) => {

            //Empty Data Container
            reposData.innerHTML = '';

            //Loop On Repositories
            repositories.forEach(repo => {

                let mainDiv = document.createElement("div")

                // Add Text & Url To The Main Div
                mainDiv.innerHTML = `${repo.name} <a href = "https://github.com/${theInput.value}/${repo.name}" target = "_blank"> Visit </a>`

                // Create Stars Count Element
                let starsCount = document.createElement("span")
                starsCount.textContent = ` Stars ${repo.stargazers_count}`

                //Add Stars Count To The Main Div
                mainDiv.append(starsCount);
                mainDiv.className = "repo-box";

                //Append The Main Div To Container
                reposData.append(mainDiv)
            });
        })
    }
}

