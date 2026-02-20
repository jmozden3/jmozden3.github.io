---
layout: post
title: "Lessons from TAing my favorite class"
date: 2026-02-18 12:00:00 -0500
categories: general
tags: [tech]
excerpt: "What do newly minted techies build? And how?"
---

As someone who self-desrcribes himself as a "liason between technical and non-technical stakeholders" (OK mr. business man) I recently found a nice little short job for myself. This January, I was a teaching assistant for a class called "Programming Generative AI applications" at Columbia Business School, which I took last spring as a student. 

From the syllabus...

"The focus of this course is to give you a working knowledge of what it takes to customzie and assemble a customized generative AI application."

That's about as good as I could describe it. It's building AI applications. 

Now, the "AI portion" goes two ways - it's about integrating AI into applications (using OpenAI's API) but also using AI to build (Cursor, Claude Code, etc.). 

The class was only five day, 8 hours a day, and was broken up between course work and project work. Again, from the syllabus...

"About 50% of the class time will be devoted to a group project where you will, in small groups, build your own customized AI applications."

My job as a teacher's assistant wasn't to teach, but to walk around and help each group during project time. What was cool about this job was that I got to go to each group, understand what they were building, why they were building it, and how they were building it. 

Another unique part of this class is that it's for beginners - you need very little, if any, tech knowledge before taking this class. So essentially, **I got a firsthand look at what beginners build, and how they do it.**

After five days of watching (mostly) beginners build real AI apps, I came away with a few observations - some expected, and some that genuinely surprised me. 

## On The Tools

[Cursor](https://cursor.com/agents) was the main tool coding of choice. While I think there are better coding products out there today ([Claude Code](https://code.claude.com/docs/en/overview) _cough cough_) it was relevant to newbies to learn about IDEs (even if they aren't around forever). Additionally, there are quicker ways to mock up applications using tools like [Lovable](https://lovable.dev/) or [Base44](https://base44.com/); however, many of these students want to eventually work in tech firms, and again, it's good to know how enterprises are shipping codes today. 

![Cursor Interaction](/assets/images/cursor-agents-interface.png)
> *Mostly all the interaction in the IDE comes from working with the agents, not the code itself*

[OpenAI API](https://platform.openai.com/api-keys) was our token of choice. Most people know and understand OpenAI, and their API documentation is pretty easy to read through. We also make sure to set usage limits just in case something goes wrong. 

[Vercel](https://vercel.com/) blew up this year. Seldom did people use it last year. Ease of deployment, in my mind, has made one of the biggest leaps since last year. I've personally used Vercel, and it's absolutely excellent - simply connect it was a repository and it will create a shareable link for you. Even to me, I was impressed.

[Supabase](https://supabase.com/) was the go-to tool for databases. Supabase itself was a great, easy to use option for application databases, but databases created a bit of a hassle for some student groups. More on that below.

If I were to create an application from scratch, as a beginner, I would generally follow this flow, which is what most students did. 

![User Flow](/assets/images/deployment-user-flow.jpg)
> *Code is cursor. Push to Github. Deploy to Vercel. You have a full functioning, shareable application*

## On Getting Stuck

Troubleshooting is a skill. For beginners, most troubleshooting (primarily in Cursor) consisted of the following prompt - "plz fix." Not really...but closer to that than an actual, effective troubleshooting message. Truthfully, I believe this comes down to experience. The best troubleshooting comes from knowing where the error is and what the expected behavior should be, _not_ from immediately knowing what the error is. 80% of my time as a TA was troubelshooting with teams, and I didn't know 80% of the issues upon intial review; however, all were solved because I knew how to troubleshoot. Learn that skill. 

Minimize any need for authentication and connections. For example, one team ran into issues connecting to their supabase database. Other teams had trouble connecting to multiple Google Calendars and Drives. This is a five day class where you showcase your product at the end - in my mind, there is no need to overcomplicate things, especially for demos. This is even true for a production grade application I'm trying to build - our first focus isn't auth or connecting different data sources. Keep it as simple as possible, even if that means using mock data locally.

Github, specifically branching, is really difficult for beginners to wrap their head around. People worked in teams of 4-5, and for some of the teams that tried to do branches ran into merge issues pretty much instantly. It's better to have one person focus on the code at each time.

Some AI's went rogue, and it takes someone with a bit of experience to see when it goes down weird little rabbit holes. For example, one group's Cursor made a .md file for every single prompt they asked the machine. Know what you want, and if something seems to be taking too long or seems overcomplicated, it probably is. It's good to prompt Cursor at the beginner discussing what you are trying to build and request for brevity over complication.

## On The Class

On some of the theory parts of class, we used [Google Colab](https://colab.research.google.com/). This worked really well since we didn't run into any dependency issues that you might face with something like Jupyter Notebook. 

Last year, we discussed HTML. This year, we substituted those hours for teaching about deployment and what deployment is. That was a good swap of information, and with technology moving so quickly, I expect more changes to be made next year. 

Virtual environments are slightly difficult to explain, especially as why they are a best practice. That said, it was well worth it to help people quickly set one up for each project to minimize dependency issues, and basically give a one-minute explanation of why they are important, even if people don't 100% understand them fully. It's better for them simply to know that they are a best practice and less on why...at least for this class.

The five-day, intensive curriculum works amazingly well for this type of class. Lack of momentum is the biggest killer of technology projects - keeping everyone together for five days, working consistently toward a common goal created the best output. 

To me, this is what AI education should look like - there is theory, but more than that, there is real world, project based work that pushes people to _create_. Creation is the top level of Bloom's Taxonomy and more classes should focus on going from remembering, understanding, and applying to analyzing, evaluating, and creating.

![Bloom's Taxonomy](/assets/images/blooms-taxonomy.jpg)
> *Bloom's Taxonomy is a six-level hierarchy used to classify learning objectives by their cognitive complexity, moving from foundational memorization to higher-order critical thinking. Creation is the highest cognitive level because it requires students to synthesize all previous levels to produce original work*

## On the Bigger Picture

The reason this class is so beneficial is because everyone knows AI can help, but few know how to make it work for them. People need a little push to get from 0 to 1. This class teaches you, through project based work, on how AI can help you build. Many students have taken their group projects and continued to work on them or even created new products on their own time. Continued to learn more and more, just by doing. 

The apps built this year were technically better than last year, and next year will be dramatically better than this year's. That said, I still remember some stand out applications from last year's class that I would use over some of today's more recent applications.

Building, deploying, even databasing - that is more accessible than ever. But troubleshooting, knowing what you're prompting toward, knowing what to build and why - that is still on us, and it makes all the difference. 

The tools got easier. The thinking did not. And that's what we as students, or otherwise, should continue to work on every single day. 

_Special thanks to Professor Johar and my trusty TA partners in crime Chitipat and Xilin. Wouldn't have been as informative (and fun) without you_












