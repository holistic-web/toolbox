# Creating a New Tool

This is the process to create a new tool for the Holistic Toolbox.

1. Create a branch off master to make your changes on.

1. Create a new sub-folder in the [`tools`](/tools) folder named appropriately, i.e. `json-formatter`.

1. Add your project to the (A-Z alphabetical) list in the Readme in the [`tools`](/tools) folder.

1. Copy the contents of the [`.project/templates/tool`](/.project/templates/tool-ui) into the new folder created for your tool.

1. Create a new website in the firebase console under "Hosting" and ensure the firebase.json in your new folder references the new website in the `site` field.

1. Search the newly created folder for the string "`#TODO`" and update the places where this is found.

1. Build your tool! Now is the time build your tool. Add any functionality you might like. Follow the steps in the readme to deploy it to a testing domain for others to review.

1. Add an item for your tool in the tools array here: [`/toolbox-website/src/Website.vue#L36`](/toolbox-website/src/Website.vue#L36).

1. Add a linting workflow to the [`/.github/workflows`](/.github/workflows) folder. This can be done by copying an existing one and replacing the tool name where it occurs in the file.

1. Add a deployment workflow to the [`/.github/workflows`](/.github/workflows) folder. This can be done by copying an existing one and replacing the tool name where it occurs in the file.

1. Add the completed tool as a subdomain in Google hosting panel. We want to configure entries for both `tool-name.holistic-toolbox.com` and `www.tool-name.holistic-toolbox.com`.

1. If everything else above is done and the work has been reviewed we can now make the tool live. In the "Hosting" section of the firebase console navigate to your new site and select `Add a custom domain`. Point this towards the urls we have set up in the step above and the site will be online.

1. Merge the PR into master. The tool is now part of the toolbox.