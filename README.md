# axe-first-react
This is a project template for making an accessibility-first React app.

## Goals
- Provide useful React examples.
- Include a basic layout with a header, content, footer, and expandable side panel.
- Include a form with complicated components, like a date picker.

## Links
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- `components.guide` article on ["Accessibility-First"](https://components.guide/accessibility-first)

## Development Process
Run these commands from the root directory of this project.

### Active Development
- Run the app locally:
  ```
  npm run dev
  ```

### Docker Workflow
If using Docker Desktop:
- Run the build command in PowerShell
- Everything else can be done with Docker Desktop

Commands:
- Build the docker image with `latest` tag:
  ```
  docker build -t axe-first-react:latest .
  ```
- Run the docker container:
  ```
  # http://localhost:13001
  docker run -p 13001:3001 axe-first-react
  ```
- Publish the docker image:
  ```
  # Login to a repository
  docker login
  
  # Tag it under my profile
  docker tag axe-first-react vinniemac189/axe-first-react:latest
  
  # Push the image
  docker push vinniemac189/axe-first-react:latest
  ```
