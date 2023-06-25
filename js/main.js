function css(element, style) {
  for (const property in style) element.style[property] = style[property];
}

var mainLogoSection = document.querySelector('.main-logo-ssection');
var mainLogoSectionRect = mainLogoSection.getBoundingClientRect();
const initScrollPosition = mainLogoSectionRect.bottom - window.innerHeight;
window.addEventListener('scroll', function () {
  var topSectionLogo = document.querySelector('.bottle.mobile.bottom');
  var mainLogoSectionRect = mainLogoSection.getBoundingClientRect();
  // Check if the main logo section is in the viewport
  if (mainLogoSectionRect.top < window.innerHeight && mainLogoSectionRect.bottom > 0) {
    // Calculate the scroll position relative to the main logo section
    var scrollPosition = mainLogoSectionRect.bottom - window.innerHeight;

    if (scrollPosition >= initScrollPosition - 10) {
      css(topSectionLogo, {
        left: '0px'
      });
    } else {
      css(topSectionLogo, {
        left: (scrollPosition - initScrollPosition) * -1 + 'px'
      });
    }
  }
});

window.addEventListener('scroll', function () {
  const val = 400;
  var mainLogoSection = document.querySelector('.logo-overlay-ssection');
  var topSectionLogo = document.querySelector('.logo-overlay');
  var mainLogoSectionRect = mainLogoSection.getBoundingClientRect();
  // Check if the main logo section is in the viewport
  if (mainLogoSectionRect.top < window.innerHeight && mainLogoSectionRect.bottom > 0) {
    // Calculate the scroll position relative to the main logo section

    var scrollPosition = mainLogoSectionRect.bottom - window.innerHeight;

    if (scrollPosition > 0) {
      if (scrollPosition >= -val) {
        css(topSectionLogo, {
          left: scrollPosition + 'px'
        });
      } else {
        css(topSectionLogo, {
          left: val + 'px'
        });
      }
    } else {
      css(topSectionLogo, {
        left: '0px'
      });
    }
  }
});
window.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  document.getElementById('customCursor').style.left = x + 'px';
  document.getElementById('customCursor').style.top = y + 'px';
  document.getElementById('customCursor').style.display = 'block';
});

window.addEventListener('DOMContentLoaded', function() {
  var customCursor = document.getElementById('customCursor');

  document.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    customCursor.style.left = x + 'px';
    customCursor.style.top = y + 'px';
  });
});

// window.addEventListener('scroll', function () {
//   var textContainer = document.querySelector('.text-container-scroll');
//   var scrollPosition = window.scrollY;
//   var sectionHeight = textContainer.offsetHeight;
//   var viewportHeight = window.innerHeight;

//   // Calculate the scroll position relative to the section
//   var relativeScroll = scrollPosition - textContainer.offsetTop;

//   // Calculate the opacity based on the scroll position
//   var opacity = 0 + relativeScroll / (sectionHeight - viewportHeight);

//   // Apply the opacity to the text container
//   textContainer.style.opacity = opacity;
// });

// window.addEventListener('scroll', function () {
//   var textContainer = document.querySelector('.scroll-section-con');
//   var textWide = document.querySelector('p.text-wide');
//   var scrollPosition = window.scrollY;
//   var sectionHeight = textContainer.offsetHeight;
//   var viewportHeight = window.innerHeight;

//   // Calculate the scroll position relative to the section
//   var relativeScroll = scrollPosition - textContainer.offsetTop;

//   // Calculate the opacity based on the scroll position
//   var opacity = relativeScroll / (sectionHeight - viewportHeight);

//   // Calculate the margin-top based on the scroll position
//   var marginTop = -relativeScroll + 200;

//   // Apply the opacity and margin-top to the text-wide element
//   textWide.style.opacity = opacity;
//   textWide.style.marginTop = marginTop + 'px';
// });
