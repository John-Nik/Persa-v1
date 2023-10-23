# Persa-v1
The finished result of Persa's Website, version 1.0.1

__1.0.0:__ release <br>
<br>
__1.0.1:__ enabled automatic form detection from netlify by adding the netlify attribute to the 2 forms available <br>
<br>
__1.0.2:__ added automatic html minification <br>
<br>
__1.0.3:__ added "_redirects", which automatically redirects users based on their set language in the browser. This eliminates the need to add an html document at the root directory, which in turns helps speed up 

 <ol>   <li>The predictable increase of latency</li>   <li>The
   predictable slow-down caused from the increased latency</li>   <li>A
   drop in Lightspeed score, because of the amount of redirects and time
   to load from the first byte</li> </ol>
   <br>

__1.0.4:__ Added "robots.txt" to instruct search engine crawlers how to crawl the page. They are allowed to crawl every webpage except the copyright.html <br>
<br>
__1.0.4:__ Added a website sitemap "sitemap.xml" <br>
<br>
__1.0.5:__ Optimized the pagespeed scores by moving the hotjar script to the bottom of the body element <br>
<br>
__1.0.5.5:__ Due to an unexplainable issue with google search console, netlify OR cloudflare, updated the sitemap.xml to include "persaco.com/" (will later convert all sites to https on a later version) <br>
<br>
__1.0.6:__ Updated the "sitemap.xml". <ul>  <li>Removed the http varients of link to instruct the crawlers and search engines to showcase the https version of the links</li>  <li>Removed "copyright.html" from its list to match the "robots.txt" </li>  </ul> <br>

__1.0.7:__ Added Canonical and alternate link attributes to english and greek versions respectively <br>
<br>
__1.0.8:__ Changed the "app.js" script file to redirect to prettier URLs (removed the .html suffix from the URLs) <br>
<br>
__1.0.9:__ <ul>  <li>Changed the canonical and alternate element tags to link to "www.persaco.com" instead of "persaco.com"</li>  <li>Added a new 404.html, alongside all its required css and image</li>  <li> Added new redirect rule, to redirect all broken links to those newly added 404.html </li>  <li> Added a new disallowed directory for the crawlers to crawl to, the "404.html" </li>   </ul>

__1.0.10:__ <ol>  <li>Added a "success.html" page to redirect to after the forms have been successfully completed.</li>  <li>Added new disallow rules for the robots</li>  <li>Updated the "404.css" to also support elements from the "success.html", thus saving time in creating a new css file</li>  <li>Added an attribute to "meetingbook.html" form's to instruct netlify to redirect pages to the new "success.html"</li>  </ol>
