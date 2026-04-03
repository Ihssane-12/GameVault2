const games = [
    { id: 1, title: "Elden Ring", price: 59.99, genre: "RPG", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2622380/header.jpg?t=1773099036" },
    { id: 2, title: "Call of Duty", price: 69.99, genre: "FPS", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1938090/06107605348820087bb51ca89ed620c22fe559aa/header.jpg?t=1775145994" },
    { id: 3, title: "God of War", price: 49.99, genre: "Action", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2322010/header.jpg?t=1750909504" },
    { id: 4, title: "Cyberpunk 2077", price: 39.99, genre: "RPG", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/e9047d8ec47ae3d94bb8b464fb0fc9e9972b4ac7/header.jpg?t=1769690377" },
    { id: 5, title: "Doom Eternal", price: 29.99, genre: "FPS", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg?t=1755109910" },
    { id: 6, title: "Spider-Man 2", price: 79.99, genre: "Action", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1817190/ss_1950c472438a5ccde0f9e7c112dceaddd7cd52f1.1920x1080.jpg?t=1763569499" },
];
let cart = JSON.parse(localStorage.getItem('gamevault_cart')) || [];

const gamesGrid = document.getElementById('gamesGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartSection = document.getElementById('cartSection');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');