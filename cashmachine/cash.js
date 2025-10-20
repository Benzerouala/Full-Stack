 class CashRegister {
            constructor() {
                this.availableItems = {
                    'Phone': 300,
                    'Smart TV': 220,
                    'Gaming Console': 150
                };
                this.shoppingCart = [];
            }

            addItem(itemName) {
                if (this.availableItems.hasOwnProperty(itemName)) {
                    this.shoppingCart.push({
                        name: itemName,
                        price: this.availableItems[itemName],
                        id: Date.now()
                    });
                    return true;
                } else {
                    return false;
                }
            }

            removeItem(itemId) {
                this.shoppingCart = this.shoppingCart.filter(item => item.id !== itemId);
            }

            calculateTotalPrice() {
                let total = 0;
                for (let item of this.shoppingCart) {
                    total += item.price;
                }
                return total;
            }

            clearCart() {
                this.shoppingCart = [];
            }

            pay(paymentAmount) {
                let totalPrice = this.calculateTotalPrice();
                let subtotal = totalPrice;
                let discount = 0;

                if (totalPrice > 400) {
                    discount = totalPrice * 0.10;
                    totalPrice = totalPrice - discount;
                }

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
            const cartDiv = document.getElementById('cart');
            const clearCartBtn = document.getElementById('clearCart');
            const totalsDiv = document.getElementById('totals');

            if (register.shoppingCart.length === 0) {
                cartDiv.innerHTML = '<div class="cart-empty">Votre panier est vide</div>';
                clearCartBtn.style.display = 'none';
                totalsDiv.style.display = 'none';
                document.getElementById('message').innerHTML = '';
                return;
            }

            clearCartBtn.style.display = 'block';
            totalsDiv.style.display = 'block';

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
            const subtotal = register.calculateTotalPrice();
            const discount = subtotal > 400 ? subtotal * 0.10 : 0;
            const total = subtotal - discount;

            document.getElementById('subtotal').textContent = subtotal.toFixed(2);
            document.getElementById('discount').textContent = discount > 0 ? `-${discount.toFixed(2)}` : '0';
            document.getElementById('total').textContent = total.toFixed(2);

            const discountLine = document.getElementById('discountLine');
            discountLine.style.display = discount > 0 ? 'flex' : 'none';
        }

        function addToCart(itemName) {
            const success = register.addItem(itemName);
            if (success) {
                showMessage(`"${itemName}" a été ajouté au panier.`, 'info');
                renderCart();
            } else {
                showMessage(`Désolé, nous ne vendons pas "${itemName}".`, 'error');
            }
        }

        function removeFromCart(itemId) {
            register.removeItem(itemId);
            renderCart();
            showMessage('Article retiré du panier.', 'info');
        }

        function clearCart() {
            register.clearCart();
            renderCart();
            document.getElementById('paymentAmount').value = '';
            showMessage('Panier vidé.', 'info');
        }

        function processPayment() {
            if (register.shoppingCart.length === 0) {
                showMessage('Votre panier est vide!', 'error');
                return;
            }

            const paymentAmount = parseFloat(document.getElementById('paymentAmount').value);

            if (isNaN(paymentAmount) || paymentAmount <= 0) {
                showMessage('Veuillez entrer un montant valide.', 'error');
                return;
            }

            const result = register.pay(paymentAmount);

            if (result.success) {
                showMessage(result.message, 'success');
                setTimeout(() => {
                    register.clearCart();
                    renderCart();
                    document.getElementById('paymentAmount').value = '';
                }, 2000);
            } else {
                showMessage(result.message, 'error');
            }
        }

        function showMessage(text, type) {
            const messageDiv = document.getElementById('message');
            messageDiv.className = `message ${type}`;
            messageDiv.textContent = text;
        }

        document.getElementById('payBtn').addEventListener('click', processPayment);
        document.getElementById('clearCart').addEventListener('click', clearCart);
        document.getElementById('paymentAmount').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                processPayment();
            }
        });

        renderProducts();