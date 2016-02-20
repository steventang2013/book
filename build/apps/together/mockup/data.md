---
layout: layout.hbs
---

REVISIONS
========
To fit in a single page on the tablet, some revisions had to made to the images and the layout. For one, I had to use a media screen to separate the
different layouts based on width. Then, I had to shrink the banner size and the image size to ensure that it'll all fit on one page within a standard
768 X 1024 Apple Ipad.

#### Concurrency
Users will be able to see what others post. Once a challenge is created, it will be reflected on the user's page, so that you will know
someone created a challenge. You can also see the number of participants increase in real-time once they've accepted the challenge.

DATA MODEL
========
There will be two databases: The challenge database to store the challenges, and the user database to store the users.
Users will have the following attributes
* id
* name
* online
* stars
* userimage
* Challenges in

Challenges will have the following attributes
* id
* Challenge name
* Challenge description
* Challenge deadline
* Upvotes/Downvotes
* Image
* # participants

