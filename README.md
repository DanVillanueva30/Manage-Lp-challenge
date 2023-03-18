# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live site URL](https://managelandingchallenge.netlify.app/)

## My process

As always, the first thing I did was to review the templates of the different designs in order to start creating the HTML. After finishing creating the basic structure, I started with the Css code for mobile devices. I had problems with the background images, they did not adjust automatically, and when I changed their height or width, they became distorted, so I decided to create them myself since they were basic shapes and did not pose much of a problem. Once the design for mobile devices was finished, I made the necessary adjustments for the desktop design.

After finishing all the design, I started with the JavaScript part, starting with the navigation and email verification, and finally the testimonials section. To be honest, this was what consumed the most time for me, making the navigation buttons and having only one with a different background color.

The most difficult part was making only the selected button have a different color, and when changing to another one, the color would disappear. But after several attempts, researching information, and taking a small break, I was able to find the solution.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

Since I was not able to use the provided background images correctly, I made the decision to create them using pure HTML5 and CSS, which helped me reinforce my knowledge of using relative and absolute positions.

I was able to put my JavaScript skills into practice and learned how to use array methods better, especially the forEach method.

```html
<h1>Some HTML code I'm proud of</h1>

    <div class="header__bg"></div> This div replaces the background image of the header.
    <div class="about-us__image"></div> This div replaces the background image of the "About Us" section.
```
```css
/*##########    To check the adjustments for other devices, review the CSS file*/

.header { 
    padding: 3rem 0 0 0;
    overflow-x: hidden; /*It's important to add this property to prevent content overflow.*/
    position: relative;
}
.header__bg { /*The styles for the mobile design.*/
    width: 25rem;
	height: 60rem;
	right: -7.5rem;
	transform: rotate(35deg);
	top: -22rem;
	border-bottom-right-radius: 15rem; 
	border-bottom-left-radius: 15rem;
	position: absolute;
	background-color: var(--lightOrange);
	opacity: 0.1;
}

/*For the second bg image, it's practically the same.*/
.about-us {
    position: relative;
}

.about-us__image {
    height: 40rem;
    width: 50%;
    background-color: var(--lightOrange);
    opacity: .2;
    position: absolute;
    right: -13rem;
    border-top-right-radius: 10rem;
    border-top-left-radius: 10rem;
    transform: rotate(225deg);
    top: -25rem;
    display: none;
}
```

### Continued development

I need to learn how to change the styles of SVG images since I wasn't able to do it this time, as I won't always be able to recreate the image using pure HTML and CSS. I'll also practice more on the JavaScript part, even though I'm capable of writing code, I still need to practice as I'm not yet able to write the simplest and most effective solution.

### Useful resources

- [Resource 1](https://responsively.app/) - This app is useful for seeing the changes you make to your design in real-time on multiple devices at once. It's very helpful!
- [Resource 2](https://openai.com/blog/chatgpt) - I wasn't 100% confident in my JavaScript code for creating the testimonial buttons, so I decided to ask for advice from the AI and it gave me a simpler solution than what I had written. It's really helpful.



## Author

- Frontend Mentor - [@DanVillanueva30](https://www.frontendmentor.io/profile/DanVillanueva30)

