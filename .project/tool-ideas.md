# Tool Ideas

A list of concepts we have for potential future tools. We should flesh these ideas out wherever possible

## Base 64 Image & String Encoder
Converts images and strings to base64

Why?
Base64 encoded images can be embedded using img tags or CSS, speeding up load times for smaller images by preventing additional HTTP requests. This can be done to build single-file mockups / demo pages for your clients, HTML email signatures that will not trigger the nasty "show images" warning in email clients, etc._

Also they are used in sending images to to certain APIs

Here is a stack-overflow on how to do it in js:
https://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript

Here is an example site:
https://www.base64-image.de/

## OCR Text Extractor
Extracts text from an image

Some initial questions we should answer are below:

How should we deploy the backend for this tool? Will it be cost effective?

What services do we want to make available in the initial tool?

Could we potentially have multiple front end tools using the same back end service (i.e. face detector)? If so, which?

## Integer conversions
Converts integers into different formats

https://cryptii.com/pipes/integer-converter (confusing / overkill example)

## geolocation converter + reverse (lat and long)

## Unix timestamp converter

## Prose Helper
A tool to help improve english prose, kind of like grammerly
- do the stuff grammerly does
- offer alternatives for words that appear to be very high frequency using a thesaurus
