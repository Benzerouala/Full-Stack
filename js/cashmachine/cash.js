class CashRegister {
    constructor() {
        // kat initialiser l quantité li 3andna f lma7al o l panier
        this.availableItems = {
            'Phone': 300,
            'Smart TV': 220,
            'Gaming Console': 150
        };
        this.shoppingCart = [];
    }

    addItem(itemName) {
        // kant chof wach l 7aja li bghina nziduha kayna 3andna wla la
        if (this.availableItems.hasOwnProperty(itemName)) {
            // ila kayna, nzidouha l panier b l price dyalha o nzidoulha ID unique
            this.shoppingCart.push({
                name: itemName,
                price: this.availableItems[itemName],
                id: Date.now()
            });
            return true;
        } else {
            // ila makaynach, nrj3ou false
            return false;
        }
    }

    removeItem(itemId) {
        // kan 7ydo l 7aja mn l panier 3la 7sab l ID dyalha
        this.shoppingCart = this.shoppingCart.filter(item => item.id !== itemId);
    }

    calculateTotalPrice() {
        // kan 7sbo total dyal ga3 l les produits li f l panier
        let total = 0;
        for (let item of this.shoppingCart) {
            total += item.price;
        }
        return total;
    }

    clearCart() {
        // kan safiw l panier kamlo
        this.shoppingCart = [];
    }

    pay(paymentAmount) {
        // kan dirou l processus dyal l khlas
        let totalPrice = this.calculateTotalPrice();
        let subtotal = totalPrice;
        let discount = 0;

        // ila l total aktar mn 400, n3tiw réduction dyal 10%
        if (totalPrice > 400) {
            discount = totalPrice * 0.10;
            totalPrice = totalPrice - discount;
        }

        // kan chofou wach l flous li 3tana kaf7in wla la
        if (paymentAmount >= totalPrice) {
            const change = paymentAmount - totalPrice;
            return {
                success: true,
                message: change > 0 
                    ? `Merci pour votre achat! Votre monnaie: ${change.toFixed(2)}` 
                    : 'Merci pour votre achat!',
                subtotal: subtotal,
                discount: discount,
                total: totalPrice,
                change: change
            };
        } else {
            // ila ma kafinch, ngoulou ch7al na9s
            const shortage = totalPrice - paymentAmount;
            return {
                success: false,
                message: `Paiement insuffisant. Il manque ${shortage.toFixed(2)} pour compléter l'achat.`,
                subtotal: subtotal,
                discount: discount,
                total: totalPrice
            };
        }
    }
}

const register = new CashRegister();

function renderProducts() {
    // kan affichiww ga3 l produits li 3andna f lma7al
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    for (let [name, price] of Object.entries(register.availableItems)) {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <div class="product-info">
                <span class="product-name">${name}</span>
                <span class="product-price">${price}</span>
            </div>
            <button class="add-btn" onclick="addToCart('${name}')">Ajouter</button>
        `;
        productsDiv.appendChild(productDiv);
    }
}

function renderCart() {
    // kan affichiww l panier o chno fih
    const cartDiv = document.getElementById('cart');
    const clearCartBtn = document.getElementById('clearCart');
    const totalsDiv = document.getElementById('totals');

    // ila l panier khawi, nwriww message
    if (register.shoppingCart.length === 0) {
        cartDiv.innerHTML = '<div class="cart-empty">Votre panier est vide</div>';
        clearCartBtn.style.display = 'none';
        totalsDiv.style.display = 'none';
        document.getElementById('message').innerHTML = '';
        return;
    }

    clearCartBtn.style.display = 'block';
    totalsDiv.style.display = 'block';

    // naffichiww kol 7aja f l panier
    cartDiv.innerHTML = '';
    for (let item of register.shoppingCart) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <span style="margin-left: 10px; color: #667eea;">${item.price}</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Retirer</button>
        `;
        cartDiv.appendChild(itemDiv);
    }

    updateTotals();
}

function updateTotals() {
    // kant 7sbou o naffichiww l subtotal, réduction, o total
    const subtotal = register.calculateTotalPrice();
    const discount = subtotal > 400 ? subtotal * 0.10 : 0;
    const total = subtotal - discount;

    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('discount').textContent = discount > 0 ? `-${discount.toFixed(2)}` : '0';
    document.getElementById('total').textContent = total.toFixed(2);

    // ila kayn réduction, nwriwh, sinon nkhbiwh
    const discountLine = document.getElementById('discountLine');
    discountLine.style.display = discount > 0 ? 'flex' : 'none';
}

function addToCart(itemName) {
    // kan zidou 7aja l panier
    const success = register.addItem(itemName);
    if (success) {
        showMessage(`"${itemName}" a été ajouté au panier.`, 'info');
        renderCart();
    } else {
        showMessage(`Désolé, nous ne vendons pas "${itemName}".`, 'error');
    }
}

function removeFromCart(itemId) {
    // kan 7ydou 7aja mn l panier
    register.removeItem(itemId);
    renderCart();
    showMessage('Article retiré du panier.', 'info');
}

function clearCart() {
    // kan safiw l panier kaml
    register.clearCart();
    renderCart();
    document.getElementById('paymentAmount').value = '';
    showMessage('Panier vidé.', 'info');
}

function processPayment() {
    // kan dirou l khlas
    // awalan nchofou wach l panier khawi
    if (register.shoppingCart.length === 0) {
        showMessage('Votre panier est vide!', 'error');
        return;
    }

    // nakhdo l montant li dkhal l client
    const paymentAmount = parseFloat(document.getElementById('paymentAmount').value);

    // nchofou wach dakhal chi 7aja s7i7a
    if (isNaN(paymentAmount) || paymentAmount <= 0) {
        showMessage('Veuillez entrer un montant valide.', 'error');
        return;
    }

    // ndirou l processus dyal l khlas
    const result = register.pay(paymentAmount);

    if (result.success) {
        // ila khlss m3a, nwliww message o ba3d chwiya nsafiw l panier
        showMessage(result.message, 'success');
        setTimeout(() => {
            register.clearCart();
            renderCart();
            document.getElementById('paymentAmount').value = '';
        }, 2000);
    } else {
        // ila l flous ma kafinch, nwriww error
        showMessage(result.message, 'error');
    }
}

function showMessage(text, type) {
    // kant affichiww messages l l client (success, error, info)
    const messageDiv = document.getElementById('message');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = text;
}

// kanربطو l events m3a les boutons
document.getElementById('payBtn').addEventListener('click', processPayment);
document.getElementById('clearCart').addEventListener('click', clearCart);
document.getElementById('paymentAmount').addEventListener('keypress', (e) => {
    // ila drbti 3la Enter f input dyal l flous, nkhalsso
    if (e.key === 'Enter') {
        processPayment();
    }
});

// awalan kant affichiww l produits
renderProducts();