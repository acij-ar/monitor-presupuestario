# Monitor Presupuestario

Sitio del Monitor Presupuestario: [monitorpresupuestario.acij.org.ar](http://monitorpresupuestario.acij.org.ar/)

## TODO list

### Site features

- Showcase different graphs or analysis that can draw conclusions from
- Different preloaded analysis to choose from.
- Save locally (using for ex local storage) any custom analysis o comparisions the user creates
- Save locally any custom setting the user changes by either using local storage or cookies 
- Everything the user creates should be shareable in social media
- Webmobile support
- Search inspiration in similar sites
- If there are multiple settings that can be changed at any moment, consider using a sticky header that follows the 
user with settings. It can also be several sticky headers that follow the user only when a specific graph is showing
- Global switch toggle for inflation adjustment 
- Global switch toggle for font size 

### Graphs an analysis

- Histogram of budget amounts
- Histogram of programs, activities or entities 
- Some kind of subentities distribution
- Tell stories both vertically and horizontally. Vertically choosing a hierarchichal entity an analysing it bottom dowm.
Horizontally choosing different or all the entities at the same level and comparing them.
- Venn diagrams to compare the same entity in two different years
- Animated treemap? 

### Development
- Server side rendering react. [Article](https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p).
[Another article](https://medium.com/front-end-weekly/adding-a-server-side-rendering-support-for-an-existing-react-application-using-express-and-webpack-5a3d60cf9762)
- Pass props to react client
- Process manager for express vs linux service
- Nginx proxy_pass to react server only in /test
- Webpack.
    - Babel. ES6 to basic js 
    - Compile jsx
    - Polyfills
    - Analytics
    - Newrelic
    - Asset management. Scss, img, fonts
- Google spreadsheet integration

### React components
- Duplicate the actual site
    - Header
    - Footer
    - Home
    - About page
    - Monitor
    - Comparador
- Re-think the actual site
    - Only one page. Landing with dynamic sections

### Testing and code style

- Eslint integration
- Proptypes
- Unit tests
- E2E tests