# Analytics
We use Google's analytics services to povide insights on our web applications. They can be viewed here: https://analytics.google.com/analytics/web/#/p219696497/reports

We have standard analytics set up on our main website and all tools. All tools also have a `tool-action-clicked` event set up to fire each time the "main action" of the tool is fired, i.e. when a JSON is formatted.

### SEO
SEO performance can be seen here: https://search.google.com/search-console?resource_id=sc-domain%3Aholistic-toolbox.com

## Configuration
Analytics are set up with both:
- the firebase initialisation command included in toolbox-layout
- a script tag included in the index.html of each web application

## Notes and Caveats:
- To set up a custom event in google analytics there is a guide here: https://support.google.com/tagmanager/answer/6106716?hl=en&ref_topic=6333310
- There is a debug mode available in google tag manager to test out tags, use it!
- If there are issues with events showing up in the analytics console:
	- ensure `'GA Default'` is set as the current event tag
	- ensyre `'Enable overriding settings in this tag'` is set to true for the tag
	- ensure you have waited at least 1 hour for events to propogate

## Roadmap
- ensure events fired on different urls (i.e. `.web.app`) are included