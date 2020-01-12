# Creating a New Tool

This is the process to create a new tool for the Holistic Toolbox

1. Create a new folder in the [`tools`](/tools) folder named appropriately, i.e. json-formatter

2. Add your project to the readme in the [`tools`](/tools) folder

2. Create a readme in this folder documenting the functionality of the tool

3. If the project involves a UI refer to the [`.project/templates/toolbox-ui`](/.project/templates/toolbox-ui) example to set up your project

4. Add the completed tool as a subdomain. To do this, first login to the Firebase console and navigate to the "Hosting" section of holistic-toolbox. Click "Add a custom domain" and enter the name of your tool, e.g. [`name`].holistic-toolbox.com. You will then be shown IP addresses and the name of your domain to copy into Google Domain's DNS settings. Login into Google Domains under holistic-toolbox.com, navigate to DNS, scroll to the bottom to "custom resource records" and enter the appropriate information.
