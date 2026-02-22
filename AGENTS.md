# AGENTS.md

Guidelines for agentic coding agents operating in this repository.

## Project Overview

This is an HTML starter kit template using Gulp for building static websites. It includes SASS preprocessing, HTML partials via rigger, image optimization, and live reloading.

## Build Commands

```bash
# Install dependencies
npm install

# Start development server with live reload (builds + watches + serves)
npm start

# Alternative: just run gulp directly
gulp

# Build for production (without serve)
gulp build

# Clean build directory
gulp clean

# Individual tasks
gulp style    # Compile SASS to CSS
gulp html     # Process HTML with rigger
gulp js       # Minify JavaScript
gulp images   # Optimize images
```

Note: There are no lint or test commands configured. This is a simple static site build.

## Project Structure

```
source/
├── sass/
│   ├── main.scss           # Entry point - imports all partials
│   ├── utils/              # Mixins and utilities
│   │   ├── _utils.scss     # Imports my-mixins and css3-mixins
│   │   ├── _my-mixins.scss # Custom mixins
│   │   └── _css3-mixins.scss
│   ├── vendors/            # Third-party styles (normalize, etc.)
│   ├── base/
│   │   ├── _base.scss      # Imports colors and options
│   │   ├── _colors.scss    # Color variables ($blue, etc.)
│   │   └── _options.scss   # Base element styles
│   └── components/         # Component-specific styles
│       ├── _components.scss # Imports all component partials
│       └── _*.scss         # Individual component files
├── js/
│   └── script.js           # Main JavaScript file
├── img/                    # Source images (png, jpg, gif, svg)
├── parts/
│   ├── header.html         # Header partial
│   ├── footer.html         # Footer partial
│   └── sidebar.html        # Sidebar partial
└── *.html                  # Page templates

build/                      # Compiled output (gitignored)
├── css/main.min.css
├── js/script.min.js
├── img/
└── *.html
```

## Code Style Guidelines

### HTML

- Use HTML5 doctype
- Include viewport meta tag
- Use rigger syntax for partials: `//= parts/filename.html`
- Place partial includes at the start/end of files (header/footer pattern)
- Use double quotes for attributes
- Use lowercase for tags and attributes

```html
//= parts/header.html

<main>
  <div class="component">
    <div class="component__element">Content</div>
  </div>
</main>

//= parts/footer.html
```

### SASS/SCSS

- Entry point (`main.scss`) only contains imports
- Use underscore prefix for partial files: `_component-name.scss`
- Use 2-space indentation
- Follow 7-1 pattern: utils, vendors, base, components directories
- Nest selectors to reflect HTML structure, but limit depth

#### BEM Naming Convention

Use Block__Element--Modifier pattern:

```scss
.block { }
.block__element { }
.block__element--modifier { }
.block--modifier { }
```

#### Nesting

```scss
.component {
  property: value;

  &__element {
    property: value;

    &:hover { }
  }

  @media (max-width: 768px) {
    property: mobile-value;
  }
}
```

#### Variables

- Define color variables in `base/_colors.scss`
- Use descriptive names: `$blue`, `$primary-color`
- Reference variables throughout: `color: $blue;`

#### Mixins

- Define reusable mixins in `utils/_my-mixins.scss`
- Accept parameters for flexibility

```scss
@mixin link($color, $hover-color, $border-color, $border-hover) {
  color: $color;
  &:hover {
    color: $hover-color;
  }
}
```

#### Media Queries

- Nest media queries inside selectors (not at file end)
- Use max-width breakpoints
- Common breakpoint: 768px for mobile

### JavaScript

- Uses jQuery (loaded via CDN in header partial)
- Wrap code in `$(document).ready(function() { })`
- Use camelCase for variable names
- Keep JavaScript minimal; this is primarily a CSS/HTML project

```javascript
$(document).ready(function() {
  $(".selector").on("click", function() {
    // Handler
  });
});
```

### CSS/SASS Conventions

- Use `@extend .wrapper` for layout wrappers
- Use `.clearfix` for float containers
- Set `box-sizing: border-box` globally
- Reset margins/padding on headings and lists
- Use `max-width: 100%` for responsive images

### File Naming

- SASS partials: `_kebab-case.scss`
- HTML files: `kebab-case.html`
- JavaScript: `kebab-case.js`

### Imports Order

In `main.scss`:
1. Utils (mixins)
2. Vendors (third-party)
3. Base (variables, resets)
4. Components (UI elements)

## Dependencies

- Gulp 3.x task runner
- gulp-sass for SASS compilation
- gulp-rigger for HTML partials
- gulp-autoprefixer for vendor prefixes
- browser-sync for live reload

## Notes

- Output CSS is minified with `.min.css` suffix
- Output JS is minified with `.min.js` suffix
- Images are optimized but not renamed
- Build output goes to `build/` directory
