# Graph_Aware_Technical_Assesment
Hi I thought that I'll share some thoughts and details about the assesment in this file. First of all, it was fun and challenging experience for me. Thanks for the opportunity.

Regarding the finished product. In total it took me about 13 hours to complete to be honest. At times I thought of giving up because couldn't figure out how to parse provided structure into structure that I would like to have in my store. And before that even how I'd like to store parsed data changed 2-3 times. Luckily, I was able to create a clear picture in my head first and in the code after it. Writing tests first helped me greatly. I was able to split implementation into steps, for example, when parsing kids at first I didn't have refs to kid table in parent record.

For the tech stack I decided to go with TS (obviously), redux-toolkit (tried to be overly ambitious at first and do it all with mobx, while having no experience, but decided against it pretty quickly), material-ui (for pretty looking out-of-the-box ui components), jest, webpack. Had ideas about making separate node/express app to serve data, and dockerizing whole app with docker-compose, but had no time for it in the end.

I developed and tested only on dev build, so I hope this would be enough to rate my performance.
Steps to start the project
1) yarn
2) yarn start
3) open http://localhost:3000 in browser
