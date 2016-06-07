# FAQ

## How do I add my own images?

1. Paste the image you want to use in src/images in your widget’s folder.

2. Open your widget in a text editor.

3. Locate the file in the src folder for the page you want the picture to appear on (or main.html if you want it to appear on all pages).

4. Input the HTML to add an image with the file path to the image inside the quotation marks into the page file.

  ```html
<img src=”images/file.png”/> 
```

To edit and format your images further, refer to http://www.w3schools.com/html/html_images.asp

## How do I add my own fonts?

1. Acquire a font file (such as a .ttf or .woff file) and input it into the src/fonts folder. https://www.google.com/fonts has many fonts you can download.

2. Navigate to 'src/stylesheets/bb-sass-3-3-1/_fonts.scss' via a text editor.

3. Input the following CSS into the _font.scss file, replacing the example text with your font’s information:
  ```css
@font-face {
font-family: 'Example-Font';
src: url('fonts/example-font.filetype');
}
``` 

4. Navigate to the stylesheet of the page you want to use the font for within the bb-sass-3-3-1 folder. Selecting main.scss will implement the font for the entire journey.

5. Replace the default font name with the name of your font:

  ```css
// font-family: 'Example-Font', cursive;
font-family: "Example-Font", cursive;
font-weight: 400;
font-size: $font-size-base;
color: $primary-text-color;
background-color: $page-background-color;
margin: 0; // remove default body margin
```

To edit your fonts beyond this, refer to this site: http://www.w3schools.com/css/css_font.asp 

