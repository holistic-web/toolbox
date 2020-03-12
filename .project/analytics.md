# Analytics

We are using Google Tag Manager to implement Google Analytics. Our analytics scripts are included in the `index.html` files of our web apps and also in our layout project's `index.js.

To view analytics please go to the Google Analytics [console](https://analytics.google.com/analytics/web/#/report-home/a158697610w223179031p211788342)

### Roadmap:

- Check it is working on .web.app urls
- Improve event naming

### SEO
SEO performance can be seen here: https://search.google.com/search-console?resource_id=sc-domain%3Aholistic-toolbox.com

### Short GTM Tag Overview:

- Go to GTM [console](https://tagmanager.google.com/#/container/accounts/6000591786/containers/30658965/workspaces/3) / Ask to be invited then go
- You can set up tags for Analytics / Ads and more
- To set up custom events for analytics follow the following [documentation](https://support.google.com/tagmanager/answer/6106716?hl=en&ref_topic=6333310)
- To test whether a new tag is working, go to the GTM console and preview the workspace. Then, in your browser, navigate to the site that you are trying to set up your new tag for. A window should pop up from the bottom of your browser allowing you to explore the tags on that page so long as the overall GTM tag has already been added to said page
- In your event tag, by using the 'GA Default' GTM variable under the 'Google Analytics Settings' option, you will be able to have your event show up in the Google Analytics console
- In your event tag, also check 'Enable overriding settings in this tag' and add the UA-Tracking ID found in the GA Default settings variable
- It may take a while ( seems to be < 60mins ) for your event to come through to Google Analytics from when tag is fired
