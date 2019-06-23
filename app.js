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

$.each(recipes, function (index, value) {
    $(".recipes").append("<p>"+value.name+"</p>");
})