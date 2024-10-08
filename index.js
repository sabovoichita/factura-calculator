document.addEventListener("DOMContentLoaded", function () {
  function calculateBill(baseAmount, costeRemolque) {
    const VAT_RATE = 21 / 100; // 21% VAT (IVA)
    const IRPF_RATE = 1 / 100; // 1% IRPF

    const baseImponible = baseAmount - costeRemolque;

    const irpfDeduction = baseImponible * IRPF_RATE;

    const vatAmount = baseImponible * VAT_RATE;

    const totalAmount = baseImponible - irpfDeduction + vatAmount;

    return {
      baseAmount: baseAmount.toFixed(2),
      baseImponible: baseImponible.toFixed(2),
      irpfDeduction: irpfDeduction.toFixed(2),
      vatAmount: vatAmount.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
    };
  }

  function handleCalculateBill() {
    const baseAmountInput = document.getElementById("baseAmount").value;
    const costeRemolque = 300; // Fixed towing cost (€300)

    const baseAmount = parseFloat(baseAmountInput);

    if (isNaN(baseAmount) || baseAmount <= 0) {
      alert("Please enter a valid base amount.");
      return;
    }

    const result = calculateBill(baseAmount, costeRemolque);

    document.getElementById(
      "baseAmountDisplay"
    ).textContent = `€${result.baseAmount}`;
    document.getElementById(
      "remolqueDisplay"
    ).textContent = `-€${costeRemolque.toFixed(2)}`;
    document.getElementById(
      "baseImponibleDisplay"
    ).textContent = `€${result.baseImponible}`;
    document.getElementById(
      "irpfDisplay"
    ).textContent = `€${result.irpfDeduction}`;
    document.getElementById("vatDisplay").textContent = `€${result.vatAmount}`;
    document.getElementById(
      "totalDisplay"
    ).textContent = `€${result.totalAmount}`;
  }

  document
    .getElementById("calculateBill")
    .addEventListener("click", handleCalculateBill);
});
