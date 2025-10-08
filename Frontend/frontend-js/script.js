document.addEventListener("DOMContentLoaded", () => {
            // Mobile menu functionality
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const closeMenuBtn = document.querySelector('#close-menu');
            const mobileNav = document.querySelector('#mobile-nav');
            const overlay = document.querySelector('#overlay');
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileNav.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            
            closeMenuBtn.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
            
            overlay.addEventListener('click', () => {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
            
            // --- Slider logic ---
            const slides = document.querySelector(".slides");
            const indicatorsContainer = document.querySelector(".indicators");
            let currentSlide = 0;
            const totalSlides = 3;
            let slideInterval;

            // Create indicators
            for (let i = 0; i < totalSlides; i++) {
                const indicator = document.createElement("div");
                indicator.classList.add("indicator");
                if (i === 0) indicator.classList.add("active");
                indicator.addEventListener("click", () => goToSlide(i));
                indicatorsContainer.appendChild(indicator);
            }

            function goToSlide(index) {
                currentSlide = (index + totalSlides) % totalSlides;
                updateSlider();
                resetInterval();
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
                resetInterval();
            }

            function prevSlide() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
                resetInterval();
            }

            function updateSlider() {
                if (slides) {
                    slides.style.transform = `translateX(-${currentSlide * 33.333}%)`;
                }
                document.querySelectorAll(".indicator").forEach((indicator, index) => {
                    indicator.classList.toggle("active", index === currentSlide);
                });
            }

            function startInterval() {
                slideInterval = setInterval(nextSlide, 5000);
            }

            function resetInterval() {
                clearInterval(slideInterval);
                startInterval();
            }

            startInterval();

            const nextBtn = document.querySelector(".next");
            const prevBtn = document.querySelector(".prev");
            if (nextBtn) nextBtn.addEventListener("click", nextSlide);
            if (prevBtn) prevBtn.addEventListener("click", prevSlide);

            // --- Populate cloth cards ---
            const clothsData = [
                { id: 1, title: "Men's Slim Fit Jeans", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$59", category: "Clothing" },
                { id: 2, title: "Women's Summer Dress", image: "https://images.unsplash.com/photo-1529903384028-929ae5dccdf0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$45", category: "Clothing" },
                { id: 3, title: "Men's Casual Shirt", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$39", category: "Clothing" },
                { id: 4, title: "Women's Denim Jacket", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$75", category: "Clothing" },
                { id: 5, title: "Unisex Hoodie", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$49", category: "Clothing" },
                { id: 6, title: "Men's Formal Suit", image: "https://images.unsplash.com/photo-1598808503746-f34cfb6c2524?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$129", category: "Clothing" },
                { id: 7, title: "Women's Athletic Leggings", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$35", category: "Clothing" },
                { id: 8, title: "Designer T-Shirt", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$29", category: "Clothing" },
            ];

            const clothContainer = document.getElementById("all-cloths");
            if (clothContainer) {
                clothsData.forEach((item) => {
                    const card = document.createElement("div");
                    card.className = "card";
                    card.innerHTML = `
                        <div class="card-price">${item.price}</div>
                        <div class="card-image-container">
                            <img src="${item.image}" alt="${item.title}" class="card-image" />
                        </div>
                        <div class="card-details">
                            <span class="card-category">${item.category}</span>
                            <h2 class="card-title">${item.title}</h2>
                            <button class="card-button">Add to Cart</button>
                        </div>
                    `;
                    clothContainer.appendChild(card);
                });
            }

            // --- Search toggle logic ---
            const searchContainer = document.getElementById("search-container");
            const searchBtn = document.getElementById("search-btn");

            if (searchBtn && searchContainer) {
                searchBtn.addEventListener("click", (e) => {
                    e.preventDefault();
                    searchContainer.classList.toggle("active");
                    if (searchContainer.classList.contains("active")) {
                        document.querySelector('.search-input').focus();
                    }
                });

                document.addEventListener("click", (e) => {
                    if (!searchContainer.contains(e.target) && e.target !== searchBtn) {
                        searchContainer.classList.remove("active");
                    }
                });
            }

            // --- Electronics Products ---
            const electronicsData = [
                { id: 1, title: "Wireless Earbuds", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$79", category: "Electronics" },
                { id: 2, title: "Smart Home Speaker", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$129", category: "Electronics" },
                { id: 3, title: "Bluetooth Headphones", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$99", category: "Electronics" },
                { id: 4, title: "Smart Watch", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$199", category: "Electronics" },
                { id: 5, title: "4K Action Camera", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$149", category: "Electronics" },
                { id: 6, title: "Wireless Charger", image: "https://images.unsplash.com/photo-1587033411398-7201aea5a99d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$29", category: "Electronics" },
                { id: 7, title: "Portable SSD Drive", image: "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$89", category: "Electronics" },
                { id: 8, title: "Smartphone Gimbal", image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80", price: "$79", category: "Electronics" },
            ];

            const electronicsContainer = document.getElementById("electronics-products");
            if (electronicsContainer) {
                electronicsData.forEach((pro) => {
                    const ecard = document.createElement("div");
                    ecard.className = "card";
                    ecard.innerHTML = `
                        <div class="card-price">${pro.price}</div>
                        <div class="card-image-container">
                            <img src="${pro.image}" alt="${pro.title}" class="card-image" />
                        </div>
                        <div class="card-details">
                            <span class="card-category">${pro.category}</span>
                            <h2 class="card-title">${pro.title}</h2>
                            <button class="card-button">Add to Cart</button>
                        </div>
                    `;
                    electronicsContainer.appendChild(ecard);
                });
            }

            // Cart functionality
            const cartButtons = document.querySelectorAll('.card-button');
            cartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const card = this.closest('.card');
                    const title = card.querySelector('.card-title').textContent;
                    const price = card.querySelector('.card-price').textContent;
                    
                    // Animation effect
                    this.innerHTML = '<i class="fas fa-check"></i> Added';
                    this.style.background = '#28a745';
                    
                    setTimeout(() => {
                        this.innerHTML = 'Add to Cart';
                        this.style.background = '';
                    }, 2000);
                    
                    // Show notification
                    const notification = document.createElement('div');
                    notification.textContent = `Added ${title} to cart!`;
                    notification.style.position = 'fixed';
                    notification.style.bottom = '20px';
                    notification.style.right = '20px';
                    notification.style.backgroundColor = '#28a745';
                    notification.style.color = 'white';
                    notification.style.padding = '15px 25px';
                    notification.style.borderRadius = '8px';
                    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                    notification.style.zIndex = '1000';
                    notification.style.opacity = '0';
                    notification.style.transform = 'translateY(20px)';
                    notification.style.transition = 'all 0.3s ease';
                    
                    document.body.appendChild(notification);
                    
                    // Animate in
                    setTimeout(() => {
                        notification.style.opacity = '1';
                        notification.style.transform = 'translateY(0)';
                    }, 10);
                    
                    // Remove after 3 seconds
                    setTimeout(() => {
                        notification.style.opacity = '0';
                        notification.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            document.body.removeChild(notification);
                        }, 300);
                    }, 3000);
                });
            });
        });