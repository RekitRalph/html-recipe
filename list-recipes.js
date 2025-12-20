
// once document is loaded, load list of markdown files
// and generate table of contents with search functionality
$(document).ready(function() {
  let allRecipes = [];
  let listOfRecipes = '';

  // create list of recipes
  for (let i in files) {
    let url = files[i];

    // skip files that start with underscore
    // (such as the _template.md file)
    if (url[0] === '_') {
      continue;
    }

    // create anchor and name from url
    let anchor = url.replace('.md', '');
    let name = anchor.split('-').join(' ');

    // store recipe info for searching
    allRecipes.push({
      name: name,
      anchor: anchor,
      url: url
    });
  }

  // sort recipes alphabetically by name
  allRecipes.sort((a, b) => a.name.localeCompare(b.name));

  // build list of recipes HTML
  for (let i = 0; i < allRecipes.length; i++) {
    let recipe = allRecipes[i];
    listOfRecipes += '<li><a href="recipe.html#' + recipe.anchor + '">' + recipe.name + '</a></li>';
  }

  // add recipes to page
  $('#toc ul').html(listOfRecipes);

  // search functionality
  $('#searchBox').on('input', function() {
    let searchTerm = $(this).val().toLowerCase();

    if (searchTerm === '') {
      // show all recipes if search is empty
      $('#toc ul li').show();
    } else {
      // filter recipes based on search term
      $('#toc ul li').each(function() {
        let recipeName = $(this).text().toLowerCase();
        if (recipeName.includes(searchTerm)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    }
  });
});

