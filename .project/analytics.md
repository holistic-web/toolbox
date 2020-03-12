# Analytics
We use Google's analytics services to povide insights on our web applications.

We have standard analytics set up on our main website and all tools. All tools also have a `tool-action-clicked` event set up to fire each time the "main action" of the tool is fired, i.e. when a JSON is formatted.

## Helpful Links:
- [Firebase Analytics](https://console.firebase.google.com/u/0/project/holistic-toolbox/analytics/app/web:OTBjZmUzYjEtNGI1Yi00MDE0LWFhZTItN2EyZmQ1ZDVkMGZk/overview)
- [Google Analytics](https://analytics.google.com/analytics/web/#/p219696497/reports)
- [Google Tag Manager](https://tagmanager.google.com/#/container/accounts/6000591786/containers/30658965/workspaces/3)
- [SEO Overview](https://search.google.com/search-console?resource_id=sc-domain%3Aholistic-toolbox.com)
- [Tool Actions Clicked](https://analytics.google.com/analytics/web/#/report/content-event-events/a158697610w223179031p211788342/explorer-table.plotKeys=%5B%5D&_r.drilldown=analytics.eventCategory:tool%20click,analytics.eventAction:Click)

## Configuration
Analytics are set up with both:
- the firebase initialisation command included in toolbox-layout
- a script tag included in the index.html of each web application

## Notes and Caveats:
- If you are not seeing any activity in analytics, ensure you are looking at the correct account in the top left: `toolbox-admin` - `Holistic Toolbox` - `All Website Data`.
- To set up a custom event in google analytics there is a guide here: https://support.google.com/tagmanager/answer/6106716?hl=en&ref_topic=6333310
- There is a debug mode available in google tag manager to test out tags, use it!
- If there are issues with events showing up in the analytics console:
	- ensure `'GA Default'` is set as the current event tag
	- ensure `'Enable overriding settings in this tag'` is set to true for the tag
	- ensure you have waited at least 1 hour for events to propogate

## Roadmap
- ensure events fired on different urls (i.e. `.web.app`) are included
- better event label naming