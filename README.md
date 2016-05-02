### storyspace

# Week 1

Prepare presentation for group studies. Create timeline of schedule for the quarter.

# Week 2

This week, we fixed a small glitch with posting a story. Before, the message “Your story has been posted” would appear when the user closed out of the share your story form even if there was no story was submitted.

We worked on the branding of Story Space by creating a simple logo. (We would love feedback on this!). Story Space was originally tied to the theme of different universes so the logo incorporates the idea of stories and space (in terms of intergalactic space - such as stars and universes) coming together.

There is now an added option to upload an image with the story when posting a story. However, the image does not get posted with the story when it is submitted and we may need back end help to get images posted when submitted.

On the "share your story" overlay, we have added an additional method for users to exit the popup. Users are able to exit by a)submitting a story, b)clicking on the "x" button and (now) c)clicking outside of the overlay. This function uses the jQuery UI library to create a dialog box.

We also created Story Space into an organization on github so that we can now use github to properly collaborate and code this project together in a much simpler way than before.

# Week 3

After receiving feedback from students at our weekly class meeting, we decided to prioritize the "list view" function of our website. We began by researching and sketching formats to display non-location-based stories. In our brainstorm, we came across questions like "which view should users see first", "what are the preferences of returning users", "how will users toggle between the views", "how do we communicate that the list view functions similarly to the map view" and ultimately "how will users know what to do?!". After playing around with the idea of a "split-screen" interface and delayed animation, we decided on several things:

1. users will receive the map view as a default view, and will be given the option to toggle between the two views through a) horizontal scrolling and b) a toggle button
2. users will be given a brief tutorial of how to navigate the website, with the option of exiting the tutorial through a direct "skip" button or by through independently navigating the website
3. the list view will take on a multiple-column grid-like format that will be flexible to the length of each user's post

From there, we revisited our sketches, created a mockup of the interface and coded a template using the Masonry jQuery library (index2.html). We are now in the process of researching libraries to implement a horizontal scrolling animation.

In addition to beginning the work on the list view, we were able to begin work on the back end portion of Story Space (courtesy of our official back end developer for this project: Kelvin!). A new repository on github was created to merge the front end and back end, and a database was created to store our stories.

# Week 4

We changed the style of the story markers on the map to circles so that for stories that fit more than one category, the marker can easily be divided up like a pie chart.

We spent a lot of time discussing the visual aesthetic of Story Space because the original colors for the buttons used were chosen with little thought. We changed the color and style of the buttons so that Story Space could adopt a more sophisticated and serious look because the previous colors and style seemed a bit too playful and childish, which was not how we wanted the site to be portrayed. We were careful with our color choices since colors can signify many things and our site covered topics and issues that people may be sensitive towards. We did not want the colors to be associated with any negative stereotypes of the various story categories.

With the changes of the style of the buttons, we also changed what happens when the user interacts with the button.

1. By default, the button is filled. When the button is filled, it indicates that the story marker is displayed on the map.
2. When the story is not displayed on the map, the button will not be filled and will be an outline instead.
3. A text shadow is added when the user hovers over the button.

Photos can now be uploaded with each story and it can be displayed with the story when posted.

We adjusted the layout for the list view of stories to match the visual changes we made with the colors, buttons, and markers of the map layout.

#### Kelvin's Corner

We started to implement the functionality of creating poly-category stories (versus the mono-category stories of before) in the backend and frontend. This required changing the database schema, rewriting some of the form-based API, and modifying the frontend JavaScript used to fetch and persist the stories.

We also wrote some JavaScript to dynamically generate the "pie chart" as SVG circle sectors for the Leaflet map icons.

# Week 5

After receiving feedback on our new changes to the buttons, we changed the colors again to be more complementary with one another. We also decided to resort back to the previous hover effect that we originally had and decided to not use the border style box anymore. 

We finalized the design for the list view layout of the story after making small changes to the design and the font choices. We then coded a prototype that now includes the stories from the map view as well as photos. It's linked on the navigation bar for the purpose of viewing and interacting with it but we plan to incorporate an element that makes it easy to toggle between the list view and the map view of the stories. 

We researched various resources (based off of feedback from our audience testing from des 157) to provide help to users who go to story space and want to seek help or are interested in taking action after reading stories (because they feel empowered).

# Week 6

This week, we focused primarily on re-organizing and re-mapping Story Space. From the past couple weeks, we realized that we were constantly running into design and coding complications. There were many questions that had been left unanswered in terms of specific interactions and features, and that hindered our ability to make progress with the website. 

During our first meeting of the week, we compiled a list of questions and clarifications, and discussed possible solutions. We drafted a new "to-do" list and re-organized our timeline.

During our second meeting, we re-mapped our site and focused on interaction details. We created an "action map" for ourselves that shows the different options users will have on the two different interfaces. We also sketched out rough wireframes for each "page" of our website.

During our last meeting, we focused on design details. We created a mockup of our new top navigation, which includes a drop-down menu and a toggle button (to switch between a list view and a map view). We also created a mockup for the Tutorial page, to be inserted in the drop-down menu. This tutorial page functions to teach users how to use the features on our website. 

