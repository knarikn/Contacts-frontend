# AROMA - Bespoke Fragrance Atelier 🌸

A luxury perfume customization website that allows users to create their own signature fragrances by blending premium ingredients from around the world.

![Version](https://img.shields.io/badge/version-1.0.0-gold)
![License](https://img.shields.io/badge/license-MIT-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## ✨ Features

- **48 Premium Ingredients** across 6 fragrance families (Floral, Citrus, Woody, Spicy, Fresh, Oriental)
- **Interactive Perfume Builder** with real-time visual feedback
- **Perfume Pyramid Visualization** displaying Top, Heart, and Base notes
- **Dynamic Bottle Display** with liquid fill animation and color mixing
- **Local Storage** - Save and manage your fragrance collection
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Luxury Editorial Aesthetic** inspired by high-end perfume e-commerce sites
- **Smooth Animations** throughout the user experience

## 🎨 Design Philosophy

AROMA features a sophisticated, editorial design with:
- **Color Palette**: Cream (#FBF9F6), Sand (#F5F1E8), Gold (#C9A36C), Charcoal (#2B2B2B)
- **Typography**: Playfair Display (serif) for headings, Montserrat (sans-serif) for body text
- **Layout**: Clean, spacious design with generous white space
- **Interactions**: Subtle hover effects and smooth transitions

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required - runs entirely in the browser!

### Installation

1. **Download the files**
   ```
   Download or clone this repository to your local machine
   ```

2. **File Structure**
   ```
   aroma-perfume-atelier/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

3. **Open the website**
   - Simply double-click `index.html` to open in your default browser
   - OR right-click → "Open with" → Choose your preferred browser

### Using with VS Code Live Server (Recommended)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The website will open at `http://127.0.0.1:5500`

## 📖 How to Use

### Creating Your Perfume

1. **Select a Fragrance Family**
   - Choose from Floral, Citrus, Woody, Spicy, Fresh, or Oriental
   - Each family contains 8 unique ingredients

2. **Build Your Composition**
   - Click on ingredients to add them to your blend (maximum 8 notes)
   - Watch the bottle fill and change color in real-time
   - View your composition organized by note type (Top, Heart, Base)

3. **Name Your Creation**
   - Enter a custom name in the bottle display
   - Or let the system generate a random elegant name

4. **Save to Your Collection**
   - Click "Save Creation" to add to your private collection
   - Your perfumes are stored locally in your browser

### Understanding Perfume Notes

- **Top Notes** - Initial scent, lasts 15-120 minutes (e.g., Citrus, Mint)
- **Heart Notes** - Main character, lasts 2-4 hours (e.g., Floral, Spicy)
- **Base Notes** - Foundation, lasts 5-10+ hours (e.g., Woody, Oriental)

## 🛠️ Technical Details

### Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **Vanilla JavaScript** - ES6+ features, LocalStorage API
- **Google Fonts** - Playfair Display & Montserrat

### Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Key Code Components

```javascript
// Ingredients Database
const ingredientsDatabase = {
    floral: [...],
    citrus: [...],
    // 48 total ingredients across 6 families
}

// Local Storage for Persistence
localStorage.setItem('aromaCompositions', JSON.stringify(compositions));

// Dynamic Color Mixing
liquid.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
```

## 📁 File Descriptions

### index.html
- Main HTML structure
- Semantic markup with ARIA accessibility considerations
- Responsive meta tags

### styles.css
- CSS custom properties for theming
- Mobile-first responsive design
- Smooth animations and transitions
- Grid and Flexbox layouts

### script.js
- Ingredient database with 48 unique items
- State management for user selections
- LocalStorage integration
- Dynamic DOM manipulation
- Color manipulation utilities

## 🎯 Features Breakdown

### Fragrance Families

| Family | Count | Examples |
|--------|-------|----------|
| Floral | 8 | Rose, Jasmine, Lavender, Peony |
| Citrus | 8 | Bergamot, Lemon, Orange, Grapefruit |
| Woody | 8 | Sandalwood, Cedar, Patchouli, Oud |
| Spicy | 8 | Cinnamon, Ginger, Cardamom, Clove |
| Fresh | 8 | Mint, Eucalyptus, Green Tea, Bamboo |
| Oriental | 8 | Vanilla, Amber, Musk, Incense |

### Interactive Elements

- ✅ Category selection with active states
- ✅ Ingredient cards with hover effects
- ✅ Real-time bottle liquid fill (0-100%)
- ✅ Color-coded note badges
- ✅ Removable note tags
- ✅ Success modal on save
- ✅ Empty state messaging

## 🎨 Customization Guide

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-cream: #FBF9F6;
    --color-gold: #C9A36C;
    --color-charcoal: #2B2B2B;
    /* Modify these to change the entire color scheme */
}
```

### Adding More Ingredients

Edit the database in `script.js`:

```javascript
const ingredientsDatabase = {
    your_category: [
        { id: 'unique-id', name: 'Name', icon: '🌸', note: 'Heart', color: '#HEX' }
    ]
}
```

### Adjusting Maximum Notes

Change the limit in `script.js`:

```javascript
const maxNotes = 8; // Change to your desired limit
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🐛 Troubleshooting

### CSS Not Loading

- Ensure all three files (HTML, CSS, JS) are in the same folder
- Check that file paths use `./` prefix: `<link rel="stylesheet" href="./styles.css">`
- Clear browser cache (Ctrl + F5 or Cmd + Shift + R)

### Saved Perfumes Not Appearing

- Check if LocalStorage is enabled in your browser
- Open DevTools → Application → Local Storage to view saved data
- Clear LocalStorage if corrupted: `localStorage.clear()`

### JavaScript Not Working

- Open Browser Console (F12) to check for errors
- Ensure JavaScript is enabled in browser settings
- Verify script tag: `<script src="./script.js"></script>`

## 🚧 Future Enhancements

Potential features for future versions:

- [ ] Export perfume as PDF or image
- [ ] Share compositions via URL
- [ ] User accounts with cloud sync
- [ ] Ingredient filtering and search
- [ ] Scent strength slider
- [ ] Print-friendly composition cards
- [ ] Multi-language support
- [ ] Dark mode toggle

## 📄 License

This project is licensed under the MIT License - feel free to use it for personal or commercial projects.

## 👨‍💻 Author

Created with ❤️ for perfume enthusiasts and creative minds

## 🙏 Acknowledgments

- Inspired by luxury perfume e-commerce platforms
- Design influenced by editorial and minimalist aesthetics
- Ingredient information based on traditional perfumery practices

## 📞 Support

For issues, questions, or suggestions:
- Open an issue in the repository
- Check the troubleshooting section above
- Review browser console for error messages

---

**Enjoy creating your signature scents!** ✨🌸

*Last updated: January 2026*# Contacts-Api-Frontend
