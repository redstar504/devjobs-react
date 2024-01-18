# React Job Board

This job board was built as part of a [Frontend Mentor](https://frontendmentor.io) challenge.

View the live demo [here](https://devjobs.icyloops.com/).

Some notes about the project:

#### Semantic HTML markup
- The layout was implemented in HTML5 and uses semantic, representational tags where possible.

#### Vanilla CSS implementation
- The CSS was implemented without any frameworks, using a presentational based class approach.
- While the CSS mostly exists in the `screen.css` file, I broke it out into other files where appropriate to prevent over-cluttering of the single file.
- If I was to continue developing the application, I would likely compartmentalize the CSS more. It's an unnecessary optimization at this point.
- The job list is implemented using CSS grid in order to provide effective layout transitions.
- The breakpoints entail some creative use of CSS properties so the markup structure wouldn't have to be altered for screen size.
- All dimensions are implemented using EM sizes so that the browser's font-size can be adjusted allowing for increased accessibility.
- Color mode is provided based on the user's operating system preference.

#### Responsivity
- The layout adapts for each screen size.
- The job grid is roughly 3 columns wide on large screens, and reduces to a stacked single column on small screens.

#### Built using React
- The project was implemented with React framework using JavaScript.
- Components for filtering and listing jobs were implemented using a context provider pattern.
- The filtering logic was decoupled from the job listing in a way that facilitates reuse for future development.
- The only library dependencies are `react-icons` and `react-spinners` to provide SVGs for icons and loading indicators.
- I believe in minimal integration of 3rd party libraries, and prefer to build basic implementations of functionality until considering libraries.
- Filtering by location provides autocomplete via the Google Places API, and gives the user the ability to filter jobs by a provided location.
- Dark mode is toggled based on user's operating system preference by default, and if changed will persist to local storage to be used on future visits.

#### Django REST Framework
- All jobs are provided through a backend constructed using Django REST framework.  The API project can be viewed [here](https://github.com/redstar504/devjobs-api)
- Jobs are stored along with coordinates and can be filtered using a `placeId` provided by Google, or by coordinates supplied by the browsers current geographical location.
- Jobs filtered by location are returned in order of the closest matches.  Job radius is currently limited to 1000km but is adjustable through the API call.
- Job descriptions are stored in HTML but the back-end supports providing Markdown which is translated to HTML before inserting the row.
- Searching by job title will perform a full-text search of the job description and title on the back-end.

#### Bundling and Deployment
- The dev server and the bundling is provided by Vite.
- Both the front-end and the back-end of this project are hosted courtesy of the Render platform.
- Each project builds and deploys automatically upon pushing to the main branch on GitHub.

If testing the app and any display issues or bugs are encountered, please open an issue on this GitHub repo.