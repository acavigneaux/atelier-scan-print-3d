/**
 * ATELIER SCAN & PRINT 3D
 * JavaScript pour interactions légères
 */

// ============================================
// ANIMATIONS AU SCROLL
// ============================================

/**
 * Initialise les animations d'apparition au scroll
 * Utilise l'API Intersection Observer pour de meilleures performances
 */
function initScrollAnimations() {
    // Sélectionner tous les éléments à animer
    const animatedElements = document.querySelectorAll(
        '.service-card, .trust-item, .process-step, .portfolio-item'
    );

    // Vérifier que l'API Intersection Observer est disponible
    if (!('IntersectionObserver' in window)) {
        // Si non supporté, afficher tous les éléments directement
        animatedElements.forEach(el => el.classList.add('visible'));
        return;
    }

    // Options pour l'observer
    const observerOptions = {
        threshold: 0.1, // Déclencher quand 10% de l'élément est visible
        rootMargin: '0px 0px -50px 0px' // Déclencher un peu avant
    };

    // Créer l'observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe avec un petit délai pour un effet échelonné
                setTimeout(() => {
                    entry.target.classList.add('fade-in', 'visible');
                }, 100);

                // Arrêter d'observer cet élément une fois animé
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer chaque élément
    animatedElements.forEach((el, index) => {
        // Ajouter la classe fade-in initiale
        el.classList.add('fade-in');

        // Ajouter un délai progressif pour un effet échelonné
        el.style.transitionDelay = `${index * 0.1}s`;

        // Commencer à observer
        observer.observe(el);
    });
}


// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

/**
 * Ajoute une ombre plus prononcée à la navbar au scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}


// ============================================
// MENU HAMBURGER MOBILE
// ============================================

/**
 * Gère l'ouverture/fermeture du menu mobile
 */
function initMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const menu = document.querySelector('.navbar-menu');
    const links = document.querySelectorAll('.navbar-link');

    if (!toggle || !menu) return;

    // Toggle du menu au clic sur le hamburger
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');

        // Empêcher le scroll quand le menu est ouvert
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
    });

    // Fermer le menu au clic sur un lien
    links.forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fermer le menu au clic en dehors
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}


// ============================================
// SMOOTH SCROLL POUR LES ANCRES
// ============================================

/**
 * Améliore le smooth scroll pour les liens d'ancre
 * (Le CSS scroll-behavior: smooth fonctionne déjà, mais on peut ajouter plus de contrôle)
 */
function initSmoothScroll() {
    // Sélectionner tous les liens d'ancre
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');

            // Ignorer les liens vides
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Scroll vers l'élément avec offset pour le header (si nécessaire plus tard)
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Mettre à jour l'URL sans recharger la page
                history.pushState(null, null, targetId);
            }
        });
    });
}


// ============================================
// GESTION DU BOUTON CTA EMAIL
// ============================================

/**
 * Ajoute un tracking ou une confirmation pour les boutons de contact
 * (Optionnel - peut être étendu avec analytics plus tard)
 */
function initContactButtons() {
    const contactButtons = document.querySelectorAll('a[href^="mailto:"]');

    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Ici on pourrait ajouter du tracking analytics
            console.log('Demande de devis cliquée');

            // Optionnel : afficher un message de confirmation
            // ou ouvrir un formulaire de contact personnalisé
        });
    });
}


// ============================================
// LAZY LOADING POUR LES IMAGES (préparation future)
// ============================================

/**
 * Prépare le lazy loading pour les futures images
 * Actuellement avec des placeholders, mais prêt pour de vraies images
 */
function initLazyLoading() {
    // Sélectionner les images avec attribut loading="lazy" (standard HTML5)
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    // Si le navigateur ne supporte pas loading="lazy", utiliser Intersection Observer
    if ('loading' in HTMLImageElement.prototype) {
        // Le navigateur supporte le lazy loading natif, rien à faire
        return;
    }

    // Fallback avec Intersection Observer pour les anciens navigateurs
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
}


// ============================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ============================================

/**
 * Fonction principale appelée quand le DOM est prêt
 */
function init() {
    // Initialiser toutes les fonctionnalités
    initNavbarScroll();
    initMobileMenu();
    initScrollAnimations();
    initSmoothScroll();
    initContactButtons();
    initLazyLoading();

    // Log de confirmation (à retirer en production)
    console.log('✓ Site Atelier Scan & Print 3D chargé');
}

// Attendre que le DOM soit complètement chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // Le DOM est déjà chargé
    init();
}


// ============================================
// GESTION DE LA PERFORMANCE
// ============================================

/**
 * Optimisation : désactiver les animations si l'utilisateur préfère reduced motion
 */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition', 'none');
}
