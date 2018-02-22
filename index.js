const alfy = require("alfy");

alfy
  .fetch(
    "http://drivethrurpg.com/includes/ajax/search_autocomplete_jquery.php",
    {
      query: { term: alfy.input },
      json: true
      // transform: body
    }
  )
  .then(results => {
    const searchResults = results
      .slice(0, 20)
      .map(({ name: title, link: arg }) => ({
        title,
        arg
      }));
    const searchForMore = {
      title: `Search DriveThruRPG for '${alfy.input}'`,
      arg: `https://www.drivethrurpg.com/browse.php?keywords=${encodeURIComponent(
        alfy.input
      )}`
    };

    alfy.output([...searchResults, searchForMore]);
  });
