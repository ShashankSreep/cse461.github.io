# My Personal Website

## User Instructions
To view the website, please visit https://shashanksree.com. This is the custom domain that is hosting the website. 


# Tech Stack
This project is made using Vite, Typescript, React, and Tailwind CSS

# Run the Project
Currently, there are 2 branches:
main: This branch is the branch where I commit and push any changes to the codebase
gh-pages: This branch is used to deploy any changes I make, so its reflected on the actual hosted website

## Clone Repo
- If you would like to make any changes to the repo, please clone the repository and make sure the
branch you are on is the main branch

Perform the following command:
`npm install`: This command will install any of the required packages used to run the application

Deploy:
- npm run build
- npm run deploy


### Repository Structure / Contents
- There are 4 major components, and 3 'cards', which are reused throughout the components

src/main.tsx: Renders the application, and main entry point to the app

src/app.tsx: Contains all of the routing setup

src/Components: (Contains a compoenent for each tab in the website, and one for the navbar)
- Home.tsx: Contains the content to display the home page, and has the GitHub, Mail, and Linkedin buttons, which when clicked take the user to my personal github, linkedin, and email

- Navbar.tsx: Contains the navigation bar, which is used to navigate through the various tabs in the application

- Projects.tsx: Displays all of my personal projects, and provides links to them for anyone to view

NOTE: Some of these projects are private repositories (Have NOT yet made public), thus, if the link does not work, this is most likely the reason for this

- education.tsx: Contains all of the classes I have taken, including the starred ones, which I enjoyed the most. Further, contains my resume, and University details.


/src/Components/Cards: This contains all of the 'cards' which I reused multiple times throughout the project, thus I separated these into their own files. 

- coreClasses.tsx: Contains a card, that displays the class information in the education page
- projectCard.tsx: Contains a card, that displays the project information in the projects page
- eduCard.tsx: Displays the University, and contains a link to my resume in the education page



### AI Use In Project
I coded all of the components and routing in the project by myself without AI use. 

- The navbar, I also coded, although I borrowed some of the code from my older personal projects, to make the development smoother, as I found that the skeleton code from that navbar, fit for my use case in this project. 

- I used chatGPT in order to quickly get the libraries or icon packages, in order to nicely display in the home page, and projects page. I also used it sparingly, in order to do some styling, such as when hovering over the navbar tabs, have it have a line that would go across the name. 

Prompt: Suppose I am making a personal website, and I want to have a very simple and minimalist button, that when clicked on takes them to my Github, or email, or linkedin. What package or icon pack would be the best for this? 

Prompt: Suppose I am making a personal website, and in the projects component, I want to make it so that there is a grid of icons, where the icon displays the particular tech stack/framework I know. For example, I want a clean/minimalistic icon for React, Tailwind etc. What packages or icon packs could I use to display this in a nice and minimalistic fashion?

Prompt: Suppose I am working on a Navbar, and I want it, when hovered, to display a line going across, kind of like a span. How can I go about doing that, such that the animation remains smooth, and still keeps the aesthetic of the project minimal?



Other(s):
- Throughout the development of the project, I had GitHub copilot enabled, but I did not specifically prompt copilot to perform any actions. I occassionally used the auto complete here and there to make the development quicker. For example, in the projects, or icons section, when I was displaying the techstack, it would often just know some of the other common icons I would use, and thus I would use the auto-complete to avoid manually typing the exact icon each time. 

Ex: In projects.tsx, there is a const techStack [], which when rendered in the grid format, displays the techstack that I am familiar with/have experience with. Once I typed a couple of them, copilot started to recognize the pattern, and would autofill most of the remaining ones. 




# Domain
- I purchased a custom domain through CloudFlare as recommended by the course. I made changed to the TLD registery by updating the A records to the UP address of the Github pages, and then the CNAME records. A couple things I noticed initially, was that I was able to see an IPv6 address for my domain prior to my IPv4 address. Another thing was that when I used the dig command, the @8.8.8.8 showed the new IP address before the local DNS. Personally, the most interesting thing to me was the fact the IPv6 address was near instant for me, but the IPv4 address being assigned took a couple of minutes, and the website would not load, until the IPv4 address was assigned. 