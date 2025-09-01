// DOM Elements
const recipeContainer = document.getElementById('recipeContainer');
const featuredRecipes = document.getElementById('featuredRecipes');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));

// Initialize the application
function init() {
    displayRecipes(recipes);
    displayFeaturedRecipes();
    setupEventListeners();
    updateCopyrightYear();
    setupAnimations();
}

// Display all recipes
function displayRecipes(recipesToShow) {
    recipeContainer.innerHTML = '';
    
    if (recipesToShow.length === 0) {
        recipeContainer.innerHTML = '<div class="col-12 text-center py-5"><h4>No recipes found. Try a different search term.</h4></div>';
        return;
    }
    
    recipesToShow.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeContainer.appendChild(recipeCard);
    });
}

// Create recipe card element
function createRecipeCard(recipe) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';
    
    col.innerHTML = `
        <div class="recipe-card" data-category="${recipe.category}">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
            <div class="recipe-info">
                <h3 class="recipe-title">${recipe.name}</h3>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <span class="badge bg-warning text-dark">${recipe.category}</span>
                    <span class="text-muted"><i class="far fa-clock me-1"></i> ${recipe.cookTime}</span>
                </div>
                <p class="mb-3">${recipe.ingredients.slice(0, 3).join(', ')}...</p>
                <button class="btn btn-sm btn-outline-warning w-100 view-recipe" data-id="${recipe.id}">
                    View Recipe
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Display featured recipes
function displayFeaturedRecipes() {
    const featured = [...recipes].sort((a, b) => b.rating - a.rating).slice(0, 3);
    
    featuredRecipes.innerHTML = featured.map(recipe => `
        <div class="col-md-4 mb-4">
            <div class="card h-100 border-0 shadow-sm">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="card-title mb-0">${recipe.name}</h5>
                        <span class="badge bg-warning text-dark">${recipe.rating} ★</span>
                    </div>
                    <p class="card-text text-muted small">${recipe.ingredients.slice(0, 2).join(', ')}...</p>
                    <button class="btn btn-sm btn-outline-warning view-recipe" data-id="${recipe.id}">
                        View Recipe
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter recipes by category
function filterRecipes(category) {
    if (category === 'all') {
        displayRecipes(recipes);
        return;
    }
    
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    displayRecipes(filteredRecipes);
}

// Search recipes
function searchRecipes(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (!searchTerm) {
        displayRecipes(recipes);
        return;
    }
    
    const results = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm)) ||
        recipe.category.toLowerCase().includes(searchTerm)
    );
    
    displayRecipes(results);
}

// Show recipe details in modal
function showRecipeDetails(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    const modalBody = document.getElementById('recipeDetails');
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${recipe.image}" alt="${recipe.name}" class="img-fluid rounded mb-3">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h3 class="mb-0">${recipe.name}</h3>
                    <span class="badge bg-warning text-dark">${recipe.rating} ★</span>
                </div>
                <p><i class="far fa-clock me-2"></i> ${recipe.cookTime} • <i class="fas fa-utensils me-2"></i> Serves ${recipe.servings}</p>
                
                <h5 class="mt-4">Ingredients</h5>
                <ul class="list-unstyled">
                    ${recipe.ingredients.map(ing => `<li><i class="fas fa-check text-warning me-2"></i>${ing}</li>`).join('')}
                </ul>
            </div>
            <div class="col-md-6">
                <h5>Instructions</h5>
                <ol>
                    ${recipe.instructions.map((step, i) => `<li class="mb-2">${step}</li>`).join('')}
                </ol>
                
                <h5 class="mt-4">Reviews</h5>
                <div class="reviews-container" style="max-height: 200px; overflow-y: auto;">
                    ${recipe.reviews.map(review => `
                        <div class="card mb-2">
                            <div class="card-body p-3">
                                <div class="d-flex justify-content-between">
                                    <h6 class="mb-1">${review.name}</h6>
                                    <small class="text-warning">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</small>
                                </div>
                                <p class="mb-0 small">${review.comment}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('recipeModalLabel').textContent = recipe.name;
    recipeModal.show();
}

// Update copyright year
function updateCopyrightYear() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// Setup animations with GSAP
function setupAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate recipe cards on scroll
    gsap.utils.toArray('.recipe-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: i * 0.1
        });
    });
    
    // Hero section animation
    gsap.from('.hero-section h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
    });
    
    gsap.from('.hero-section p', {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4
    });
    
    gsap.from('.hero-section .btn', {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6
    });
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterRecipes(e.target.dataset.category);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', () => searchRecipes(searchInput.value));
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchRecipes(searchInput.value);
    });
    
    // View recipe details
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-recipe')) {
            const recipeId = parseInt(e.target.dataset.id);
            showRecipeDetails(recipeId);
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);
