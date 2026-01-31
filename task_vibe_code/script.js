// ===============================================
// AROMA - Bespoke Fragrance Atelier
// JavaScript Logic
// ===============================================

// Ingredients Database
const ingredientsDatabase = {
    floral: [
        { id: 'rose', name: 'Rose', icon: '🌹', note: 'Heart', color: '#D4A5A5' },
        { id: 'jasmine', name: 'Jasmine', icon: '🌼', note: 'Heart', color: '#F8E5A5' },
        { id: 'lavender', name: 'Lavender', icon: '💜', note: 'Heart', color: '#B5A8C5' },
        { id: 'peony', name: 'Peony', icon: '🌸', note: 'Heart', color: '#FFB6C1' },
        { id: 'iris', name: 'Iris', icon: '🪻', note: 'Heart', color: '#B19CD9' },
        { id: 'lily', name: 'Lily', icon: '🪷', note: 'Heart', color: '#FFF5E1' },
        { id: 'magnolia', name: 'Magnolia', icon: '🤍', note: 'Top', color: '#F8F0E3' },
        { id: 'orange-blossom', name: 'Orange Blossom', icon: '🧡', note: 'Heart', color: '#FFB347' }
    ],
    citrus: [
        { id: 'bergamot', name: 'Bergamot', icon: '🍋', note: 'Top', color: '#F4D03F' },
        { id: 'lemon', name: 'Lemon', icon: '🍋', note: 'Top', color: '#FFF44F' },
        { id: 'orange', name: 'Orange', icon: '🍊', note: 'Top', color: '#FFA500' },
        { id: 'grapefruit', name: 'Grapefruit', icon: '🍊', note: 'Top', color: '#FF6F61' },
        { id: 'mandarin', name: 'Mandarin', icon: '🍊', note: 'Top', color: '#FF8C42' },
        { id: 'lime', name: 'Lime', icon: '🍋', note: 'Top', color: '#BFFF00' },
        { id: 'yuzu', name: 'Yuzu', icon: '🍋', note: 'Top', color: '#FFE135' },
        { id: 'neroli', name: 'Neroli', icon: '🌿', note: 'Top', color: '#F5E6D3' }
    ],
    woody: [
        { id: 'sandalwood', name: 'Sandalwood', icon: '🪵', note: 'Base', color: '#C19A6B' },
        { id: 'cedar', name: 'Cedar', icon: '🌲', note: 'Base', color: '#8B4513' },
        { id: 'patchouli', name: 'Patchouli', icon: '🍂', note: 'Base', color: '#654321' },
        { id: 'vetiver', name: 'Vetiver', icon: '🌾', note: 'Base', color: '#7C6A5A' },
        { id: 'oud', name: 'Oud', icon: '🪵', note: 'Base', color: '#3E2723' },
        { id: 'pine', name: 'Pine', icon: '🌲', note: 'Heart', color: '#228B22' },
        { id: 'cypress', name: 'Cypress', icon: '🌲', note: 'Heart', color: '#4A7C59' },
        { id: 'birch', name: 'Birch', icon: '🌳', note: 'Base', color: '#D4C5B9' }
    ],
    spicy: [
        { id: 'cinnamon', name: 'Cinnamon', icon: '🌿', note: 'Heart', color: '#D2691E' },
        { id: 'ginger', name: 'Ginger', icon: '🫚', note: 'Top', color: '#EDC967' },
        { id: 'cardamom', name: 'Cardamom', icon: '🌱', note: 'Top', color: '#8BA446' },
        { id: 'clove', name: 'Clove', icon: '🌰', note: 'Base', color: '#722F37' },
        { id: 'black-pepper', name: 'Black Pepper', icon: '🌶️', note: 'Top', color: '#3E2723' },
        { id: 'nutmeg', name: 'Nutmeg', icon: '🥜', note: 'Heart', color: '#8B7355' },
        { id: 'star-anise', name: 'Star Anise', icon: '⭐', note: 'Heart', color: '#6B4423' },
        { id: 'pink-pepper', name: 'Pink Pepper', icon: '🌸', note: 'Top', color: '#E75480' }
    ],
    fresh: [
        { id: 'mint', name: 'Mint', icon: '🌿', note: 'Top', color: '#3EB489' },
        { id: 'eucalyptus', name: 'Eucalyptus', icon: '🍃', note: 'Top', color: '#44D7A8' },
        { id: 'tea', name: 'Green Tea', icon: '🍵', note: 'Heart', color: '#8FBC8F' },
        { id: 'basil', name: 'Basil', icon: '🌿', note: 'Top', color: '#7CB342' },
        { id: 'cucumber', name: 'Cucumber', icon: '🥒', note: 'Top', color: '#9CCC65' },
        { id: 'water-lily', name: 'Water Lily', icon: '💧', note: 'Heart', color: '#B0E0E6' },
        { id: 'bamboo', name: 'Bamboo', icon: '🎋', note: 'Heart', color: '#8BC34A' },
        { id: 'sea-salt', name: 'Sea Salt', icon: '🌊', note: 'Top', color: '#87CEEB' }
    ],
    oriental: [
        { id: 'vanilla', name: 'Vanilla', icon: '🤎', note: 'Base', color: '#F3E5AB' },
        { id: 'amber', name: 'Amber', icon: '🟠', note: 'Base', color: '#FFBF00' },
        { id: 'musk', name: 'Musk', icon: '🤍', note: 'Base', color: '#E5D3B3' },
        { id: 'tonka-bean', name: 'Tonka Bean', icon: '🫘', note: 'Base', color: '#8B4513' },
        { id: 'incense', name: 'Incense', icon: '🪔', note: 'Base', color: '#696969' },
        { id: 'labdanum', name: 'Labdanum', icon: '🟤', note: 'Base', color: '#8B7355' },
        { id: 'benzoin', name: 'Benzoin', icon: '🤎', note: 'Base', color: '#D2691E' },
        { id: 'myrrh', name: 'Myrrh', icon: '✨', note: 'Base', color: '#9B7653' }
    ]
};

// State Management
let selectedNotes = [];
let currentCategory = 'floral';
let savedCompositions = JSON.parse(localStorage.getItem('aromaCompositions')) || [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
    renderIngredients(currentCategory);
    updateBottleLiquid();
    loadCollection();
});

// Category Management
function initializeCategories() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            
            currentCategory = card.dataset.category;
            renderIngredients(currentCategory);
        });
    });
}

// Render Ingredients
function renderIngredients(category) {
    const list = document.getElementById('ingredientsList');
    const ingredients = ingredientsDatabase[category];
    
    // Update count
    document.getElementById('availableCount').textContent = `${ingredients.length} ingredients`;
    
    // Clear and populate
    list.innerHTML = '';
    
    ingredients.forEach(ingredient => {
        const item = document.createElement('div');
        item.className = 'ingredient-item';
        
        // Check if already selected
        if (selectedNotes.some(n => n.id === ingredient.id)) {
            item.classList.add('selected');
        }
        
        item.innerHTML = `
            <span class="ingredient-emoji">${ingredient.icon}</span>
            <div class="ingredient-name">${ingredient.name}</div>
            <div class="ingredient-type">${ingredient.note} Note</div>
        `;
        
        item.addEventListener('click', () => toggleNote(ingredient, item));
        
        list.appendChild(item);
    });
}

// Toggle Note Selection
function toggleNote(ingredient, element) {
    const maxNotes = 8;
    const isSelected = selectedNotes.some(n => n.id === ingredient.id);
    
    if (isSelected) {
        selectedNotes = selectedNotes.filter(n => n.id !== ingredient.id);
        element.classList.remove('selected');
    } else {
        if (selectedNotes.length >= maxNotes) {
            showNotification('Maximum 8 notes allowed', 'warning');
            return;
        }
        selectedNotes.push(ingredient);
        element.classList.add('selected');
    }
    
    updateComposition();
}

// Update Composition Display
function updateComposition() {
    updatePyramid();
    updateBottleLiquid();
    updateCompositionInfo();
}

// Update Pyramid Visualization
function updatePyramid() {
    const topNotes = selectedNotes.filter(n => n.note === 'Top');
    const heartNotes = selectedNotes.filter(n => n.note === 'Heart');
    const baseNotes = selectedNotes.filter(n => n.note === 'Base');
    
    renderNoteLayer('topNotesList', topNotes);
    renderNoteLayer('heartNotesList', heartNotes);
    renderNoteLayer('baseNotesList', baseNotes);
}

// Render Note Layer
function renderNoteLayer(layerId, notes) {
    const layer = document.getElementById(layerId);
    
    if (notes.length === 0) {
        layer.innerHTML = '';
        return;
    }
    
    layer.innerHTML = notes.map(note => `
        <div class="note-badge">
            <span class="note-badge-icon">${note.icon}</span>
            <span>${note.name}</span>
            <button class="note-remove" onclick="removeNote('${note.id}')">×</button>
        </div>
    `).join('');
}

// Remove Note
function removeNote(noteId) {
    selectedNotes = selectedNotes.filter(n => n.id !== noteId);
    
    // Update UI
    const allItems = document.querySelectorAll('.ingredient-item');
    allItems.forEach(item => {
        const name = item.querySelector('.ingredient-name').textContent;
        const ingredient = Object.values(ingredientsDatabase)
            .flat()
            .find(ing => ing.name === name);
        
        if (ingredient && ingredient.id === noteId) {
            item.classList.remove('selected');
        }
    });
    
    updateComposition();
}

// Update Bottle Liquid
function updateBottleLiquid() {
    const liquid = document.getElementById('liquidFill');
    const fillPercentage = (selectedNotes.length / 8) * 100;
    
    liquid.style.height = `${fillPercentage}%`;
    
    // Update color based on dominant note
    if (selectedNotes.length > 0) {
        const color = selectedNotes[0].color;
        liquid.style.background = `linear-gradient(135deg, ${color} 0%, ${adjustBrightness(color, -20)} 100%)`;
    }
}

// Adjust Color Brightness
function adjustBrightness(hex, percent) {
    hex = hex.replace('#', '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    
    r = Math.min(255, Math.max(0, r + percent));
    g = Math.min(255, Math.max(0, g + percent));
    b = Math.min(255, Math.max(0, b + percent));
    
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

// Update Composition Info
function updateCompositionInfo() {
    const compositionNotes = document.getElementById('compositionNotes');
    const compositionCount = document.getElementById('compositionCount');
    
    if (selectedNotes.length === 0) {
        compositionNotes.textContent = 'No notes selected';
    } else {
        const noteTypes = {};
        selectedNotes.forEach(note => {
            noteTypes[note.note] = (noteTypes[note.note] || 0) + 1;
        });
        
        const summary = Object.entries(noteTypes)
            .map(([type, count]) => `${count} ${type}`)
            .join(', ');
        
        compositionNotes.textContent = summary;
    }
    
    compositionCount.textContent = `${selectedNotes.length} / 8`;
}

// Reset Composition
function resetComposition() {
    selectedNotes = [];
    
    // Remove selected class from all items
    document.querySelectorAll('.ingredient-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Clear name input
    document.getElementById('perfumeName').value = '';
    
    updateComposition();
}

// Save Composition
function saveComposition() {
    if (selectedNotes.length === 0) {
        showNotification('Please select at least one note', 'warning');
        return;
    }
    
    const nameInput = document.getElementById('perfumeName');
    const name = nameInput.value.trim() || generateName();
    
    const composition = {
        id: Date.now(),
        name: name,
        notes: [...selectedNotes],
        createdAt: new Date().toISOString(),
        color: selectedNotes[0].color
    };
    
    savedCompositions.unshift(composition);
    localStorage.setItem('aromaCompositions', JSON.stringify(savedCompositions));
    
    showSuccessModal();
    resetComposition();
    loadCollection();
}

// Generate Random Name
function generateName() {
    const adjectives = ['Eternal', 'Mystic', 'Velvet', 'Golden', 'Silk', 'Midnight', 'Dawn', 'Twilight'];
    const nouns = ['Essence', 'Dream', 'Whisper', 'Aura', 'Mist', 'Rose', 'Garden', 'Symphony'];
    
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    
    return `${adj} ${noun}`;
}

// Load Collection
function loadCollection() {
    const grid = document.getElementById('collectionGrid');
    
    if (savedCompositions.length === 0) {
        grid.innerHTML = `
            <div class="empty-collection">
                <div class="empty-icon">🎨</div>
                <p class="empty-text">Your collection is waiting to be created</p>
                <button class="btn-outline" onclick="scrollToStudio()">Start Creating</button>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = savedCompositions.map(comp => `
        <div class="collection-item">
            <div class="collection-bottle">
                <div class="luxury-bottle">
                    <div class="bottle-top">
                        <div class="bottle-cap-gold"></div>
                        <div class="bottle-neck-glass"></div>
                    </div>
                    <div class="bottle-main-body">
                        <div class="liquid-fill" style="height: 70%; background: linear-gradient(135deg, ${comp.color} 0%, ${adjustBrightness(comp.color, -20)} 100%);"></div>
                        <div class="bottle-highlight"></div>
                        <div class="bottle-shadow"></div>
                    </div>
                </div>
            </div>
            <h3 class="collection-name">${comp.name}</h3>
            <div class="collection-notes">
                ${comp.notes.map(note => `
                    <span class="collection-note-tag">
                        <span>${note.icon}</span>
                        ${note.name}
                    </span>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Show Success Modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    
    setTimeout(() => {
        closeModal();
    }, 3000);
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
}

// Scroll to Studio
function scrollToStudio() {
    const studio = document.getElementById('studio');
    studio.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #FBF9F6;
        color: #2B2B2B;
        padding: 1.5rem 2rem;
        border-left: 4px solid ${type === 'warning' ? '#C9A36C' : '#A67C52'};
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        letter-spacing: 0.5px;
        animation: slideInRight 0.4s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Modal close on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('successModal');
    if (e.target === modal) {
        closeModal();
    }
});