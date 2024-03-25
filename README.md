
# Persa-v1

The finished result of Persa's Website

  

**1.0.0:** release

<br>

**1.1.0:** enabled automatic form detection from netlify by adding the netlify attribute to the 2 forms available

<br>

**1.2.0:** added automatic html minification

<br>

**1.3.0:** added "_redirects", which automatically redirects users based on their set language in the browser. This eliminates the need to add an html document at the root directory, which in turns helps speed up
1. The predictable increase of latency
2. The predictable slow-down caused from the increased latency
3. A drop in Lightspeed score, because of the amount of redirects andtime to load from the first byte

<br>

**1.4.0:** Added "robots.txt" to instruct search engine crawlers how to crawl the page. They are allowed to crawl every webpage except the copyright.html

<br>

**1.5.0:** Added a website sitemap "sitemap.xml"

<br>

**1.5.1:** Optimized the pagespeed scores by moving the hotjar script to the bottom of the body element

<br>

**1.5.2:** Due to an unexplainable issue with google search console, netlify OR cloudflare, updated the sitemap.xml to include "persaco.com/" (will later convert all sites to https on a later version)

<br>

**1.5.3:** Updated the "sitemap.xml". 
- Removed the http varients of link to instruct the crawlers and search engines to showcase the https version of the links
- Removed "copyright.html" from its list to match the "robots.txt"

<br>

**1.6.0:** Added Canonical and alternate link attributes to english and greek versions respectively

<br>

**1.6.1:** Changed the "app.js" script file to redirect to prettier URLs (removed the .html suffix from the URLs)

<br>

**1.7.0:** 
- Changed the canonical and alternate element tags to link to "www.persaco.com" instead of "persaco.com"
- Added a new 404.html, alongside all its required css and image
- Added new redirect rule, to redirect all broken links to those newly added 404.html
- Added a new disallowed directory for the crawlers to crawl to, the "404.html"

<br>

**1.8.0:** 
1. Added a "success.html" page to redirect to after the forms have been successfully completed.
2. Added new disallow rules for the robots
3. Updated the "404.css" to also support elements from the "success.html", thus saving time in creating a new css file
4. Added an attribute to "meetingbook.html" form's to instruct netlify to redirect pages to the new "success.html"

**1.8.1:** Changed all references about Persa from "Persa Consta" to "Persa Costa", in both greek and english

<br>

**1.8.2:** Changed Bsc on "about.html" from "Bsc" to "BSc". Also italisized them to improve visual hierarchy

<br>

**1.9.0:** 
- Changed the way the cookies redirect works. The redirect job has been handed over to netlify, which will automatically redirect users who first time visit the website to the appropriate language version depending on the set language of their browser. If the user decides to switch the language, it then installs cookies about the language they chose. When eventually the user revisits the website, netlify will redirect them to the language the user chose. This combats 2 issues faced:  
	1. It allows for a better index by search engines, since they won't be forcibly redirected to another link, making both language versions visible to the web
	2. Slightly increases the speed in which the site loads	
-  Updated the "sitemap.xml"
- Removed hotjar from the html files and instead offloaded it to google tags, improving website perfomance by utilizing the PartyTown library
- Updated "_redirects"

**1.9.1:** Added semantic meaning to version numbers to follow the standard conventions used for npm package versions

<br>

**1.9.2:** Fixed a small typo in the english home page