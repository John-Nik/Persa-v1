# Persa-v1
The finished result of Persa's Website, version 1.0.1

<b>1.0.0:</b> release <br>
<br>
1.0.1: enabled automatic form detection from netlify by adding the netlify attribute to the 2 forms available <br>
<br>
1.0.2: added automatic html minification <br>
<br>
1.0.3: added "_redirects", which automatically redirects users based on their set language in the browser. This eliminates the need to add an html document at the root directory, which in turns helps speed up 
<ul>
  <li>1.the predictable increase of latency</li>
  <li>2. the predictable slow-down caused from the increased latency</li>
  <li>3. a drop in Lightspeed score, because of the amount of redirects and time to load from the first byte</li>
</ul>
