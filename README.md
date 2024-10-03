├─ angular.json
├─ backend
│ ├─ package-lock.json
│ ├─ package.json
│ ├─ src
│ │ ├─ config
│ │ │ └─ database.ts
│ │ ├─ middleware
│ │ │ └─ error-handler.ts
│ │ ├─ models
│ │ │ ├─ blog-post.model.ts
│ │ │ └─ team.model.ts
│ │ ├─ pdf
│ │ │ ├─ pdfController.ts
│ │ │ ├─ pdfGeneratorService.ts
│ │ │ └─ templates
│ │ │ └─ teamRoster.hbs
│ │ ├─ repositories
│ │ │ ├─ base.repository.ts
│ │ │ ├─ blog-post.repository.ts
│ │ │ └─ team.repository.ts
│ │ ├─ server.ts
│ │ └─ services
│ │ ├─ blog-post.service.ts
│ │ └─ team.service.ts
│ └─ tsconfig.json
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ proxy.conf.json
├─ README.md
├─ server.ts
├─ src
│ ├─ app
│ │ ├─ app.component.ts
│ │ ├─ app.config.server.ts
│ │ ├─ app.config.ts
│ │ ├─ app.routes.ts
│ │ ├─ auth
│ │ │ ├─ login
│ │ │ │ └─ login.component.ts
│ │ │ └─ register
│ │ │ ├─ register.component.html
│ │ │ ├─ register.component.scss
│ │ │ └─ register.component.ts
│ │ ├─ backend-portal
│ │ │ ├─ backend-home
│ │ │ │ ├─ backend-home.component.html
│ │ │ │ ├─ backend-home.component.scss
│ │ │ │ └─ backend-home.component.ts
│ │ │ ├─ backend-portal.routes.ts
│ │ │ ├─ blog-management
│ │ │ │ ├─ blog-management.component.html
│ │ │ │ ├─ blog-management.component.scss
│ │ │ │ └─ blog-management.component.ts
│ │ │ ├─ coach-list
│ │ │ │ ├─ coach-list.component.html
│ │ │ │ ├─ coach-list.component.scss
│ │ │ │ └─ coach-list.component.ts
│ │ │ ├─ event-list
│ │ │ │ ├─ event-list.component.html
│ │ │ │ ├─ event-list.component.scss
│ │ │ │ └─ event-list.component.ts
│ │ │ ├─ pdf-generator
│ │ │ │ ├─ pdf-generator.component.html
│ │ │ │ ├─ pdf-generator.component.scss
│ │ │ │ ├─ pdf-generator.component.ts
│ │ │ │ └─ pdf-generator.service.ts
│ │ │ ├─ player-list
│ │ │ │ ├─ player-list.component.html
│ │ │ │ ├─ player-list.component.scss
│ │ │ │ └─ player-list.component.ts
│ │ │ ├─ team-dashboard
│ │ │ │ ├─ team-dashboard.component.html
│ │ │ │ ├─ team-dashboard.component.scss
│ │ │ │ └─ team-dashboard.component.ts
│ │ │ ├─ team-info
│ │ │ │ ├─ team-info.component.html
│ │ │ │ ├─ team-info.component.scss
│ │ │ │ └─ team-info.component.ts
│ │ │ ├─ team-management
│ │ │ │ ├─ team-management.component.html
│ │ │ │ ├─ team-management.component.scss
│ │ │ │ └─ team-management.component.ts
│ │ │ └─ team-selector
│ │ │ ├─ team-selector.component.html
│ │ │ ├─ team-selector.component.scss
│ │ │ └─ team-selector.component.ts
│ │ ├─ components
│ │ │ ├─ blog-post-detail.component.ts
│ │ │ ├─ footer.component.ts
│ │ │ └─ header.component.ts
│ │ ├─ core
│ │ │ ├─ guards
│ │ │ │ └─ auth.guard.ts
│ │ │ └─ services
│ │ │ ├─ auth.service.ts
│ │ │ ├─ blog.service.ts
│ │ │ ├─ coach.service.ts
│ │ │ ├─ data.service.ts
│ │ │ ├─ event.service.ts
│ │ │ ├─ player.service.ts
│ │ │ └─ team.service.ts
│ │ ├─ models
│ │ │ ├─ blog-post.model.ts
│ │ │ ├─ team.model.ts
│ │ │ └─ user.model.ts
│ │ └─ pages
│ │ ├─ all-aboard.component.ts
│ │ ├─ alumni.component.ts
│ │ ├─ extended-team.component.ts
│ │ ├─ home.component.ts
│ │ ├─ on-the-field.component.ts
│ │ ├─ team.component.ts
│ │ └─ xpress-social.component.ts
│ ├─ assets
│ │ ├─ data
│ │ │ ├─ alumni.json
│ │ │ ├─ blog-posts.json
│ │ │ ├─ extended-teams.json
│ │ │ ├─ teams
│ │ │ │ ├─ 2006.json
│ │ │ │ ├─ 2007.json
│ │ │ │ ├─ 2008.json
│ │ │ │ ├─ 2009.json
│ │ │ │ ├─ 2010.json
│ │ │ │ ├─ 2011.json
│ │ │ │ ├─ 2012.json
│ │ │ │ ├─ 2013.json
│ │ │ │ └─ 2014.json
│ │ │ └─ teams.json
│ │ ├─ home-carousel
│ │ │ ├─ Xpress-org.jpg
│ │ │ ├─ Xpress-team-pic.jpg
│ │ │ └─ Xpress.jpg
│ │ ├─ logos
│ │ │ ├─ homefield-logo.jpg
│ │ │ ├─ mvsf-logo.jpg
│ │ │ ├─ mvxLogo1.png
│ │ │ ├─ mvxLogo2.png
│ │ │ ├─ nomadx-logo.webp
│ │ │ └─ wccs-logo.png
│ │ ├─ schools
│ │ │ ├─ ohio-wesleyan-university-logo.png
│ │ │ ├─ st-ursula-academy-logo.png
│ │ │ └─ stebbins-hs-logo.png
│ │ ├─ stock
│ │ │ └─ stock-img-1.jpg
│ │ ├─ team-photos
│ │ ├─ teams
│ │ │ ├─ 2006
│ │ │ │ ├─ coaches
│ │ │ │ └─ players
│ │ │ ├─ 2007
│ │ │ │ ├─ coaches
│ │ │ │ └─ players
│ │ │ │ ├─ allie-sheen.jpg
│ │ │ │ ├─ ella-dersham.jpg
│ │ │ │ ├─ leila-kim.jpg
│ │ │ │ ├─ meredith-pieratt.jpg
│ │ │ │ ├─ natalie-russell.jpg
│ │ │ │ └─ sam-wolfe.jpg
│ │ │ ├─ alumni
│ │ │ │ └─ olivia-basil.png
│ │ │ └─ defaultpfp.jpg
│ │ └─ videos
│ │ └─ MVX-HomePage.mp4
│ ├─ environments
│ │ └─ environment.ts
│ ├─ favicon.ico
│ ├─ index.html
│ ├─ main.server.ts
│ ├─ main.ts
│ └─ styles.scss
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
└─ tsconfig.spec.json

```

```
