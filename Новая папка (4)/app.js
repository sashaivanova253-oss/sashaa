document.addEventListener('alpine:init', () => {
  Alpine.data('tipCalculator', () => ({
    // Начальные значения
    billAmount: 0,
    tipPercent: 15,

    // Автоматически пересчитывается при изменении billAmount или tipPercent
    get tipAmount() {
      return this.billAmount * (this.tipPercent / 100);
    },

    get totalAmount() {
      return this.billAmount + this.tipAmount;
    },

    get tipAmountFormatted() {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 2,
      }).format(this.tipAmount);
    },

    get totalAmountFormatted() {
      return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 2,
      }).format(this.totalAmount);
    }
  }));
});
