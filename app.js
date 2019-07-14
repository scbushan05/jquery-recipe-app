var recipes = [];

filters = {
    searchText: ''
}

renderRecipes(recipes, filters);

$("#searchRecipe").on("input", function (event) {
    filters.searchText = $(this).val();

    renderRecipes(recipes, filters);
})

function renderRecipes(recipes, filters) {
    var filteredRecipes = $.grep(recipes, function (object) {
        return object.name.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    $(".recipes").empty();

    $.each(filteredRecipes, function (index, value) {
        $(".recipes").append("<p>"+value.name+"</p>");
    })
}

$('#add-recipe').click(function () {
    recipes.push({
        id: uuidv4(),
        name: 'Chicken biryani',
        description: 'some text'
    })
    localStorage.setItem("recipes", JSON.stringify(recipes));
})
