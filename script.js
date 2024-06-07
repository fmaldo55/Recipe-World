document.getElementById('recipeListLink').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'recipe-list.html';
});

document.getElementById('homeButton').addEventListener('click', function() {
});

function addBorder(elementId, borderWidth, borderColor) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.border = borderWidth + " solid " + borderColor;
    }
}

function removeBorder(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.border = "none";
    }
}

addBorder("recipe1", "2px", "Solidblue");
addBorder("recipe2", "2px", "Solidred");
addBorder("recipe3", "2px", "Solidgreen");

document.body.style.backgroundColor = "gray";