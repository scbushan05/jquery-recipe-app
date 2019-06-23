var recipes = [
    {
        name: "Chicken biryani",
        description: "some text"
    },
    {
        name: "Veg burger",
        description: "some text"
    },
    {
        name: "Veg fried rice",
        description: "some text"
    },
    {
        name: "Vegetable pulav",
        description: "some text"
    },
    {
        name: "Mutton biryani",
        description: "some text"
    }
]

filters = {
    searchText: ''
}

$.each(recipes, function (index, value) {
    $(".recipes").append("<p>"+value.name+"</p>");
})

$("#searchRecipe").on("input", function (event) {
    filters.searchText = $(this).val();

    var filteredRecipes = $.grep(recipes, function (object) {
        return object.name.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    $(".recipes").empty();

    $.each(filteredRecipes, function (index, value) {
        $(".recipes").append("<p>"+value.name+"</p>");
    })
})